import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { PhilosophyStrip } from '@/components/sections/PhilosophyStrip'
import { FeaturedTreks } from '@/components/sections/FeaturedTreks'
import { TransformationStory } from '@/components/sections/TransformationStory'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { TestimonialCarousel } from '@/components/sections/TestimonialCarousel'
import { CTABanner } from '@/components/sections/CTABanner'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PhilosophyStrip />
      <FeaturedTreks />
      <TransformationStory />
      <HowItWorks />
      <TestimonialCarousel />
      <CTABanner />
    </main>
  )
}
