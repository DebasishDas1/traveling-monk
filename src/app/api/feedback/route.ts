import { NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";

const feedbackSchema = z.object({
  name: z.string().optional(),
  rating: z.number().min(1).max(5),
  feedback: z.string().min(1, "Feedback cannot be empty"),
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
  try {
    const body = await req.json();
    const parsed = feedbackSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid feedback format." },
        { status: 400 }
      );
    }

    const { name, rating, feedback } = parsed.data;

    // Append feedback to Google Sheet
    const sheets   = getSheets();
    const sheetId  = process.env.GOOGLE_SHEET_SUBSCRIBER_ID;  // Using the same sheet ID for simplicity
    const sheetTab = "Feedback"; // We will create or expect a "Feedback" tab

    if (!sheetId) throw new Error("GOOGLE_SHEET_SUBSCRIBER_ID env var is not set.");

    // Check if the sheet exists
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: sheetId,
    });
    
    const sheetExists = spreadsheet.data.sheets?.some(
      (s) => s.properties?.title === sheetTab
    );

    if (!sheetExists) {
      // Create the sheet
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: sheetId,
        requestBody: {
          requests: [
            {
              addSheet: {
                properties: {
                  title: sheetTab,
                },
              },
            },
          ],
        },
      });

      // Add headers
      await sheets.spreadsheets.values.append({
        spreadsheetId: sheetId,
        range: `${sheetTab}!A1:E1`,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [["Timestamp", "Rating", "Feedback", "Source", "Name"]],
        },
      });
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId:    sheetId,
      range:            `${sheetTab}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          rating,
          feedback,
          "Submitted from Community Page",
          name || "Anonymous",
        ]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("[feedback] Error processing feedback:", err);
    return NextResponse.json({ error: "Failed to submit feedback." }, { status: 500 });
  }
}
