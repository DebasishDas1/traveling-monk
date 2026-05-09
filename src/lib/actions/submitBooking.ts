"use server";

import { google } from "googleapis";
import { BookingActionState, BookingFormValues, bookingSchema } from "@/lib/type";

// ─── Google Sheets auth ───────────────────────────────────────────────────────
function getSheets() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error("Missing Google Sheets credentials. Check GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY env vars.");
  }

  const auth = new google.auth.JWT({
    email,
    key,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

// ─── Server action ────────────────────────────────────────────────────────────
export async function submitBooking(
  _prev: BookingActionState,
  formData: FormData
): Promise<BookingActionState> {

  // 1. Extract raw data
  const rawData = {
    trekSlug: formData.get("trekSlug"),
    name:     formData.get("name"),
    email:    formData.get("email"),
    phone:    formData.get("phone"),
    date:     formData.get("date"),
    guests:   Number(formData.get("guests")),
  };

  // 2. Validate
  const parsed = bookingSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    const firstKey    = (Object.keys(fieldErrors) as (keyof typeof fieldErrors)[])[0];
    const firstMsg    = (firstKey && fieldErrors[firstKey]?.[0]) ?? "Invalid form data";

    return { success: false, message: firstMsg };
  }

  const { trekSlug, name, email, phone, date, guests }: BookingFormValues = parsed.data;

  // 3. Write directly to Google Sheets (no internal HTTP fetch)
  try {
    const sheets   = getSheets();
    const sheetId  = process.env.GOOGLE_SHEET_BOOKING_ID;
    const sheetTab = process.env.GOOGLE_SHEET_BOOKING_TAB ?? "Bookings";

    if (!sheetId) throw new Error("GOOGLE_SHEET_BOOKING_ID env var is not set.");

    await sheets.spreadsheets.values.append({
      spreadsheetId:    sheetId,
      range:            `${sheetTab}!A:H`,
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
          "Pending",
        ]],
      },
    });

    return { success: true, message: "Booking recorded successfully." };

  } catch (err) {
    console.error("[submitBooking] Google Sheets error:", err);
    return { success: false, message: "Could not save your booking. Please try again." };
  }
}