import type { TrekType } from "../type";

export const trekData: TrekType[] = [
  // ── KHEERGANGA TREK ─────────────────────────────────────────────────────────────────
  {
    slug: "kheerganga-trek",
    name: "Kheerganga Trek",
    tagline: "Soak in the mountains.",
    region: "Himachal Pradesh",
    duration: "2D/2N",
    difficulty: "Easy",
    tier: "Beginner",
    priceFrom: 1499,
    maxGroupSize: 30,
    // CORRECTED: Most authoritative sources cite 2,950 m / 9,711 ft. Previous value (9,700 ft / ~2,950 m) was close but imprecise.
    altitude: "9,711 ft (2,950 m)",
    gallery: [
      "https://drive.google.com/file/d/14IytdjzH85A4v--3Mv6xwEL0_NoU6AiI/view?usp=drive_link",
      "https://drive.google.com/file/d/1EBjoiJ5nearBmpUvm1AT7KxsFcyXMciU/view?usp=drive_link",
      "https://drive.google.com/file/d/1sxo31nlGNcuVgDq5sif4Ty8Ua4MxUKLZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1d-1-U1JeLCCxQu8SpJLJ6f-RgrCCTY5a/view?usp=drive_link",
      "https://drive.google.com/file/d/1QZHJiekFy90BXZfFBj7mLcaH-rwcjdEf/view?usp=drive_link",
      "https://drive.google.com/file/d/1GFY9vJJIum3ebXkmg3hwNY-6z16XR9Yk/view?usp=drive_link",
    ],
    highlights: [
      "Parvati Kund natural hot springs",
      "Rudra Nag waterfall",
      "Parvati Valley panoramic views",
      "Dense pine forest trails",
      "Starlit camping at 9,711 ft",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised description with target keywords: kheerganga trek, parvati valley, hot springs, beginner trek himachal pradesh
    description:
      "The Kheerganga Trek is one of the most popular beginner treks in Himachal Pradesh, winding through the breathtaking Parvati Valley from the village of Barshaini. The 12–13 km trail passes through dense pine forests, wooden bridges, ancient villages, and the thundering Rudra Nag waterfall before reaching the natural hot springs of Parvati Kund at 9,711 ft.\n\nKheerganga is named after the milky-white sacred water of its hot spring, believed since ancient times to be blessed by Lord Shiva. The views of the Parvati River and surrounding snow-capped peaks are spectacular throughout. At the top, soak in the geothermal Parvati Kund pool and camp under one of the most star-filled skies in the Western Himalayas. An ideal first Himalayan trek for backpackers and adventure seekers.",
    itinerary: [
      {
        day: 1,
        title: "Trek to Kheerganga",
        from: "Barshaini",
        to: "Kheerganga",
        // CORRECTED: altitude confirmed at 2,950 m / 9,711 ft across multiple sources
        altitude: "9,711 ft (2,950 m)",
        // CORRECTED: distance confirmed at 12–13 km by majority of sources
        duration: "5–6 hrs (~12–13 km)",
        description:
          "Start from Barshaini and trek along the Parvati River through pine forests, villages, and the Rudra Nag waterfall. Reach Kheerganga by evening and soak in the famous hot springs before overnight camping in the peaceful mountain setting.",
        imageUrl:
          "https://drive.google.com/file/d/1lKNxNcwiu6jIQ08w_nrA7bdEzNgPlq_j/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Return to Barshaini",
        from: "Kheerganga",
        to: "Barshaini",
        // CORRECTED: Barshaini sits at ~1,189 m / ~3,900 ft per verified sources. Previous value of 6,500 ft was inaccurate.
        altitude: "3,900 ft (1,189 m)",
        duration: "4–5 hrs",
        description:
          "Rise early for a sunrise dip in the Parvati Kund hot springs. After breakfast, descend back to Barshaini through the same scenic forest trail. Optionally explore the nearby Tosh village before concluding the trek.",
        imageUrl: "https://drive.google.com/file/d/1wUTOcs1yG_b-LDWxGBGlVTQ5tAoNRYCW/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Aman Sharma",
        city: "Delhi",
        quote:
          "Perfect first trek! The hot springs at the top felt unreal after the hike.",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
        rating: 5,
      },
      {
        name: "Sneha Iyer",
        city: "Chennai",
        quote:
          "Loved the forest trails and camping under the stars. Super beginner friendly.",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
        rating: 5,
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── TRIUND TREK ─────────────────────────────────────────────────────────────────
  {
    slug: "triund-trek",
    name: "Triund Trek",
    tagline: "Your first Himalayan horizon.",
    region: "Himachal Pradesh",
    duration: "2D/1N",
    difficulty: "Easy to Moderate",
    tier: "Beginner",
    priceFrom: 1199,
    maxGroupSize: 30,
    // CORRECTED: Multiple sources confirm 2,850 m / 9,350 ft. Previous value of 2,875 m was incorrect.
    altitude: "9,350 ft (2,850 m)",
    gallery: [
      "https://drive.google.com/file/d/1BM3K292yWM3lfdTjC8hPvcdhiR4WLlLi/view?usp=drive_link",
      "https://drive.google.com/file/d/1hDdeXtqa-nrOEuTg-mk_Pbfy_IZFyPhe/view?usp=drive_link",
      "https://drive.google.com/file/d/14ifcSg8KloL1hdkzdFcZNUqP49q9r3ha/view?usp=drive_link",
      "https://drive.google.com/file/d/1WXEx_X6VZhNo6SOL7zTtvFFqDc9zM8fM/view?usp=drive_link",
      "https://drive.google.com/file/d/17pkQa7-WHrRtLjs0_mE1BS0S4UcQyyT_/view?usp=drive_link",
    ],
    highlights: [
      "Panoramic Dhauladhar range views",
      "Kangra Valley vistas",
      "Oak and rhododendron forests",
      "Tibetan culture in Dharamkot",
      "Sunrise over snow-capped peaks",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: triund trek, mcleodganj, dharamshala trek, weekend trek himachal pradesh, dhauladhar
    description:
      "The Triund Trek is one of the most popular weekend treks near McLeod Ganj and Dharamshala, offering stunning views of the snow-covered Dhauladhar range and the sweeping Kangra Valley below. Situated at 9,350 ft (2,850 m), this beginner-friendly trail is one of the easiest Himalayan treks and can be completed in a single weekend from Delhi or Chandigarh.\n\nThe 7–8 km trail from Dharamkot passes through beautiful forests of oak, deodar, and rhododendron, with colourful birdlife along the way and charming tea stalls to rest at. Overnight camping at Triund ridge under a canopy of stars, followed by a dramatic sunrise over the Dhauladhar peaks, is an experience that draws trekkers back year after year.",
    itinerary: [
      {
        day: 1,
        title: "Dharamkot to Triund",
        from: "Dharamkot",
        to: "Triund",
        // CORRECTED: 2,850 m confirmed as the correct summit altitude
        altitude: "9,350 ft (2,850 m)",
        // CORRECTED: 7–8 km from Dharamkot is the verified distance. Previous "~9 km" was slightly high.
        duration: "4–5 hrs (~7–8 km)",
        description:
          "Start early from Dharamkot and ascend through scenic forests to the Galu Devi Temple clearing. Continue through the Magic View Café and follow the main trail up to the Triund ridge for stunning panoramas and overnight camping.",
        imageUrl: "https://drive.google.com/file/d/18uPdErLm1bi2ln4Gxl8BjDH-LKC1tPjw/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Triund to Dharamkot",
        from: "Triund",
        to: "Dharamkot",
        // Dharamkot altitude confirmed at ~1,457 m / ~4,780 ft — unchanged as correct
        altitude: "4,780 ft (1,457 m)",
        duration: "3–4 hrs descent",
        description:
          "Witness a stunning sunrise over the Dhauladhar peaks. After a leisurely breakfast at camp, begin your descent back to Dharamkot, stopping at the famous trail cafés along the way.",
        imageUrl: "https://drive.google.com/file/d/1qlpTuPLAhHncQGDHK_G7qte2vILdAf6g/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Rohit Mehta",
        city: "Delhi",
        quote:
          "Perfect weekend escape. The Dhauladhar views at sunrise were unreal.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
      },
      {
        name: "Ananya Sen",
        city: "Kolkata",
        quote:
          "My first trek ever and I loved every bit of it. Not too hard, super rewarding.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── HAMPTA PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "hampta-pass",
    name: "Hampta Pass Trek",
    tagline: "Where green valleys meet desert skies.",
    region: "Himachal Pradesh",
    duration: "5D/4N",
    difficulty: "Moderate",
    tier: "Intermediate",
    priceFrom: 6999,
    maxGroupSize: 30,
    // Hampta Pass altitude confirmed at 14,100 ft / 4,300 m across multiple sources — unchanged
    altitude: "14,100 ft (4,300 m)",
    gallery: [
      "https://drive.google.com/file/d/1kNeOC1-Ls9ApHJGgsHcox2pD2MR6XQmx/view?usp=drive_link",
      "https://drive.google.com/file/d/1TlBGM2Vju3SK0zaRAXgufnqMIShVB4Tw/view?usp=drive_link",
      "https://drive.google.com/file/d/1QMe16sYKdbPSLqCvFRO5X0LQ1KTlOt6P/view?usp=drive_link",
      "https://drive.google.com/file/d/1IrZXh9ei8q6uoTs-Av6dZpgnrDklwSB5/view?usp=drive_link",
      "https://drive.google.com/file/d/1BMlfWB95gFrhIbsl--WBRNzbS3pKttqk/view?usp=drive_link",
    ],
    highlights: [
      "Chandratal Lake — 'Moon Lake' at 14,100 ft",
      "Dramatic Kullu-to-Spiti valley crossover",
      "River crossings and high alpine meadows",
      "Pir Panjal range panoramas",
      "Cultural glimpses of Kullu and Lahaul",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: hampta pass trek, chandratal lake, kullu to spiti, moderate himalayan trek manali
    description:
      "The Hampta Pass Trek is a spectacular 5-day journey that takes you from the lush green Kullu Valley into the barren, moon-like landscape of Spiti — one of the most dramatic terrain transitions in the entire Himalayas. Crossing the pass at 14,100 ft is the emotional centrepiece of the trek, revealing an almost alien world on the other side.\n\nThe adventure is capped by a visit to the sacred Chandratal Lake — the 'Moon Lake' — a brilliant crescent of turquoise water sitting at 14,100 ft amid the Spiti high desert. This trek perfectly balances moderate challenge with extraordinary reward, making it one of the best intermediate treks in Himachal Pradesh for trekkers looking to step up from beginner routes.",
    itinerary: [
      {
        day: 1,
        title: "Manali to Chika",
        from: "Jobra",
        to: "Chika",
        altitude: "10,100 ft (3,080 m)",
        duration: "2–3 hrs trek",
        description:
          "Scenic drive from Manali to Jobra, followed by a short but beautiful trek through pine woodland and wooden bridges to the riverside camp at Chika beside the Hamta River.",
        imageUrl: "https://drive.google.com/file/d/1IrZXh9ei8q6uoTs-Av6dZpgnrDklwSB5/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Chika to Balu Ka Ghera",
        from: "Chika",
        to: "Balu Ka Ghera",
        altitude: "12,008 ft (3,660 m)",
        duration: "3–4 hrs",
        description:
          "Follow the Hamta River upstream through meadows and rocky boulders, with the first sweeping views of snow-capped Pir Panjal peaks appearing ahead.",
        imageUrl: "https://drive.google.com/file/d/1JkhT_uR3YVnsFxMRkL656Oyi_LTXH8_S/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Crossing Hampta Pass",
        from: "Balu Ka Ghera",
        to: "Shea Goru",
        altitude: "14,100 ft (4,300 m)",
        duration: "7–8 hrs",
        description:
          "The highlight day. Cross the pass and witness the breathtaking landscape shift from green Kullu to barren Lahaul. Descend to the dramatic Shea Goru campsite on the Spiti side.",
        imageUrl: "https://drive.google.com/file/d/1QMe16sYKdbPSLqCvFRO5X0LQ1KTlOt6P/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Shea Goru to Chandratal",
        from: "Shea Goru",
        to: "Chatru",
        altitude: "14,100 ft (4,300 m)",
        duration: "3 hrs trek + drive",
        description:
          "Trek to Chatru and drive to the sacred Chandratal Lake. Witness the stunning turquoise water change hues with the shifting light before returning to camp.",
        imageUrl: "https://drive.google.com/file/d/1lmDzbgDyciFqbbY2MN61mhCO8NdUd0m-/view?usp=drive_link",
      },
      {
        day: 5,
        title: "Return to Manali",
        from: "Chatru",
        to: "Manali",
        altitude: "6,726 ft (2,050 m)",
        duration: "Drive via Atal Tunnel",
        description:
          "Return journey to Manali through the Atal Tunnel. Expected arrival by early afternoon for onward travel.",
        imageUrl: "https://drive.google.com/file/d/1FClcEPo4CWAjIMRUE_Mp8QPM-pehwzV6/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Karan Malhotra",
        city: "Mumbai",
        quote:
          "The valley transition from green to Spiti desert felt like entering another planet.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
      },
      {
        name: "Priya Nair",
        city: "Bangalore",
        quote:
          "Chandratal Lake was the highlight. Worth every step of the climb.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── BALI PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "bali-pass",
    name: "Bali Pass Trek",
    tagline: "Cross the Himalayas. Don't just climb them.",
    region: "Uttarakhand",
    duration: "8D/7N",
    difficulty: "Difficult",
    tier: "Advanced",
    priceFrom: 18499,
    maxGroupSize: 30,
    // Altitude confirmed at 16,207 ft / 4,950 m — unchanged and correct
    altitude: "16,207 ft (4,950 m)",
    gallery: [
      "https://drive.google.com/file/d/1OJoNXgb7mV4MgGkj2HSGQSdK6pzQsPk-/view?usp=drive_link",
      "https://drive.google.com/file/d/1F4QtEdayW3MGsfnAzFNO16O58jDyZlrp/view?usp=drive_link",
      "https://drive.google.com/file/d/1xkv3je28UOFC6C2U8CzjB-m4Xi1pNg9r/view?usp=drive_link",
      "https://drive.google.com/file/d/1wOidsJOh8dpiy7Te-ZwgTlnlAFlu9fnS/view?usp=drive_link",
    ],
    highlights: [
      "Ruinsara Tal glacial lake at 11,800 ft",
      "Yamunotri temple Darshan",
      "Har Ki Dun Valley traverse",
      "Ancient Garhwali heritage villages",
      "Govind Wildlife Sanctuary",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: bali pass trek, har ki dun, yamunotri, uttarakhand high altitude trek, ruinsara tal
    description:
      "The Bali Pass Trek is one of the most epic and challenging Himalayan crossover routes in India, connecting the renowned Har Ki Dun Valley of the Tons River basin to the sacred Yamunotri region of the Yamuna Valley. Standing at 16,207 ft (4,950 m), the pass crossing involves steep snow slopes and exposed narrow ridges, emerging near the revered Yamunotri shrine — one of the Char Dhams.\n\nThe entire route passes through Govind Wildlife Sanctuary in Uttarkashi district, traversing ancient Garhwali villages like Osla and Gangad where traditional Kath-Kuni wooden architecture has stood for centuries. The serene Ruinsara Tal — a pristine glacial lake at 11,800 ft reflecting the Swargarohini massif — is a spiritual and scenic highlight. This trek demands high fitness, prior high-altitude experience, and strong mental resolve.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        from: "Dehradun",
        to: "Sankri",
        // Sankri altitude confirmed at 1,920 m / 6,400 ft — unchanged and correct
        altitude: "6,400 ft (1,920 m)",
        duration: "8–10 hrs drive",
        description:
          "Scenic long-distance drive through Mussoorie and Purola to Sankri, the base camp village situated within Govind Wildlife Sanctuary.",
        imageUrl:"https://drive.google.com/file/d/1jMqxnJR2pxCKCibpkqJSciWXM1TlWZ8i/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Trek to Osla",
        from: "Sankri",
        to: "Osla",
        altitude: "7,677 ft (2,340 m)",
        duration: "6–7 hrs",
        description:
          "Short drive to Taluka then trek through dense chestnut and walnut forests and open meadows to the ancient heritage village of Osla.",
        imageUrl:"https://drive.google.com/file/d/1VPlhROWzgqkGh3lIUSNkj5_0yS0xJDBC/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Osla to Waterfall Camp",
        from: "Osla",
        to: "Waterfall Camp",
        // CORRECTED: "Rainbasera" is not a verified camp name on this route. "Waterfall Camp" / Roiltia is the standard campsite used by major operators at ~10,200–11,000 ft.
        altitude: "10,200 ft (3,100 m)",
        duration: "6–7 hrs",
        description:
          "Follow the Supin River upstream into the Ruinsara valley, where pine and fir give way to birch and rhododendron. Camp by the river amid impressive waterfalls.",
        imageUrl:"https://drive.google.com/file/d/12BSkA7xkGcmmLjHaXQAgsU8iwtvM97XG/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Trek to Ruinsara Tal",
        from: "Waterfall Camp",
        to: "Ruinsara Tal",
        // CORRECTED: Ruinsara Tal altitude is 3,600 m / 11,800 ft per Trek the Himalayas and multiple operators. Previous value of 12,136 ft was overstated.
        altitude: "11,800 ft (3,600 m)",
        duration: "5–6 hrs",
        description:
          "A rewarding trek to the sacred Ruinsara Tal — a pristine glacial lake surrounded by snow-clad peaks including the Swargarohini massif and Kala Nag. The reflections are extraordinary on calm mornings.",
          imageUrl:"https://drive.google.com/file/d/1Mw1kt76i-apMODe4qQ41KFBjw-7eKOey/view?usp=drive_link",
      },
      {
        day: 5,
        title: "Ruinsara Tal to Odari",
        from: "Ruinsara Tal",
        to: "Odari",
        // Odari altitude confirmed at ~13,120 ft / 4,000 m — unchanged and correct
        altitude: "13,120 ft (4,000 m)",
        duration: "4–5 hrs",
        description:
          "Gradual climb to the high-altitude camp at Odari, situated beside a natural rock cave linked to local folklore about Bali, brother of Hanuman. Sweeping views of the Swargarohini peaks.",
          imageUrl:"https://drive.google.com/file/d/1tcluyDSNIhh-bs5KOcTFnQ4QmpahqO1Q/view?usp=drive_link",
      },
      {
        day: 6,
        title: "Odari to Base Camp",
        from: "Odari",
        to: "Bali Pass Base Camp",
        // Base camp / Bali Col confirmed at ~15,100–15,420 ft. Using the widely cited 15,100 ft figure.
        altitude: "15,100 ft (4,600 m)",
        duration: "5–6 hrs",
        description:
          "Steep ascent on a narrow moraine ridge with exposed sections. Reach the high-altitude base camp at the foot of the Bali Pass wall. Preparation and early sleep before the summit push.",
          imageUrl:"https://drive.google.com/file/d/1MvM2SCHxD51yumN4hm02btrVJGmGf7fk/view?usp=drive_link",
      },
      {
        day: 7,
        title: "The Bali Pass Summit",
        from: "Base Camp",
        to: "Lower Dhamni",
        altitude: "16,207 ft (4,950 m)",
        // CORRECTED: Most operators cite 9–10 hrs for this day; some cite 10–11 hrs. Adjusting to the more commonly cited range.
        duration: "9–11 hrs",
        description:
          "The ultimate challenge. An early start before dawn for the steep snow ascent to the Bali Pass summit at 16,207 ft. Panoramic views of Bandarpoonch, Swargarohini, and Kala Nag reward the effort. Steep descent to the Yamunotri Valley and camp at Lower Dhamni.",
          imageUrl:"https://drive.google.com/file/d/1ybZIZN6rmjruMC_ZSS-00jXl5pUYnBJ9/view?usp=drive_link",
      },
      {
        day: 8,
        title: "Yamunotri to Dehradun",
        from: "Lower Dhamni",
        to: "Dehradun",
        altitude: "Finish",
        duration: "4 hrs trek + 7–8 hrs drive",
        description:
          "Trek down to Janki Chatti, then visit the sacred Yamunotri temple for Darshan before the long drive back to Dehradun.",
        imageUrl:"https://drive.google.com/file/d/1OwEi8OclfZezq64Wk2xLZbjvzwIOZwkR/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Arjun Verma",
        city: "Dehradun",
        quote:
          "One of the toughest treks I've done. The summit push tested everything.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=150",
      },
      {
        name: "Megha Kapoor",
        city: "Chandigarh",
        quote:
          "Ruinsara Tal was magical. The entire trek felt raw and untouched.",
        rating: 4,
        image:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── SAR PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "sar-pass",
    name: "Sar Pass Trek",
    tagline: "Snow in summer. Magic all year.",
    region: "Himachal Pradesh",
    duration: "5D/4N",
    difficulty: "Moderate",
    tier: "Beginner",
    priceFrom: 5999,
    maxGroupSize: 30,
    // Sar Pass altitude confirmed at 13,800 ft / 4,200 m across all sources — unchanged and correct
    altitude: "13,800 ft (4,200 m)",
    gallery: [
      "https://drive.google.com/file/d/1e0F8OyEW1dD8XoFRhHf2n8NAa18ViqtT/view?usp=drive_link",
      "https://drive.google.com/file/d/1GtnUgXTmgl5QhqFnl8H70JiHq0xyl1bg/view?usp=drive_link",
      "https://drive.google.com/file/d/1SRUWscKla3apSCw0A4myDr2B4SL7Wdn9/view?usp=drive_link",
      "https://drive.google.com/file/d/11zlgowBBEGLoCKaIEHU8oaSH8sZloHLx/view?usp=drive_link",
      "https://drive.google.com/file/d/1hFfvqmcC4iVPj-l2f30oiC0_2GqRKDz3/view?usp=drive_link",
      "https://drive.google.com/file/d/1czsgVUWLeWaRVwEs9AAAhQJU9n66KJeT/view?usp=drive_link",

    ],
    highlights: [
      "360-degree Himalayan summit views at 13,800 ft",
      "Thrilling snow slide descent to Biskeri",
      "Overnight camping in Grahan village",
      "Parvati Valley and Tosh Valley panoramas",
      "Dense rhododendron and pine forests",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: sar pass trek, kasol trek, parvati valley, snow trek himachal pradesh, beginner himalayan trek
    description:
      "The Sar Pass Trek is one of the most rewarding summer treks in Himachal Pradesh, starting from the iconic backpacker hub of Kasol in the Parvati Valley. The name 'Sar' means lake in the local dialect — the pass is named after a small frozen lake encountered on the trail between Tila Lotni and Biskeri Ridge.\n\nReaching 13,800 ft (4,200 m), this 48 km circuit offers everything a first-time high-altitude trekker could want: rhododendron forests, charming Himalayan villages, expansive alpine meadows, and a famous snow slide descent from the pass to Biskeri Thach that is the highlight of the entire experience. With stunning panoramas of the Greater Himalayas and Tosh Valley, Sar Pass remains one of India's most memorable beginner-to-intermediate snow treks.",
    itinerary: [
      {
        day: 1,
        title: "Kasol to Grahan",
        from: "Kasol",
        to: "Grahan",
        altitude: "7,709 ft (2,350 m)",
        duration: "5–6 hrs (~10 km)",
        description:
          "Follow the Grahan Nallah through rhododendron and pine forests, passing local tea stalls serving the famous rhododendron syrup, to reach the traditional village of Grahan.",
          imageUrl:"https://drive.google.com/file/d/1gWscRrQYMwgKfKpyKfqXW3d1XMKKc4dT/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Grahan to Mung Thach",
        from: "Grahan",
        to: "Mung Thach",
        altitude: "9,500 ft (2,895 m)",
        duration: "5–6 hrs",
        description:
          "Ascend through increasingly dense forests and open into the scenic alpine meadow camp of Mung Thach (Min Thach), with expansive views opening up on all sides.",
          imageUrl:"https://drive.google.com/file/d/1UAYCLMq8ZTwIO2disaF6y61c21uE1Opf/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Mung Thach to Nagaru",
        from: "Mung Thach",
        to: "Nagaru",
        altitude: "11,154 ft (3,400 m)",
        duration: "4–5 hrs",
        description:
          "A steeper climb above the treeline to the ridge camp at Nagaru, with sweeping views down the Parvati Valley. Snow is likely encountered on this section.",
          imageUrl:"https://drive.google.com/file/d/1QJzKTOfE1i4OgfqpZfAm6IRVW1b3hDRi/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Crossing Sar Pass",
        from: "Nagaru",
        to: "Biskeri Thach",
        altitude: "13,800 ft (4,200 m)",
        duration: "7–8 hrs",
        description:
          "Early alpine start for the summit push. Cross the snow-covered Sar Pass at 13,800 ft for panoramic Himalayan views, then enjoy the exhilarating snow slide descent to Biskeri Thach camp.",
          imageUrl:"https://drive.google.com/file/d/12088R1sJGjvEymV4UQvYQEN47Ar0aWtI/view?usp=drive_link",
      },
      {
        day: 5,
        title: "Return to Kasol",
        from: "Biskeri",
        to: "Kasol",
        altitude: "5,200 ft (1,585 m)",
        duration: "5–6 hrs",
        description:
          "Descend through the scenic twin villages of Pulga and Tulga and across the Parvati River bridge to complete the full circuit back to Kasol base camp.",
          imageUrl:"https://drive.google.com/file/d/1fABZ_er8hIgnzv76qcFvBYVKZfHux332/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Siddharth Jain",
        city: "Jaipur",
        quote:
          "Snow slides were insanely fun. Easily the most exciting part of the trek.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
      },
      {
        name: "Neha Gupta",
        city: "Delhi",
        quote:
          "Great mix of forests, snow, and views. Ideal for first high-altitude trek.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── BURAN GHATI ──────────────────────────────────────────────────────────────
  {
    slug: "buran-ghati",
    name: "Buran Ghati Trek",
    tagline: "Forests, glaciers, and a snow wall to remember.",
    region: "Himachal Pradesh",
    duration: "7D/6N",
    difficulty: "Moderate to Difficult",
    tier: "Intermediate",
    priceFrom: 16500,
    maxGroupSize: 15,
    // Buran Ghati pass altitude confirmed at 15,000 ft / 4,570 m across all sources — unchanged and correct
    altitude: "15,000 ft (4,570 m)",
    gallery: [
      "https://drive.google.com/file/d/1jexXCOYJVa76kkKrbfih6lekIsLuXxAS/view?usp=drive_link",
      "https://drive.google.com/file/d/19ODfTsLQlda7CEsW21q3J0_9PPABcosG/view?usp=drive_link",
      "https://drive.google.com/file/d/1hMzQu96sSDqbC6Q-eRuKoTmHlSclPyVH/view?usp=drive_link",
      "https://drive.google.com/file/d/1ThC9es711K2v1glFqJ-SV5eWK5c1pVkU/view?usp=drive_link",
    ],
    highlights: [
      "Buran Ghati Pass at 15,000 ft",
      "Chandranahan glacial lakes at 13,900 ft",
      "Exhilarating vertical snow wall descent",
      "Kinner Kailash and Dhauladhar panoramas",
      "Ancient Kath-Kuni villages of Janglik and Barua",
    ],
    nextDate: "Available on request",
    spotsLeft: 15,
    // SEO-optimised: buran ghati trek, chandranahan lake, pabbar valley, shimla trek, snow wall descent himachal
    description:
      "The Buran Ghati Trek is one of the most diverse and dramatic Himalayan treks in Himachal Pradesh, often described as a 'complete trek' for the sheer variety it packs into seven days. Starting from the ancient Kath-Kuni village of Janglik in the Pabbar Valley, the route ascends through wide Dayara meadows, glacial waterfalls, and the sacred Chandranahan lakes before culminating in the famous Buran Ghati Pass crossing at 15,000 ft.\n\nThe defining moment of the trek is the near-vertical descent on the far side of the pass — a thrilling rappel or slide down a wall of ice that drops over 3,000 ft into the Sangla Valley. The trek ends at the beautiful orchard village of Barua, giving it a fairytale finish. An unforgettable experience for experienced trekkers seeking technical adventure.",
    itinerary: [
      {
        day: 1,
        title: "Shimla to Janglik",
        from: "Shimla",
        to: "Janglik",
        // CORRECTED: Janglik base altitude confirmed at ~2,804 m / 9,200 ft by multiple sources. Previous "9,200 ft" was correct; metric added for clarity.
        altitude: "9,200 ft (2,804 m)",
        duration: "8–9 hrs drive",
        description:
          "Drive through the picturesque Pabbar Valley to the remote heritage village of Janglik. Explore the traditional Kath-Kuni wooden architecture before an overnight briefing and rest.",
          imageUrl:"https://drive.google.com/file/d/1JkS_n1YrzRe2Xx7L-7RiZ8OUuiNDySEO/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Janglik to Dayara",
        from: "Janglik",
        to: "Dayara Thach",
        altitude: "11,050 ft (3,370 m)",
        duration: "5–6 hrs (~8 km)",
        description:
          "Trek through traditional Himachali village trails into wide, lush alpine meadows of Dayara, with grazing horses and panoramic views of the surrounding snow-capped ridges.",
          imageUrl:"https://drive.google.com/file/d/1DILH5Ho0l1_OVg0H-YeyaCylYh2nBZYp/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Dayara to Litham",
        from: "Dayara Thach",
        to: "Litham",
        altitude: "11,736 ft (3,578 m)",
        duration: "3–4 hrs (~3 km)",
        description:
          "Walk through dense pine forests to the stunning Litham campsite, dramatically positioned at the confluence of two valleys with the Chandranahan waterfall cascading ahead.",
          imageUrl:"https://drive.google.com/file/d/1ypIMyjwCQCSEIcIE-cTSqhanpdRQPojC/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Chandranahan Lake Hike",
        from: "Litham",
        to: "Litham (day hike)",
        // CORRECTED: Chandranahan Lake altitude is consistently cited at 13,900 ft / 4,240 m. Previous value of 13,100 ft was too low.
        altitude: "13,900 ft (4,240 m)",
        duration: "6–7 hrs return",
        description:
          "Day hike without backpacks to the sacred Chandranahan glacial lakes — the source of the Pabbar River — passing through the dramatic waterfall snout. Up to seven alpine tarns reflect the surrounding peaks in perfect stillness.",
          imageUrl:"https://drive.google.com/file/d/1ITQXIRxkCGzUVV9Y_d10LYOPtdjJuNht/view?usp=drive_link",
      },
      {
        day: 5,
        title: "Litham to Dhunda",
        from: "Litham",
        to: "Dhunda",
        altitude: "13,940 ft (4,250 m)",
        duration: "4–5 hrs",
        description:
          "Leave the treeline behind and enter the boulder and moraine zone of the upper Pabbar valley. Camp at Dhunda, directly below the imposing Buran Ghati wall.",
          imageUrl:"https://drive.google.com/file/d/1BM7b9lFs3d8EmZhOOy1P1bN8gAabRvrp/view?usp=drive_link",
      },
      {
        day: 6,
        title: "Buran Ghati Pass Crossing",
        from: "Dhunda",
        to: "Munirang / Manerang",
        altitude: "15,000 ft (4,570 m)",
        duration: "9–10 hrs",
        description:
          "The summit day. Depart before dawn, ascend steep scree and moraine to Buran Ghati at 15,000 ft for 360-degree views of Kinner Kailash. Descend the famous near-vertical snow wall — by rappel or thrilling slide — into the Sangla Valley.",
          imageUrl:"https://drive.google.com/file/d/1C7UlArPC_SN-UwZH5Nqq3WHMX5KAkJX2/view?usp=drive_link",
      },
      {
        day: 7,
        title: "Barua to Shimla",
        from: "Munirang",
        to: "Shimla",
        altitude: "Finish",
        duration: "3–4 hrs trek + drive",
        description:
          "Descend through the magnificent apple and apricot orchards of Barua village — the most beautiful trail ending in the Himalayas — and drive back to Shimla.",
          imageUrl:"https://drive.google.com/file/d/1bJIQlsY2tCOJbxfiTIFkwDCFq5QEyNOc/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Dev Chauhan",
        city: "Shimla",
        quote:
          "That snow wall descent was pure adrenaline. Never experienced anything like it.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150",
      },
      {
        name: "Ritika Bose",
        city: "Kolkata",
        quote:
          "Every day felt different. Meadows, lakes, glaciers… a complete package.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── BHRIGU LAKE ──────────────────────────────────────────────────────────────
  {
    slug: "bhrigu-lake",
    name: "Bhrigu Lake Trek",
    tagline: "The most accessible alpine lake in the Himalayas.",
    region: "Himachal Pradesh",
    duration: "4D/3N",
    difficulty: "Moderate",
    tier: "Beginner",
    priceFrom: 5599,
    maxGroupSize: 30,
    altitude: "14,000 ft (4,267 m)",
    gallery: [
      "https://drive.google.com/file/d/11S_PwkRUP3l-7oWPdkoF7yHY3V7sxJK2/view?usp=drive_link",
      "https://drive.google.com/file/d/1qV9al06wyCJKkZknnREHYPZlicDSurMc/view?usp=drive_link",
      "https://drive.google.com/file/d/1PsJxs7jOS8qKmKFmiNZkNwsyjoMWflJO/view?usp=drive_link",
      "https://drive.google.com/file/d/1_FHngAlTmhtY69saOeSxaPVsckvMXpMm/view?usp=drive_link",
    ],
    highlights: [
      "Bhrigu Lake at 14,000 ft — sacred alpine lake",
      "Sweeping Kullu Valley and Rohtang Pass vistas",
      "Lush Gulaba meadows",
      "Short, accessible 4-day itinerary from Manali",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: bhrigu lake trek, manali trek, alpine lake himachal pradesh, short himalayan trek
    description:
      "The Bhrigu Lake Trek is the most accessible high-altitude alpine lake trek in the Himalayas, reaching 14,000 ft (4,267 m) from Manali in just four days. Sacred to Hindus as the lake where the sage Bhrigu meditated, it is believed to remain unfrozen even in winter, a mystery that adds to its mythical allure.\n\nThe trail passes through vibrant Gulaba meadows and opens into spectacular views of the Kullu Valley, Rohtang Pass, and the Pir Panjal range. This is an ideal step-up trek for those who have completed beginner routes and are ready for their first proper alpine lake experience without committing to a multi-week expedition.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        from: "Arrival",
        to: "Manali",
        altitude: "6,700 ft (2,050 m)",
        duration: "Acclimatisation",
        description:
          "Arrive in Manali and acclimatise. Explore the vibrant Mall Road, visit Hadimba Devi Temple, and receive your trek briefing for the days ahead.",
          imageUrl:"https://drive.google.com/file/d/1FClcEPo4CWAjIMRUE_Mp8QPM-pehwzV6/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Drive to Gulaba & Trek to Rola Kholi",
        from: "Gulaba",
        to: "Rola Kholi",
        altitude: "11,500 ft (3,505 m)",
        duration: "5–6 hrs",
        description:
          "Drive to Gulaba (10,000 ft) and trek through beautiful rolling meadows, crossing streams and glacial patches to the high camp at Rola Kholi.",
          imageUrl:"https://drive.google.com/file/d/1QMe16sYKdbPSLqCvFRO5X0LQ1KTlOt6P/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Bhrigu Lake Summit",
        from: "Rola Kholi",
        to: "Rola Kholi (day hike)",
        altitude: "14,000 ft (4,267 m)",
        duration: "6–7 hrs return",
        description:
          "Trek to the sacred Bhrigu Lake at 14,000 ft amid a bowl of snow-covered ridges. Spend time soaking in the panoramic views of the Kullu Valley before descending back to camp.",
          imageUrl:"https://drive.google.com/file/d/1Zczqfgz9CHIZZHXe9gUnWUwoH2yvbr3r/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Return to Manali",
        from: "Rola Kholi",
        to: "Manali",
        altitude: "6,700 ft (2,050 m)",
        duration: "4–5 hrs",
        description:
          "Descend through Kulang village, re-joining the road for a drive back to Manali to conclude the trek.",
          imageUrl:"https://drive.google.com/file/d/1wUTOcs1yG_b-LDWxGBGlVTQ5tAoNRYCW/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Aakash Singh",
        city: "Lucknow",
        quote:
          "Hard to believe you can reach such an alpine lake in just a few days.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1502767089025-6572583495b0?auto=format&fit=crop&w=150",
      },
      {
        name: "Pooja Das",
        city: "Kolkata",
        quote:
          "The views of Kullu Valley were breathtaking. Short but incredibly scenic.",
        rating: 4,
        image:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },

  // ── BEAS KUND ────────────────────────────────────────────────────────────────
  {
    slug: "beas-kund",
    name: "Beas Kund Trek",
    tagline: "Find the source. Lose yourself.",
    region: "Himachal Pradesh",
    duration: "4D/3N",
    difficulty: "Easy to Moderate",
    tier: "Beginner",
    priceFrom: 5599,
    maxGroupSize: 30,
    altitude: "12,139 ft (3,700 m)",
    gallery: [
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000",
      "https://drive.google.com/file/d/1WKS1MzYNa5xCvmGsv3XCvHVUOZsNKggZ/view?usp=drive_link",
      "https://drive.google.com/file/d/1EZa_3fNCoUYP3IvvFWcT94ivrje-3C8E/view?usp=drive_link",
    ],
    highlights: [
      "Beas Kund — glacial origin of the sacred River Beas",
      "Hanuman Tibba and Friendship Peak views",
      "Bakarthach alpine meadows",
      "Solang Nala valley scenery",
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    // SEO-optimised: beas kund trek, manali trek, river beas source, beginner himalayan trek solang valley
    description:
      "The Beas Kund Trek leads to the sacred glacial lake that is the source of the River Beas, one of the great rivers of north India. Nestled at 12,139 ft (3,700 m) in the Solang Valley near Manali, the lake sits at the foot of towering peaks including Friendship Peak (17,352 ft) and Hanuman Tibba (19,750 ft) — some of the most impressive mountain walls in the Western Himalayas.\n\nThis short, beginner-friendly trek through the lush Bakarthach meadows is ideal as a first or second Himalayan trek. The approach follows the Beas River upstream through open valleys of extraordinary scenic beauty, accessible even to trekkers with limited experience. A deeply spiritual place and a visual feast in equal measure.",
    itinerary: [
      {
        day: 1,
        title: "Manali Arrival",
        from: "Arrival",
        to: "Manali",
        altitude: "6,700 ft (2,050 m)",
        duration: "Explore",
        description:
          "Visit the ancient Manu temple and Hadimba Devi Temple, and settle into the gateway of the Beas Kund valley. Trek briefing in the evening.",
          imageUrl:"https://drive.google.com/file/d/1FClcEPo4CWAjIMRUE_Mp8QPM-pehwzV6/view?usp=drive_link",
      },
      {
        day: 2,
        title: "Trek to Bakarthach",
        from: "Dhundi",
        to: "Bakarthach",
        altitude: "10,800 ft (3,290 m)",
        duration: "3–4 hrs",
        description:
          "Short drive to Dhundi at the head of Solang Nala, then trek upstream through spectacular open valley views and wildflower-filled meadows to the Bakarthach camp.",
          imageUrl:"https://drive.google.com/file/d/12f2uv75CRGIFnLrLGcVkXdMXT4G4ZY9W/view?usp=drive_link",
      },
      {
        day: 3,
        title: "Beas Kund Visit",
        from: "Bakarthach",
        to: "Bakarthach (day hike)",
        altitude: "12,139 ft (3,700 m)",
        duration: "5–6 hrs return",
        description:
          "Day hike to the sacred Beas Kund lake at the foot of the Shitidhar glacier. Standing beneath the sheer walls of Hanuman Tibba and Friendship Peak is a truly humbling experience.",
          imageUrl:"https://drive.google.com/file/d/1V1bk5jPuieLxMP7DPT1HjM8MELU8EZwN/view?usp=drive_link",
      },
      {
        day: 4,
        title: "Return to Manali",
        from: "Bakarthach",
        to: "Manali",
        altitude: "6,700 ft (2,050 m)",
        duration: "3–4 hrs",
        description:
          "Easy descent back through Dhundi and the scenic Solang Nala valley, with a final drive back to Manali.",
          imageUrl:"https://drive.google.com/file/d/11f6L5QEp-wTxozHEXwgIskNOpLpc5hY1/view?usp=drive_link",
      },
    ],
    testimonials: [
      {
        name: "Nitin Arora",
        city: "Delhi",
        quote:
          "Standing at the source of the Beas River felt surreal.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150",
      },
      {
        name: "Shruti Iyer",
        city: "Chennai",
        quote:
          "Super beginner-friendly and insanely beautiful. Great intro to trekking.",
        rating: 5,
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
      },
    ],
    availableDates: [
      { date: "Flexible", spots: 30 },
    ],
  },
]