export type ItineraryDayType = {
  day: number;
  title: string;

  from: string;
  to: string;

  altitude: string;
  duration: string;

  description: string;

  imageUrl?: string; // optional visual per day
};

export type TrekTestimonialType = {
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

  name: string;
  tagline: string;

  region: string;

  duration: string;
  altitude: string;

  difficulty: TrekDifficultyType;
  tier: TrekTierType;

  priceFrom: number;
  maxGroupSize: number;

  image: string;

  highlights: string[];

  nextDate: string;
  spotsLeft: number;

  description: string;

  itinerary: ItineraryDayType[];

  testimonials: TrekTestimonialType[];

  availableDates: TrekAvailableDateType[];

  // 🔥 NEW (from your PDF)
  inclusions?: string[];
  exclusions?: string[];

  // optional future-proofing
  minAge?: number;
  pickupDrop?: string;
};