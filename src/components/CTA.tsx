'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import { business } from '@/data/business'

export default function CTA() {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: 'var(--color-cta)' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-6xl font-black uppercase leading-tight mb-5"
          style={{ fontFamily: 'var(--font-heading)', color: '#141C14' }}
        >
          Ready for a Tidy<br />Section?
        </h2>
        <p className="text-black/60 text-lg mb-10">
          Call us or get a free quote online — we cover those areas.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide cursor-pointer"
            style={{ backgroundColor: '#141C14', color: 'white' }}
          >
            Get a Free Quote
            <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href={`tel:${business.phone.replace(/\s/g, '')}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wide cursor-pointer border-2 border-black/20 hover:border-black/40 transition-colors"
            style={{ color: '#141C14' }}
          >
            <Phone size={16} />
            {business.phone}
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
