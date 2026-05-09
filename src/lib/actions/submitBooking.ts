"use server";

import { BookingActionState, BookingFormValues, bookingSchema } from "@/lib/type";

export async function submitBooking(
  _prev: BookingActionState,
  formData: FormData
): Promise<BookingActionState> {
  
  // 🧪 Raw extraction
  const rawData = {
    trekSlug: formData.get("trekSlug"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    date: formData.get("date"),
    guests: Number(formData.get("guests")),
  };

  // 🛡️ Validate using the centralized schema
  const parsed = bookingSchema.safeParse(rawData);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    // Safely extract the first error message
    const keys = Object.keys(fieldErrors) as (keyof typeof fieldErrors)[];
    const firstKey = keys[0];
    const firstErrorMessage = (firstKey && fieldErrors[firstKey]?.[0]) || "Invalid form data";

    return {
      success: false,
      message: firstErrorMessage,
      errors: fieldErrors,
    };
  }

  // ✅ Clean data
  const payload: BookingFormValues = parsed.data;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/booking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      return {
        success: false,
        message: "Failed to submit booking. Try again.",
      };
    }

    const data = await res.json();

    return {
      success: data.success,
      message: data.message,
    };
  } catch (error) {
    console.error("Booking submission error:", error);
    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
}