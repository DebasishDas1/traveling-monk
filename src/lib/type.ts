import * as z from "zod";

export type ItineraryDayType = {
  day: number;
  title: string;

  from: string;
  to: string;

  altitude?: string;
  duration?: string;

  description: string;

  imageUrl?: string; // optional visual per day
};

export type TestimonialType = {
  name: string;
  city: string;
  quote: string;
  image: string;
  rating: number; // 1–5
};

export type TrekAvailableDateType = {
  date: string; // supports "Dec 15, 2024" OR "Flexible"
  spots: number;
};

export type TrekDifficultyType =
  | "Easy"
  | "Easy to Moderate"
  | "Moderate"
  | "Moderate to Difficult"
  | "Difficult";

export type TrekTierType =
  | "Beginner"
  | "Intermediate"
  | "Advanced"
  | "All";

export type TrekInclusionExclusionType = {
  included: string[];
  excluded: string[];
};

export type TrekType = {
  slug: string;

  featured: boolean;
  active: boolean;

  name: string;
  tagline: string;

  region: string;

  duration: string;
  altitude: string;

  difficulty: TrekDifficultyType;
  tier: TrekTierType;

  priceFrom: number;
  maxGroupSize: number;

  gallery: string[];

  highlights: string[];

  nextDate: string;
  spotsLeft: number;

  description: string;

  itinerary: ItineraryDayType[];

  testimonials: TestimonialType[];

  availableDates: TrekAvailableDateType[];

  // 🔥 NEW (from your PDF)
  inclusions?: string[];
  exclusions?: string[];

  // optional future-proofing
  minAge?: number;
  pickupDrop?: string;
};


export type EscapeType = {
  id: number;

  name: string;
  slug: string;

  location: string;
  duration: string;

  pickup: string;

  price: {
    double: number;
    triple: number;
  };

  gallery: string[];

  description: string;

  highlights: string[];

  itinerary: ItineraryDayType[]

  inclusions: string[];
  exclusions: string[];
  testimonials: TestimonialType[];
};

// ─── Zod Schema ───────────────────────────────────────────────────────────────
export const bookingSchema = z.object({
  trekSlug: z.string().min(1, "Please select a trek"),
  name:     z.string().min(2, "Name must be at least 2 characters"),
  email:    z.string().email("Enter a valid email address"),
  phone:    z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  date:     z.string().min(1, "Please select a departure date"),
  guests:   z.number().min(1).max(10),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;

// ─── Server action response ───────────────────────────────────────────────────
export type BookingActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[] | undefined>;
} | null;

