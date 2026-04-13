'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
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

          {/* Visual side — real photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <Image
                src="/garden-maintenance-porirua.jpeg"
                alt="Garden maintenance work Cesar's Lawns Services Porirua Wellington"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(28,92,55,0.55) 0%, transparent 55%)' }} />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm font-medium italic">
                  &ldquo;Very happy with their work, would recommend them.&rdquo;
                </p>
                <p className="text-white/60 text-xs mt-1">— Gail Murphy, Porirua</p>
              </div>
            </div>

            {/* Floating rating chip */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-xl"
              style={{ backgroundColor: 'var(--color-cta)' }}
            >
              <p className="text-sm font-black" style={{ color: '#141C14' }}>5★ Google</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
