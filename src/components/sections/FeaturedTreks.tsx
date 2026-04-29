'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrekCard } from '@/components/ui/TrekCard'
import { getFeaturedTreks } from '@/lib/trek-utils'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const FeaturedTreks = () => {
  const treks = getFeaturedTreks()

  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-saffron text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            Curated Experiences
          </span>
          <h2 className="text-4xl md:text-5xl text-forest font-display italic">
            Choose your trail.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek, index) => (
            <motion.div
              key={trek.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TrekCard trek={trek} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link 
            href="/treks"
            className="group inline-flex items-center gap-3 text-forest font-bold uppercase tracking-widest text-sm hover:text-saffron transition-colors"
          >
            View all treks
            <ArrowRight className="size-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
