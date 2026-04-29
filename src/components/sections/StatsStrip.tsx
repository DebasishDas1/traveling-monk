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
        onUpdate: (latest) => setCount(Math.floor(latest) === latest ? latest : Number(latest.toFixed(1))),
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <div ref={ref} className="text-center flex flex-col items-center py-12 px-4 border-l border-white/5 first:border-l-0">
      <div className="font-display text-5xl md:text-6xl text-saffron mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
        {label}
      </div>
    </div>
  )
}

export const StatsStrip = () => {
  return (
    <section className="bg-[#1a140f] border-t border-white/5">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <StatItem value={47} label="Treks Completed" suffix="+" />
          <StatItem value={600} label="Lives Changed" suffix="+" />
          <StatItem value={12} label="Mountain Ranges" />
          <StatItem value={4.9} label="Avg. Rating" />
        </div>
      </div>
    </section>
  )
}
