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
      slug: 'roopkund-trail',
      name: 'The Mystery of Roopkund',
      tagline: 'A journey to the skeletal lake through high-altitude meadows.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Hard',
      tier: 'Premium',
      duration: '8 Days',
      altitude: '16,470 ft',
      groupSize: '12 Max',
      price: 24500,
      spotsLeft: 3,
    },
    {
      slug: 'valley-of-flowers',
      name: 'Valley of Flowers',
      tagline: 'Walk through a floral paradise in the heart of Uttarakhand.',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Moderate',
      tier: 'Standard',
      duration: '6 Days',
      altitude: '14,400 ft',
      groupSize: '15 Max',
      price: 18000,
      spotsLeft: 10,
    },
    {
      slug: 'bali-pass',
      name: 'Bali Pass Transformation',
      tagline: 'Connect the Yamunotri and Tons valleys in this epic crossing.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000',
      difficulty: 'Extreme',
      tier: 'Transformation',
      duration: '9 Days',
      altitude: '16,207 ft',
      groupSize: '8 Max',
      price: 32000,
      spotsLeft: 2,
    },
  ]
}
