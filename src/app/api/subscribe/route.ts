// src/app/api/newsletter/route.ts

import { NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Enter a valid email address"),
});

// ─── Google Sheets auth ───────────────────────────────────────────────────────
function getSheets() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) throw new Error("Missing Google Sheets credentials.");

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing.");
    return NextResponse.json(
      { error: "Newsletter service configuration missing." },
      { status: 500 }
    );
  }

  const body = await req.json();
  const parsed = subscribeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message || "Invalid email." },
      { status: 400 }
    );
  }

  const { email } = parsed.data;

  // 2. Send welcome email via Resend
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: "The Traveling Monk <hello@thetravelingmonk.in>",
      to: email,
      subject: "Welcome to The Traveling Monk 🏔️",
      html: `
        <div style="margin:0;padding:0;background-color:#f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
                  
                  <tr>
                    <td style="background:linear-gradient(135deg,#1e293b,#0f172a);color:#ffffff;padding:40px 30px;text-align:center;">
                      <h1 style="margin:0;font-size:28px;letter-spacing:0.5px;">The Traveling Monk</h1>
                      <p style="margin:10px 0 0;font-size:14px;opacity:0.8;">Wander Beyond Ordinary</p>
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:40px 30px;color:#334155;">
                      <h2 style="margin-top:0;font-size:22px;color:#0f172a;">Welcome to the Tribe 🌿</h2>
                      <p style="font-size:15px;margin:16px 0;">You're no longer just a traveler — you're now part of a journey that goes beyond maps and itineraries.</p>
                      <p style="font-size:15px;margin:16px 0;">With <strong>The Traveling Monk</strong>, expect:</p>
                      <ul style="padding-left:18px;font-size:15px;line-height:1.8;margin:16px 0;">
                        <li>Hidden trails & offbeat destinations</li>
                        <li>Early access to exclusive treks</li>
                        <li>Stories that stay with you long after the journey ends</li>
                      </ul>
                      <p style="font-size:15px;margin:24px 0;">The mountains are calling — and now, you'll always be the first to hear it.</p>
                      <div style="text-align:center;margin:30px 0;">
                        <a href="https://thetravelingmonk.in"
                          style="display:inline-block;padding:12px 28px;background:#0f172a;color:#ffffff;text-decoration:none;border-radius:999px;font-size:14px;font-weight:500;">
                          Explore Upcoming Treks →
                        </a>
                      </div>
                      <p style="font-size:14px;color:#64748b;margin-top:30px;">
                        See you on the mountains,<br/>
                        <strong style="color:#0f172a;">— Team The Traveling Monk</strong>
                      </p>
                    </td>
                  </tr>

                  <tr>
                    <td style="background:#f8fafc;padding:20px 30px;text-align:center;font-size:12px;color:#94a3b8;">
                      © ${new Date().getFullYear()} The Traveling Monk. All rights reserved.
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    console.error("[newsletter] Resend error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  // 3. Append subscriber to Google Sheet (runs only after email succeeds)
  try {
    const sheets   = getSheets();
    const sheetId  = process.env.GOOGLE_SHEET_SUBSCRIBER_ID;  // separate sheet from bookings
    const sheetTab = process.env.GOOGLE_SHEET_SUBSCRIBER_TAB ?? "Subscribers";

    if (!sheetId) throw new Error("GOOGLE_SHEET_SUBSCRIBER_ID env var is not set.");

    await sheets.spreadsheets.values.append({
      spreadsheetId:    sheetId,
      range:            `${sheetTab}!A:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          email,
          "Subscribed",
        ]],
      },
    });
  } catch (err) {
    // Don't fail the request — email already sent successfully.
    // Log the error so you can investigate without impacting the user.
    console.error("[newsletter] Google Sheets append error:", err);
  }

  return NextResponse.json({ success: true });
}