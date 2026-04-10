'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business } from '@/data/business'

export default function TrustBar() {
  if (business.stats.length === 0) return null

  return (
    <section
      className="py-8 px-6"
      style={{ backgroundColor: 'var(--color-cta)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={20} fill="#141C14" stroke="none" />
            ))}
          </div>
          <span className="font-black text-base uppercase tracking-wide" style={{ color: '#141C14', fontFamily: 'var(--font-heading)' }}>
            5-Star Google Rating
          </span>
        </div>
        <div
          className="hidden md:block w-px h-8 opacity-30"
          style={{ backgroundColor: '#141C14' }}
        />
        <span className="font-bold text-sm uppercase tracking-widest" style={{ color: 'rgba(20,28,20,0.65)' }}>
          Porirua&apos;s trusted lawn &amp; garden crew
        </span>
      </motion.div>
    </section>
  )
}
