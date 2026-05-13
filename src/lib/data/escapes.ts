import { EscapeType } from "@/lib/type";

export const escapesData: EscapeType[] = [
  {
    id: 1,
    name: "Kasol Manali Escape",
    slug: "kasol-manali",

    location: "Himachal Pradesh, India",
    duration: "4D/3N",

    pickup: "Delhi",

    price: {
      double: 8000,
      triple: 9000,
    },

    gallery: ["/images/kasol-manali.jpg"],

    description:
      "Swap city chaos for mountain calm on this 4-day Manali–Kasol escape. Journey from Delhi into the heart of Himachal, exploring Manali’s iconic spots, adventure at Solang Valley, and the serene riverside life of Kasol. A perfect blend of thrill and slow mountain living.",

    highlights: [
      "Hadimba Devi Temple",
      "Mall Road Manali",
      "Van Vihar nature park",
      "Tibetan Monastery",
      "Solang Valley adventure activities",
      "Atal Tunnel & Sissu",
      "Kasol riverside cafés",
      "Parvati River views",
    ],

    itinerary: [
      {
        day: 0,
        title: "Departure from Delhi",
        description:
          "Evening departure via Volvo/Tempo Traveller. Overnight journey to Manali with en-route stop.",
      },
      {
        day: 1,
        title: "Manali Local Sightseeing",
        description:
          "Arrival, hotel check-in, and exploration of Hadimba Temple, Mall Road, Club House, Van Vihar, and Tibetan Monastery. Evening at leisure.",
      },
      {
        day: 2,
        title: "Solang Valley / Sissu",
        description:
          "Full-day excursion with snow activities and adventure sports like skiing, zipline, and ATV rides.",
      },
      {
        day: 3,
        title: "Manali to Kasol",
        description:
          "Drive to Kasol. Explore Parvati Valley, Chalal walk, café hopping, and Manikaran Sahib.",
      },
      {
        day: 4,
        title: "Return to Delhi",
        description:
          "Relax by the river, café visits, and evening departure to Delhi.",
      },
    ],

    inclusions: [
      "Delhi to Delhi transportation",
      "2 nights stay in Manali",
      "1 night stay in Kasol",
      "Breakfast & Dinner",
      "Sightseeing as per itinerary",
      "Trip captain support",
      "All toll tax and parking",
    ],

    exclusions: [
      "Adventure activities",
      "Entry tickets",
      "Lunch",
      "Personal expenses",
    ],
  },
];