import { TrekType } from "../type";

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
    altitude: "9,700 ft (~2,950m)",
    gallery: [
      "https://drive.google.com/file/d/1TxqE89xYRDCCUIZvkTL8cGXjF4YXOzLC/view?usp=sharing",
    ],
    highlights: [
      "Parvati Kund hot springs",
      "Rudra Nag waterfall",
      "Parvati Valley views",
      "Forest trails",
      "Starlit camping"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "The Kheerganga Trek is one of the most recommended beginner-friendly treks in Parvati Valley. Starting from Barsheni, the trail winds through dense pine forests, wooden bridges, and scenic Himalayan landscapes filled with waterfalls and charming villages.\n\nThe journey is as rewarding as the destination, with breathtaking views of the Parvati River and surrounding valleys. At the top, relax in the natural hot springs of Parvati Kund and experience peaceful camping under a sky full of stars. Perfect for first-time trekkers and backpackers seeking a quick Himalayan escape.",
    itinerary: [
      {
        day: 1,
        title: "Trek to Kheerganga",
        from: "Barsheni",
        to: "Kheerganga",
        altitude: "9,700 ft",
        duration: "5–6 hrs trek (~12 km)",
        description:
          "Start from Barsheni and trek along the Parvati River through pine forests, villages, and waterfalls. Stop at Rudra Nag for scenic views. Reach Kheerganga by evening and enjoy camping in the peaceful mountain setting.",
        imageUrl: "https://drive.google.com/file/d/1TxqE89xYRDCCUIZvkTL8cGXjF4YXOzLC/view?usp=sharing",
      },
      {
        day: 2,
        title: "Return to Barsheni",
        from: "Kheerganga",
        to: "Barsheni",
        altitude: "6,500 ft (approx)",
        duration: "4–5 hrs trek",
        description:
          "Begin the day with a dip in the Parvati Kund hot springs. After breakfast, descend back to Barsheni. Optionally explore Tosh village before concluding the trek.",
      },
    ],
    testimonials: [
      {
        name: "Aman Sharma",
        city: "Delhi",
        quote: "Perfect first trek! The hot springs at the top felt unreal after the hike.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
        rating: 5,
      },
      {
        name: "Sneha Iyer",
        city: "Chennai",
        quote: "Loved the forest trails and camping under the stars. Super beginner friendly.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150",
        rating: 5,
      },
    ],
    availableDates: [{ date: "Flexible", spots: 30 }],
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
    altitude: "~2,828–2,875 meters",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1000",
    ],
    highlights: [
      "Panoramic Dhauladhar range views",
      "Kangra Valley vistas",
      "Oak and rhododendron forests",
      "Tibetan culture in Dharamkot",
      "Sunrise over snow-capped peaks"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "The Triund Trek is one of the most popular weekend getaways from Delhi and Chandigarh, known for its easy accessibility and beginner-friendly trail. Offering stunning views of the Kangra Valley and the snow-covered Dhauladhar range, it's a perfect introduction to Himalayan trekking.\n\nThe trail is short yet slightly steep, passing through beautiful forests of oak and rhododendron, with chances to spot vibrant birdlife along the way. Starting from Dharamkot, also known as 'Little Lhasa,' the journey offers a glimpse into vibrant Tibetan culture.",
    itinerary: [
      {
        day: 1,
        title: "Dharamkot to Triund",
        from: "Dharamkot",
        to: "Triund",
        altitude: "~2,828–2,875 meters",
        duration: "~4–5 hrs trek (~9 km one way)",
        description:
          "Start the trek early to avoid the harsh mountain sun. From Dharamkot, reach the water tank near the government school where the trail begins through a shaded forest path. After a steady 30-minute climb, arrive at the Galu temple clearing for a quick rest. Follow the main trail straight ahead towards Triund through scenic forest sections.",
      },
      {
        day: 2,
        title: "Triund to Dharamkot",
        from: "Triund",
        to: "Dharamkot",
        altitude: "~1,457 meters",
        duration: "3–4 hrs descent",
        description:
          "Wake up early to witness a stunning sunrise over the Dhauladhar peaks as the first light spreads across the Kangra Valley. Begin your descent back to Dharamkot along the same trail. Take your time and enjoy café stops along the way. For those with extra time, an optional hike beyond Triund to Laka and Lahesh Cave offers a more adventurous experience.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
  },

  // ── HAMPTA PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "hampta-pass",
    name: "Hampta Pass",
    tagline: "Where green valleys meet desert skies.",
    region: "Himachal Pradesh",
    duration: "5D/4N",
    difficulty: "Moderate",
    tier: "Intermediate",
    priceFrom: 6999,
    maxGroupSize: 30,
    altitude: "14,000 to 14,100 feet",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
    ],
    highlights: [
      "Chandratal Lake visit",
      "Dramatic valley crossover – Kullu to Spiti",
      "River crossings and alpine meadows",
      "Pir Panjal range views",
      "Cultural glimpses of Kullu and Lahaul"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "The Hampta Pass with Chandratal Trek is a five-day journey that begins in Manali, located in the Kullu Valley, and concludes at Chatru in the Spiti Valley. Crossing the Hampta Pass at 14,000 feet marks a striking transition into the stark terrain of Spiti. No Hampta Pass trek is complete without a visit to Chandratal Lake at 14,100 feet — renowned for its crystal-clear waters that change hues throughout the day. Classified as moderate, this trek is suitable for both beginners and experienced trekkers.",
    itinerary: [
      {
        day: 1,
        title: "Manali to Chika Trek",
        from: "Manali (Jobra)",
        to: "Chika",
        altitude: "~10,100 ft",
        duration: "2–3 hrs trek",
        description:
          "After breakfast, begin the day with a scenic drive to Jobra. The trail to Chika passes through a short stretch of woodland and crosses two charming wooden bridges, gradually opening up to wider views of the valley. Camp is set along the riverbed for a peaceful first night.",
      },
      {
        day: 2,
        title: "Chika to Balu Ka Ghera Trek",
        from: "Chika",
        to: "Balu Ka Ghera",
        altitude: "~12,008 ft",
        duration: "~3 hrs trek",
        description:
          "The trek follows the right bank of the Hamta River, navigating across rocky boulders. The landscape gradually opens up to reveal the first breathtaking views of the snow-capped Pir Panjal peaks, with the trail winding through picturesque valleys and flower-filled meadows.",
      },
      {
        day: 3,
        title: "Balu Ka Ghera to Shea Goru via Hampta Pass",
        from: "Balu Ka Ghera",
        to: "Shea Goru",
        altitude: "~12,992 ft",
        duration: "Full day",
        description:
          "The trail begins on gentle inclines through the breathtaking Hampta Valley. Crossing over Hampta Pass, the scenery transforms dramatically as you descend into the rugged terrain of Lahaul Valley. The campsite at Shea Goru, meaning 'Cold Street,' is one of the most picturesque spots on the entire trek.",
      },
      {
        day: 4,
        title: "Shea Goru to Chatru, Trek to Chandratal and Back",
        from: "Shea Goru",
        to: "Chatru (via Chandratal)",
        altitude: "~14,026 ft (Chandratal)",
        duration: "~3 hrs trek + drive to Chandratal",
        description:
          "Trek towards Chatru through the scenic Hampta Valley (~3 hrs). Later, drive towards Chandratal Lake at approximately 14,026 feet. Explore the serene lake known for its crystal-clear, ever-changing waters before returning to Chatru for dinner and overnight.",
      },
      {
        day: 5,
        title: "Chatru to Manali",
        from: "Chatru",
        to: "Manali",
        altitude: "~6,726 ft",
        duration: "Drive via Atal Tunnel",
        description:
          "After breakfast, begin the return journey to Manali via the Atal Tunnel. Expected arrival around 1:00 PM. Check in to the hotel, relax, and explore Mall Road in the evening before your onward journey home.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
  },

  // ── BALI PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "bali-pass",
    name: "Bali Pass",
    tagline: "Cross the Himalayas. Don't just climb them.",
    region: "Uttarakhand",
    duration: "8D/7N",
    difficulty: "Difficult",
    tier: "Advanced",
    priceFrom: 18499,
    maxGroupSize: 30,
    altitude: "16,207 ft",
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000",
    ],
    highlights: [
      "Ruinsara Tal (glacial lake)",
      "Yamunotri Darshan – Char Dham temple",
      "Har Ki Dun Valley",
      "Ancient Mahabharata-era villages",
      "Govind Wildlife Sanctuary wildlife"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "The Bali Pass Trek is a classic Himalayan crossover route that connects the Tons River Valley to the Yamuna Valley. Starting from Sankri, the trail passes through Govind National Park and continues via the scenic Har Ki Dun Valley. This is one of the rare crossover routes in India — starting in the lush Tons Valley and emerging near the sacred Yamunotri. At 16,207 ft, the pass crossing involves steep snow slopes, narrow ridges, and then suddenly the entire Yamunotri Valley opening up below you.",
    itinerary: [
      {
        day: 1,
        title: "Dehradun to Sankri",
        from: "Dehradun",
        to: "Sankri",
        altitude: "6,400 ft",
        duration: "~10 hrs drive (240 km)",
        description:
          "Pick-up from Dehradun for a scenic 10-hour drive to Sankri, passing through Mussoorie, Barkot, Purola, Mori, and Netwar along the Tons River. Sankri is a peaceful Himalayan village surrounded by the Govind Wildlife Sanctuary. Dinner and overnight stay in Sankri.",
      },
      {
        day: 2,
        title: "Sankri to Osla",
        from: "Sankri",
        to: "Osla",
        altitude: "~7,677 ft",
        duration: "Full day trek",
        description:
          "After breakfast, begin the trek from Sankri towards Osla through dense forests, open meadows, and flowing streams. The well-defined trail offers beautiful views of the surrounding Himalayan peaks throughout the journey.",
      },
      {
        day: 3,
        title: "Osla to Rainbasera",
        from: "Osla",
        to: "Rainbasera",
        altitude: "~9,842 ft",
        duration: "~7–8 hrs trek (~18 km)",
        description:
          "Trek towards Rainbasera, covering around 18 km in approximately 7–8 hours. The trail follows scenic landscapes gradually leading closer to the Supin River. Camp is set up along the riverbank. Dinner and overnight stay in tents.",
      },
      {
        day: 4,
        title: "Rainbasera to Ruinsara Tal and Back",
        from: "Rainbasera",
        to: "Ruinsara Tal (and back)",
        altitude: "~12,136 ft",
        duration: "~3–4 hrs each way",
        description:
          "Trek towards Ruinsara Tal through meadows and streams. The trail leads to the beautiful high-altitude lake, surrounded by snow-clad peaks like Kala Nag and Bandarpoonch. After exploring the lake, descend back to Rainbasera for overnight.",
      },
      {
        day: 5,
        title: "Rainbasera to Odari",
        from: "Rainbasera",
        to: "Odari",
        altitude: "~13,123 ft",
        duration: "~4 km trek",
        description:
          "A short 4 km walk towards Odari, descending towards the Supin River through forested sections and stream crossings. Odari campsite is set near a natural rock cave linked to local legends, with views of Swargarohini peaks. After lunch, the trek leader conducts training for the upcoming high-altitude climb.",
      },
      {
        day: 6,
        title: "Odari to Base Camp",
        from: "Odari",
        to: "Base Camp",
        altitude: "~15,420 ft",
        duration: "Challenging ascent",
        description:
          "A steep ascent on a narrow ridge with loose rocks and scree. Careful footing is essential. Temperatures can drop below 0°C at night. Rest overnight in tents.",
      },
      {
        day: 7,
        title: "Base Camp to Lower Dhamni (via Bali Pass)",
        from: "Base Camp",
        to: "Lower Dhamni",
        altitude: "16,207 ft (pass summit)",
        duration: "Most challenging day",
        description:
          "The most challenging and rewarding day. The ascent involves a steep climb over snow-covered slopes taking 2–3 hours to reach the narrow summit. From the top, enjoy breathtaking views of Swargarohini, Bandarpoonch, and the Yamunotri Valley. The steep descent requires careful footing, gradually easing towards Lower Dhamni through forested stretches.",
      },
      {
        day: 8,
        title: "Lower Dhamni to Yamunotri to Dehradun",
        from: "Lower Dhamni",
        to: "Dehradun (via Yamunotri)",
        altitude: "Back to base",
        duration: "Easy descent + drive",
        description:
          "An easy descent along a well-defined path. Optional 1–2 hour hike to Yamunotri for darshan at the sacred Char Dham temple — the source of the Yamuna River. Drive back to Dehradun, reaching by evening.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
  },

  // ── SAR PASS ─────────────────────────────────────────────────────────────────
  {
    slug: "sar-pass",
    name: "Sar Pass",
    tagline: "Snow in summer. Magic all year.",
    region: "Himachal Pradesh",
    duration: "5D/4N",
    difficulty: "Easy to Moderate",
    tier: "Beginner",
    priceFrom: 5999,
    maxGroupSize: 30,
    altitude: "~13,800 ft (4,200 m)",
    gallery:[ 
      "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&q=80&w=1000",
    ],
    highlights: [
      "360-degree views from Sar Pass summit",
      "Views of Indrasan, Deo Tibba & Nagaru peaks",
      "Thrilling snow slide descent to Biskeri Thach",
      "Camping at Grahan, Mung Thach & Nagaru",
      "Parvati Valley panoramas throughout"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "The Sar Pass Trek is one of the most popular summer treks in India, best experienced from May to June and September to October when snow is still easily found along the trail. Starting from the charming village of Kasol in Himachal Pradesh, this trek reaches an altitude of 13,800 feet and offers a perfect blend of adventure and natural beauty.\n\nThe journey takes you through dense pine forests, vibrant rhododendron groves, lush meadows, and snow-covered landscapes, all set against the backdrop of majestic Himalayan peaks. Ideal for nature lovers and adventure seekers, Sar Pass offers a refreshing escape from city heat, delivering a rare chance to enjoy snowy landscapes even in peak summer.",
    itinerary: [
      {
        day: 1,
        title: "Kasol to Grahan Village",
        from: "Kasol",
        to: "Grahan Village",
        altitude: "~7,800 ft",
        duration: "4–5 hrs trek",
        description:
          "The Sar Pass journey begins in Kasol, following the left bank of the Grahan Nallah along a well-defined and easy trail. After a few hours of gradual walking, the path turns steeper and rocky as it climbs into denser rhododendron forests. You reach Grahan Village — the last settlement on the trek, beyond which there is no mobile network. Overnight stay in Grahan surrounded by peaceful mountain landscapes.",
      },
      {
        day: 2,
        title: "Grahan Village to Mung Thach",
        from: "Grahan Village",
        to: "Mung Thach",
        altitude: "~9,500 ft",
        duration: "5–6 hrs trek",
        description:
          "Wake up to views of snow-capped mountains and begin the day after breakfast. The trail heads north from Grahan towards Mung Thach, following paths commonly used by locals. As you ascend, you catch glimpses of Sar Top, Nagaru, and Mung Thach across the mountains. The route gradually becomes steeper, passing through dense forest sections. Mung Thach is a scenic campsite with stunning views of the Chandrakhani range.",
      },
      {
        day: 3,
        title: "Mung Thach to Nagaru",
        from: "Mung Thach",
        to: "Nagaru",
        altitude: "~11,800 ft",
        duration: "4–5 hrs trek",
        description:
          "The trail winds through forested sections before opening into steeper, snow-covered slopes. After a steady climb along a narrow ridge, you reach Nagaru campsite. From here, enjoy stunning views of Manikaran in the Parvati Valley and the surrounding Himalayan peaks. Spend the night camping at Nagaru.",
      },
      {
        day: 4,
        title: "Nagaru to Biskeri Thach via Sar Pass",
        from: "Nagaru",
        to: "Biskeri Thach",
        altitude: "13,800 ft (Sar Pass summit)",
        duration: "6–7 hrs trek",
        description:
          "An early start is essential due to the steep snow ascent towards Sar Pass. Upon reaching the summit, you are rewarded with breathtaking 360-degree views of the pass and the towering peaks of the Tosh Valley. From here, the trail turns exciting with a thrilling descent towards Biskeri, often involving a long snow slide across gentle slopes. Cross a few streams before reaching the wide valley of Biskeri Thach for overnight camping.",
      },
      {
        day: 5,
        title: "Biskeri Thach to Kasol",
        from: "Biskeri Thach",
        to: "Kasol",
        altitude: "~5,200 ft",
        duration: "5–6 hrs trek + drive",
        description:
          "Begin the day by soaking in the stunning views of Biskeri — pine forests, towering peaks, and lush green meadows. The descent starts with a steep trail, gradually leading through dense woodland. Pass through the twin villages of Pulga and Tulga, connected by a bridge over the Parvati River, eventually reaching Barshaini. Drive back to Kasol for an overnight stay.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
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
    altitude: "~15,000 ft (4,575 m)",
    gallery:[ "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1000",],
    highlights: [
      "Buran Ghati Pass crossing at 15,000 ft",
      "Chandranahan Lake – glacial origin of Pabbar River",
      "Thrilling snow wall descent on summit day",
      "Kinner Kailash range panoramas",
      "Dense forests, alpine meadows & scenic waterfalls"
    ],
    nextDate: "Available on request",
    spotsLeft: 15,
    description:
      "One of Himachal Pradesh's most scenic and diverse Himalayan treks, Buran Ghati starts from Janglik village and passes through constantly changing landscapes — from lush green valleys to high-altitude snow terrain. The trek features a visit to the sacred Chandranahan Lake, the glacial source of the Pabbar River, and culminates with a thrilling crossing of Buran Ghati Pass at 15,000 ft, complete with an exhilarating snow wall descent.\n\nIdeal for trekkers looking to upgrade from beginner to moderate-difficult level, this 7-day adventure offers a perfect mix of natural beauty, high-altitude challenge, and Himalayan wilderness. Total trek distance is approximately 37 km. A medical fitness certificate and travel insurance are mandatory.",
    itinerary: [
      {
        day: 1,
        title: "Shimla to Janglik (Base Camp)",
        from: "Shimla",
        to: "Janglik",
        altitude: "2,800 m",
        duration: "~8–10 hrs drive (~150 km)",
        description:
          "Arrive in Shimla and begin a scenic drive through the Pabbar Valley to reach Janglik village, the base camp of the trek. Enjoy views of traditional Himachali villages, forests, and rivers along the way. Overnight stay in guesthouse/camps.",
      },
      {
        day: 2,
        title: "Janglik to Dayara Thatch",
        from: "Janglik",
        to: "Dayara Thatch",
        altitude: "3,400 m",
        duration: "5–6 hrs trek (~7 km)",
        description:
          "The trail starts with a gradual ascent through forests and village trails. Enjoy stunning valley views and lush greenery. Reach Dayara, a beautiful meadow surrounded by pine forests. Overnight camping.",
      },
      {
        day: 3,
        title: "Dayara Thatch to Litham",
        from: "Dayara Thatch",
        to: "Litham",
        altitude: "3,500 m",
        duration: "4–5 hrs trek (~5–6 km)",
        description:
          "Walk through dense forests, streams, and open meadows. Cross wooden bridges and witness waterfalls along the way. Litham campsite offers breathtaking views of Chandranahan waterfalls and surrounding peaks.",
      },
      {
        day: 4,
        title: "Acclimatization + Chandranahan Lake Hike",
        from: "Litham",
        to: "Chandranahan Lake (and back)",
        altitude: "~4,000 m",
        duration: "5–6 hrs (~7–8 km round trip)",
        description:
          "A crucial acclimatization day. Hike to the sacred Chandranahan Lake, the origin of the Pabbar River. Enjoy alpine scenery, snow patches, and high-altitude landscapes before returning to Litham for the night.",
      },
      {
        day: 5,
        title: "Litham to Dhunda",
        from: "Litham",
        to: "Dhunda",
        altitude: "~4,000 m",
        duration: "3–4 hrs trek (~4–5 km)",
        description:
          "A shorter trek to Dhunda, located at the base of Buran Ghati Pass. The trail gradually climbs above the tree line into alpine terrain. Rest and prepare mentally and physically for the summit crossing.",
      },
      {
        day: 6,
        title: "Dhunda to Buran Pass to Munirang",
        from: "Dhunda",
        to: "Munirang",
        altitude: "4,575 m (Pass)",
        duration: "8–10 hrs trek (~8–10 km)",
        description:
          "The most challenging and thrilling day. Start early to cross Buran Ghati Pass at 15,000 ft. Experience snow walls, glacier sections, and panoramic Himalayan views including the Kinner Kailash ranges. Descend carefully to Munirang campsite.",
      },
      {
        day: 7,
        title: "Munirang to Barua Village + Drive to Shimla",
        from: "Munirang",
        to: "Shimla (via Barua)",
        altitude: "2,500 m",
        duration: "3–4 hrs trek + drive",
        description:
          "Descend through forests and villages to Barua. From here, drive back to Shimla. The trek concludes with unforgettable Himalayan memories.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 15 }],
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
    altitude: "14,000 ft (4,300 m)",
    gallery:[ "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1000",],
    highlights: [
      "Bhrigu Lake at 14,000 ft – sacred high-altitude gem",
      "Sweeping Kullu Valley and snow-peak vistas",
      "Verdant meadows and vibrant wildflowers",
      "Manali city exploration on Day 1",
      "Short and highly accessible alpine lake trek"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "Bhrigu Lake, known as one of the shortest and most reachable alpine lake treks in the Himalayas, is located in the Kullu region of Himachal Pradesh at an elevation of 14,000 ft. Beginning with verdant meadows, breathtaking views of snow-capped mountains, expansive skyscapes, and vivid flowers, this four-day trek offers a tranquil yet awe-inspiring Himalayan experience.\n\nThe trek starts from Gulaba, approximately 38 km from Manali, and passes through Kothi Thel and Rola Kholi before reaching the sacred lake on Day 3. Bhrigu Lake is also the ideal base camp for those interested in climbing surrounding summits such as Shitidhar, Friendship, and Ladakhi Peak.",
    itinerary: [
      {
        day: 1,
        title: "Arrival at Manali",
        from: "Manali",
        to: "Manali",
        altitude: "~2,050 m",
        duration: "Arrival + city exploration",
        description:
          "Arrive in Manali and get oriented with this vibrant Himalayan hub. The name 'Manali' is derived from 'Manu-Alaya' (the abode of Manu) and the town still has an ancient temple dedicated to Manu. Explore Mall Road in the evening and rest at the hotel after dinner.",
      },
      {
        day: 2,
        title: "Manali (Gulaba) to Rola Kholi",
        from: "Manali / Gulaba",
        to: "Rola Kholi",
        altitude: "~3,500 m",
        duration: "5–6 hrs trek (drive to Gulaba ~1–2 hrs)",
        description:
          "Drive to Gulaba (~38 km from Manali, 1–2 hrs). From Gulaba, begin the journey to Kothi Thel (Tach). Following breakfast at Kothi Thel, trek onwards to Rola Kholi — approximately a 5–6 hour walk through beautiful meadows and forests. Rest at Rola Kholi, have dinner, and sleep for the night.",
      },
      {
        day: 3,
        title: "Rola Kholi to Bhrigu Lake and Back",
        from: "Rola Kholi",
        to: "Bhrigu Lake (and back)",
        altitude: "14,000 ft (~4,300 m)",
        duration: "Full day (lengthy but breathtaking)",
        description:
          "After breakfast, begin the journey to the breathtaking Bhrigu Lake. Today will be a rather lengthy journey but one of the most breathtaking ones, with panoramic views of snow-covered mountains all around. Following some unforgettable moments at the lake, make your way back down to Rola Kholi for overnight.",
      },
      {
        day: 4,
        title: "Rola Kholi to Manali",
        from: "Rola Kholi",
        to: "Manali",
        altitude: "~2,050 m",
        duration: "~3 hrs descent + drive",
        description:
          "After breakfast, make your way back down to Kulang village following the same path from Day 2. Approximately three hours are required for the descent. A vehicle will be waiting at Kulang village to take you back to Old Manali. From here you are free to stay further or return home.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
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
    altitude: "3,700 m (12,139 ft)",
    gallery:[ "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=1000",],
    highlights: [
      "Beas Kund – sacred origin of the River Beas",
      "Views of Hanuman Tibba (5,990 m) and Friendship Peak",
      "Deo Tibba and Indrasan peak panoramas",
      "Bakarthach alpine meadows",
      "Solang Nala adventure activities on return"
    ],
    nextDate: "Available on request",
    spotsLeft: 30,
    description:
      "Beas Kund is a small high-altitude alpine lake in the upper valley of Solang, located at the north end of Manali at the foot of Mt. Shitidhar, Ladakhi, and Friendship Peak. Situated at 3,700 metres (12,139 ft), the lake is named in honour of Rishi Sage Vyas and is considered the glacial origin of the River Beas.\n\nThe trek begins at Dhundi, 8 km from Solang Nala. The trail follows the stream as it ascends past spectacular mountain views including Seven Sisters Peak, Hanuman Tibba, and Friendship Peak. Ideal for trekkers of all ages, the Beas Kund trek also serves as the base camp for those interested in climbing Shitidhar, Friendship, and Ladakhi peaks.",
    itinerary: [
      {
        day: 1,
        title: "Arrival at Manali",
        from: "Manali",
        to: "Manali",
        altitude: "~2,050 m",
        duration: "Arrival + city exploration",
        description:
          "Arrive in Manali — the gateway to the Beas Kund trek. Explore Mall Road in the evening, visit the ancient Manu temple, and rest at the hotel after dinner.",
      },
      {
        day: 2,
        title: "Manali to Dhundi to Bakarthach",
        from: "Manali",
        to: "Bakarthach",
        altitude: "~3,300 m",
        duration: "Drive to Dhundi (~1 hr) + ~5 km trek",
        description:
          "After breakfast, drive to Dhundi via Solang Nala (~8 km from Solang). From Dhundi, begin the trek following the river upstream towards Bakarthach — approximately 5 km along a straightforward path. The trail passes under the Seven Sisters peak with views of the Bakarthach meadows, Deo Tibba (6,001 m), and Indrasan peak (6,220 m). Make your way to the Bakarthach camp.",
      },
      {
        day: 3,
        title: "Bakarthach to Beas Kund and Back",
        from: "Bakarthach",
        to: "Beas Kund (and back)",
        altitude: "3,700 m (12,139 ft)",
        duration: "Full day",
        description:
          "After breakfast, make a cautious ascent to Beas Kund, traversing stones and rocks. You will soon come across the sacred little lake — the origin of the River Beas and the base camp for Shitidhar, Ladakhi, and Friendship peaks. Enjoy the breathtaking panorama of the surrounding glaciers and snow-covered mountains. Return to Bakarthach camp for overnight.",
      },
      {
        day: 4,
        title: "Bakarthach to Dhundi to Manali",
        from: "Bakarthach",
        to: "Manali",
        altitude: "~2,050 m",
        duration: "Trek to Dhundi + drive",
        description:
          "After breakfast, depart Bakarthach and make your way back to Dhundi. If you are interested in quad biking, paragliding, or any of the other adventure activities available in Solang Nala, spend a few hours here before heading back to Manali.",
      },
    ],
    testimonials: [],
    availableDates: [{ date: "Flexible", spots: 30 }],
  },
];