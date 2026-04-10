'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { business } from '@/data/business'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function Testimonials() {
  if (business.testimonials.length === 0) return null

  return (
    <section id="testimonials" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: '#F0F7EC' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
            style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(28,92,55,0.1)' }}
          >
            Reviews
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
          >
            What Porirua Says
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {business.testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: 'white', border: '2px solid #E6F4EC' }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="var(--color-cta)" stroke="none" />
                ))}
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: 'var(--color-primary)' }}>{t.name}</p>
                  <p className="text-xs text-slate-400">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
