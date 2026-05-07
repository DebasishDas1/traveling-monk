"use server"

import { z } from "zod";

const bookingSchema = z.object({
  trekSlug: z.string().min(1, "Please select an expedition"),
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid Indian phone number"),
  date: z.string().min(1, "Please select a date"),
  guests: z.coerce.number().min(1).max(10),
});

export type BookingState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitBooking(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    date: formData.get("date"),
    guests: formData.get("guests"),
    trekSlug: formData.get("trekSlug"),
  };

  const validatedFields = bookingSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your entries.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Google Sheets Integration
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SHEETS_SCRIPT_URL;

  if (GOOGLE_SCRIPT_URL) {
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Useful for Apps Script if needed, but normally JSON is fine
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedFields.data),
      });
    } catch (error) {
      console.error("Google Sheets Storage Error:", error);
    }
  }

  console.log("Booking Received:", validatedFields.data);

  return {
    success: true,
    message: "Your reservation request has been received. We will contact you shortly.",
  };
}
