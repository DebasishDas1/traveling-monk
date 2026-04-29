export type Trek = {
  slug: string
  name: string
  tagline: string
  image: string
  difficulty: 'Easy' | 'Moderate' | 'Hard' | 'Extreme'
  tier: 'Standard' | 'Premium' | 'Transformation'
  duration: string
  altitude: string
  groupSize: string
  price: number
  spotsLeft: number
}

export const getFeaturedTreks = (): Trek[] => {
  return [
    {
      slug: 'kedarkantha-trek',
      name: 'Kedarkantha Trek',
      tagline: 'Transformation',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Moderate',
      tier: 'Transformation',
      duration: '6 Days',
      altitude: '12,500 ft',
      groupSize: 'Max 15 pax',
      price: 18000,
      spotsLeft: 5,
    },
    {
      slug: 'chopta-tungnath',
      name: 'Chopta–Tungnath',
      tagline: 'Weekend',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Easy',
      tier: 'Standard', // Will map to "Weekend" in badge if needed, but let's use tier
      duration: '3 Days',
      altitude: '13,100 ft',
      groupSize: 'Max 20 pax',
      price: 9500,
      spotsLeft: 12,
    },
    {
      slug: 'himalayan-monk-retreat',
      name: 'Himalayan Monk Retreat',
      tagline: 'Premium',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Hard',
      tier: 'Premium',
      duration: '10 Days',
      altitude: '15,000 ft',
      groupSize: 'Max 10 pax',
      price: 65000,
      spotsLeft: 4,
    },
  ]
}
