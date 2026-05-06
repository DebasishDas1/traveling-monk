"use server"

import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  date: z.string().min(1, "Please select a date"),
  guests: z.string().min(1, "Required"),
  trekSlug: z.string(),
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

  // In a real app, you would:
  // 1. Check rate limiting (e.g., via Upstash Redis)
  // 2. Save to database (Prisma/Drizzle)
  // 3. Send email notification (Resend/SendGrid)
  
  console.log("Booking Received:", validatedFields.data);

  return {
    success: true,
    message: "Your reservation request has been received. We will contact you shortly.",
  };
}
