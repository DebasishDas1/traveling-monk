'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { useUiStore } from '@/stores/uiStore'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const navScrolled = useUiStore((state) => state.navScrolled)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500 px-6 py-4",
        navScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className={cn(
            "font-display italic text-2xl transition-colors",
            navScrolled ? "text-forest" : "text-white"
          )}
        >
          The Traveling Monk
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Treks', 'Stories', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={cn(
                "text-xs uppercase tracking-widest font-bold hover:text-saffron transition-colors",
                navScrolled ? "text-forest/70" : "text-white/80"
              )}
            >
              {item}
            </Link>
          ))}
          <Button 
            variant="saffron" 
            className="rounded-full px-6 h-10 text-xs font-bold uppercase tracking-widest"
          >
            Booking
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("size-6", navScrolled ? "text-forest" : "text-white")} />
          ) : (
            <Menu className={cn("size-6", navScrolled ? "text-forest" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {['About', 'Treks', 'Stories', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest font-bold text-forest py-2 border-b border-stone-50"
                >
                  {item}
                </Link>
              ))}
              <Button 
                variant="saffron" 
                className="w-full rounded-full h-12 font-bold uppercase tracking-widest"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
