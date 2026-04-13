'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import { business } from '@/data/business'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 overflow-hidden" style={{ backgroundColor: '#F0F7EC' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: 'var(--color-primary)', backgroundColor: 'rgba(28,92,55,0.1)' }}
            >
              About Us
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
            >
              {business.about.headline}
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              {business.about.body}
            </p>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <span className="text-sm">{business.address}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={16} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="text-sm hover:underline cursor-pointer"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {business.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual side — bold stat card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              className="rounded-3xl p-10 relative overflow-hidden"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              {/* Decoration blob */}
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
                style={{ backgroundColor: 'var(--color-cta)' }}
              />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              />

              <div className="relative">
                <div
                  className="text-8xl font-black mb-2 leading-none"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-cta)' }}
                >
                  5★
                </div>
                <p className="text-white/80 text-lg mb-8">Google Rating — Porirua&apos;s most trusted lawn crew</p>

                <div className="border-t border-white/15 pt-8">
                  <p className="text-white/60 text-sm leading-relaxed italic">
                    &ldquo;Very happy with their work, would recommend them.&rdquo;
                  </p>
                  <p className="text-white/40 text-xs mt-2">— Gail Murphy, Porirua</p>
                </div>
              </div>
            </div>

            {/* Floating chip */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -left-5 px-4 py-3 rounded-2xl shadow-xl"
              style={{ backgroundColor: 'var(--color-cta)' }}
            >
              <p className="text-xs font-black uppercase tracking-wide" style={{ color: '#141C14' }}>
                We Cover Those Areas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
