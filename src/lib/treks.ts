export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type TrekTestimonial = {
  name: string;
  city: string;
  quote: string;
  image: string;
  rating: number;
};

export type Trek = {
  slug: string;
  name: string;
  tagline: string;
  region: string;
  duration: string;
  difficulty: "Beginner" | "Moderate" | "Challenging";
  tier: "Weekend" | "Transformation" | "Premium";
  priceFrom: number;
  maxGroupSize: number;
  altitude: string;
  image: string;
  highlights: string[];
  nextDate: string;
  spotsLeft: number;
  description: string;
  itinerary: ItineraryDay[];
  testimonials: TrekTestimonial[];
  availableDates: { date: string; spots: number }[];
};

export const trekData: Trek[] = [
  {
    slug: "kedarkantha",
    name: "Kedarkantha Trek",
    tagline: "The winter transformation.",
    region: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    tier: "Transformation",
    priceFrom: 18000,
    maxGroupSize: 15,
    altitude: "12,500 ft",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Summit sunrise", "Juda Ka Talab", "Pine forests"],
    nextDate: "Dec 15, 2024",
    spotsLeft: 4,
    description: "The Kedarkantha trek is a classic winter expedition that takes you through the heart of the Govind Pashu Vihar National Park. Known for its perfect snow-covered trails and the dramatic 360-degree view of Himalayan peaks from the summit, it is a journey of both physical endurance and spiritual quietude.\n\nFrom the dense pine forests of Sankri to the mystical frozen waters of Juda Ka Talab, every step is a meditation in movement. This is more than a trek; it is a seasonal rite of passage for those seeking the clarity that only the high mountains can provide.",
    itinerary: [
      { day: 1, title: "Arrival at Sankri", description: "Journey from Dehradun to the picturesque village of Sankri, the base camp of our trek." },
      { day: 2, title: "Trek to Juda Ka Talab", description: "Walk through dense pine forests to reach the mystical frozen lake." },
      { day: 3, title: "Kedarkantha Base Camp", description: "A steady ascent to the base camp, offering breathtaking views of the Swargarohini range." },
      { day: 4, title: "Summit Push & Return", description: "Pre-dawn start for the summit. Experience a sunrise that will change your perspective forever." },
      { day: 5, title: "Descend to Sankri", description: "A gentle walk back through the forests, reflecting on the journey completed." },
      { day: 6, title: "Departure", description: "Return journey to Dehradun with a heart full of mountains and a mind at peace." }
    ],
    testimonials: [
      { name: "Rahul Verma", city: "Mumbai", quote: "The silence at the summit was something I had never experienced. Truly transformational.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150", rating: 5 },
      { name: "Aditi Rao", city: "Bangalore", quote: "The arrangements were flawless. The guides weren't just showing the way, they were part of the experience.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "Dec 15, 2024", spots: 4 },
      { date: "Dec 22, 2024", spots: 10 },
      { date: "Jan 05, 2025", spots: 15 }
    ]
  },
  {
    slug: "chopta-tungnath",
    name: "Chopta-Tungnath",
    tagline: "Walking through the clouds.",
    region: "Uttarakhand",
    duration: "3 Days",
    difficulty: "Beginner",
    tier: "Weekend",
    priceFrom: 9500,
    maxGroupSize: 20,
    altitude: "13,100 ft",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Highest Shiva Temple", "Chandrashila Summit", "Bird watching"],
    nextDate: "Nov 10, 2024",
    spotsLeft: 12,
    description: "Known as the 'Mini Switzerland of India', Chopta is the starting point for the trek to Tungnath, the highest Shiva temple in the world. The trail continues to the Chandrashila summit, providing a panoramic view of the great Himalayan peaks including Nanda Devi, Trishul, and Chaukhamba.",
    itinerary: [
      { day: 1, title: "Chopta Arrival", description: "Arrival at the lush meadows of Chopta and acclimatization." },
      { day: 2, title: "Summit Day", description: "Trek to Tungnath Temple and further to Chandrashila Peak for sunrise." },
      { day: 3, title: "Departure", description: "A final morning in the meadows before heading back." }
    ],
    testimonials: [
      { name: "Vikram Seth", city: "Delhi", quote: "Perfect for beginners. The views from Chandrashila are unmatched.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "Nov 10, 2024", spots: 12 },
      { date: "Nov 24, 2024", spots: 18 }
    ]
  },
  {
    slug: "coorg-trek",
    name: "Coorg Trek",
    tagline: "Mist, coffee, and green peaks.",
    region: "South India",
    duration: "2 Days",
    difficulty: "Beginner",
    tier: "Weekend",
    priceFrom: 7500,
    maxGroupSize: 18,
    altitude: "5,700 ft",
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Coffee plantations", "Mist-covered trails", "Coorgi food"],
    nextDate: "Oct 28, 2024",
    spotsLeft: 8,
    description: "Escape to the Western Ghats of Karnataka. This trek takes you through rolling hills, ancient coffee estates, and lush tropical forests. It's an immersion into the unique culture and landscape of the Kodava people.",
    itinerary: [
      { day: 1, title: "Estate Walk", description: "Trek through private coffee estates and reach the ridge for sunset." },
      { day: 2, title: "Peak Ascent", description: "Early morning ascent to the peak followed by a traditional Kodava lunch." }
    ],
    testimonials: [
      { name: "Priya Nair", city: "Chennai", quote: "The best weekend getaway. The coffee plantation walk was magical.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "Oct 28, 2024", spots: 8 },
      { date: "Nov 12, 2024", spots: 15 }
    ]
  },
  {
    slug: "rupin-pass",
    name: "Rupin Pass",
    tagline: "The ultimate Himalayan crossover.",
    region: "Himachal",
    duration: "8 Days",
    difficulty: "Challenging",
    tier: "Premium",
    priceFrom: 28000,
    maxGroupSize: 10,
    altitude: "15,250 ft",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Three-stage waterfall", "Rupin river valley", "Crossover pass"],
    nextDate: "May 20, 2025",
    spotsLeft: 3,
    description: "The Rupin Pass is a classic high-altitude crossover trek from Uttarakhand to Himachal Pradesh. The trail is legendary for its changing landscapes, from pine forests and glacial meadows to the stunning three-stage Rupin waterfall.",
    itinerary: [
      { day: 1, title: "Drive to Dhaula", description: "Journey into the remote corners of Uttarakhand." },
      { day: 2, title: "Trek to Sewa", description: "Walking along the Rupin river through remote villages." },
      { day: 3, title: "Jhaka Village", description: "Acclimatization day in the 'Hanging Village' of Jhaka." },
      { day: 4, title: "Saruwas Thatch", description: "Entering the high alpine meadows." },
      { day: 5, title: "Waterfall Camp", description: "Camping at the base of the majestic Rupin waterfall." },
      { day: 6, title: "Rupin Pass Crossing", description: "The challenging climb to the pass and descent into Himachal." },
      { day: 7, title: "Sangla Descent", description: "Walking down into the beautiful Sangla valley." },
      { day: 8, title: "Departure", description: "Drive from Sangla to Shimla." }
    ],
    testimonials: [
      { name: "Anish Gupta", city: "Pune", quote: "Life-changing. The waterfall camp is the most beautiful place on Earth.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "May 20, 2025", spots: 3 },
      { date: "Jun 05, 2025", spots: 8 }
    ]
  },
  {
    slug: "valley-of-flowers",
    name: "Valley of Flowers",
    tagline: "A bloom above the world.",
    region: "Uttarakhand",
    duration: "6 Days",
    difficulty: "Moderate",
    tier: "Transformation",
    priceFrom: 22000,
    maxGroupSize: 15,
    altitude: "14,400 ft",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Hemkund Sahib", "Floral diversity", "Glacial streams"],
    nextDate: "Aug 12, 2025",
    spotsLeft: 6,
    description: "A UNESCO World Heritage site, the Valley of Flowers is a high-altitude Himalayan valley that comes alive with hundreds of species of wild flowers during the monsoon. It's a surreal landscape of colors set against the backdrop of rugged mountain peaks.",
    itinerary: [
      { day: 1, title: "Govindghat Arrival", description: "Base camp arrival via Rishikesh." },
      { day: 2, title: "Ghangaria Trek", description: "A steady climb through lush forests along the river." },
      { day: 3, title: "The Valley", description: "Exploring the vast expanse of the Valley of Flowers." },
      { day: 4, title: "Hemkund Sahib", description: "Steep ascent to the sacred high-altitude lake." },
      { day: 5, title: "Descent", description: "Returning to Govindghat." },
      { day: 6, title: "Departure", description: "Return drive to Rishikesh." }
    ],
    testimonials: [
      { name: "Sneha Kapur", city: "Hyderabad", quote: "It felt like walking in a dream. The sheer variety of flowers is mind-blowing.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "Aug 12, 2025", spots: 6 },
      { date: "Aug 20, 2025", spots: 12 }
    ]
  },
  {
    slug: "hampta-pass",
    name: "Hampta Pass",
    tagline: "Contrast beyond compare.",
    region: "Himachal",
    duration: "5 Days",
    difficulty: "Moderate",
    tier: "Transformation",
    priceFrom: 20000,
    maxGroupSize: 15,
    altitude: "14,100 ft",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000",
    highlights: ["Chandratal Lake", "Desert mountain views", "Snow slides"],
    nextDate: "Jul 15, 2025",
    spotsLeft: 5,
    description: "The Hampta Pass is unique for the dramatic change in scenery it offers. You start from the lush green Kullu valley and cross over into the stark, desert-like mountains of Spiti. The journey concludes with a visit to the crescent-shaped Chandratal lake.",
    itinerary: [
      { day: 1, title: "Manali to Jobra", description: "Short drive and trek into the pine forests." },
      { day: 2, title: "Jwara Meadows", description: "Walking through alpine meadows and river crossings." },
      { day: 3, title: "Balu Ka Ghera", description: "Camping at the base of the pass amidst boulder fields." },
      { day: 4, title: "Pass Crossing", description: "Crossing Hampta Pass and descending into the Spiti valley." },
      { day: 5, title: "Chandratal & Return", description: "Visit to the moon lake and return drive to Manali." }
    ],
    testimonials: [
      { name: "Arjun Das", city: "Kolkata", quote: "The contrast between the two valleys is unbelievable. A must-do trek.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150", rating: 5 }
    ],
    availableDates: [
      { date: "Jul 15, 2025", spots: 5 },
      { date: "Jul 28, 2025", spots: 10 }
    ]
  },
];
