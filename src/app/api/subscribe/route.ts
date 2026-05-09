import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from environment variables.");
    return NextResponse.json(
      { error: "Internal Server Error: Newsletter service configuration missing." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "The Traveling Monk <hello@thetravelingmonk.in>",
      to: email,
      subject: "Welcome to The Traveling Monk 🏔️",
      html: `
    <div style="margin:0;padding:0;background-color:#f4f4f4;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            
            <!-- Card Container -->
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
              
              <!-- Header -->
              <tr>
                <td style="background:linear-gradient(135deg,#1e293b,#0f172a);color:#ffffff;padding:40px 30px;text-align:center;">
                  <h1 style="margin:0;font-size:28px;letter-spacing:0.5px;">
                    The Traveling Monk
                  </h1>
                  <p style="margin:10px 0 0;font-size:14px;opacity:0.8;">
                    Wander Beyond Ordinary
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px 30px;color:#334155;">
                  <h2 style="margin-top:0;font-size:22px;color:#0f172a;">
                    Welcome to the Tribe 🌿
                  </h2>

                  <p style="font-size:15px;margin:16px 0;">
                    You’re no longer just a traveler — you’re now part of a journey that goes beyond maps and itineraries.
                  </p>

                  <p style="font-size:15px;margin:16px 0;">
                    With <strong>The Traveling Monk</strong>, expect:
                  </p>

                  <ul style="padding-left:18px;font-size:15px;line-height:1.8;margin:16px 0;">
                    <li>Hidden trails & offbeat destinations</li>
                    <li>Early access to exclusive treks</li>
                    <li>Stories that stay with you long after the journey ends</li>
                  </ul>

                  <p style="font-size:15px;margin:24px 0;">
                    The mountains are calling — and now, you’ll always be the first to hear it.
                  </p>

                  <!-- CTA Button -->
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

              <!-- Footer -->
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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}