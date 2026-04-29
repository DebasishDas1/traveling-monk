'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const StatItem = ({ value, label, suffix = "" }: { value: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl md:text-6xl text-saffron mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  )
}

export const PhilosophyStrip = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-forest py-32 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white/90 italic leading-tight max-w-3xl mx-auto">
            "The path is not outside. It never was."
          </h2>
          <div className="w-16 h-px bg-saffron mx-auto my-10" />
        </motion.div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <StatItem value={47} label="Treks" suffix="+" />
          <StatItem value={600} label="Lives Changed" suffix="+" />
          <StatItem value={4.9} label="Rating" suffix="★" />
          <StatItem value={12} label="Ranges" />
        </div>
      </div>
    </section>
  )
}
