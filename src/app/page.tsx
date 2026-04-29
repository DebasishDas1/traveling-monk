import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { StatsStrip } from '@/components/sections/StatsStrip'
import { PhilosophyStrip } from '@/components/sections/PhilosophyStrip'
import { FeaturedTreks } from '@/components/sections/FeaturedTreks'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsStrip />
      <FeaturedTreks />
      <PhilosophyStrip />
      <TestimonialCarousel />
      <HowItWorks />
      <CTABanner />
    </main>
  )
}
