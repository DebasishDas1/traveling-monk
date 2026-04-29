'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export const PhilosophyStrip = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-[#1a140f] py-40 px-6 overflow-hidden">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white/90 italic leading-tight max-w-4xl mx-auto mb-12">
            "The path is not outside. It never was."
          </h2>
          <div className="w-16 h-px bg-saffron mx-auto mb-10" />
          <span className="text-white/40 text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
            The Monk Philosophy
          </span>
        </motion.div>
      </div>
    </section>
  )
}
