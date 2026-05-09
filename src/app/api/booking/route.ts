// src/app/api/booking/route.ts

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { bookingSchema } from "@/lib/type";

function getAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error("Missing Google service account credentials in env vars.");
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

// ─── Route handler ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const parsed = bookingSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid form data.", errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { trekSlug, name, email, phone, date, guests } = parsed.data;

    const auth   = getAuth();
    const sheets = google.sheets({ version: "v4", auth });

    const sheetId  = process.env.GOOGLE_SHEET_BOOKING_ID!;
    const sheetTab = process.env.GOOGLE_SHEET_BOOKING_TAB ?? "Bookings";

    // Append row: [Timestamp, Trek, Name, Email, Phone, Date, Guests, Status]
    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range:         `${sheetTab}!A:H`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          trekSlug,
          name,
          email,
          phone,
          date,
          guests,
          "Pending", // default status column
        ]],
      },
    });

    return NextResponse.json({ success: true, message: "Booking recorded successfully." });
  } catch (err) {
    console.error("[/api/booking] Error:", err);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}