'use client'

import { motion } from 'framer-motion'
import { business } from '@/data/business'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function Process() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#FAFCF8' }}>
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
            style={{ color: 'var(--color-primary)', backgroundColor: '#E6F4EC' }}
          >
            How It Works
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
          >
            Simple as That
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {business.process.map((item, i) => (
            <motion.div
              key={item.step}
              variants={stepVariants}
              className="relative"
            >
              {/* Connector line (desktop) */}
              {i < business.process.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-px z-0"
                  style={{ backgroundColor: '#D1E8D8' }}
                />
              )}

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: i % 2 === 0 ? 'var(--color-primary)' : '#E6F4EC' }}
                >
                  <span
                    className="text-xl font-black"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: i % 2 === 0 ? 'var(--color-cta)' : 'var(--color-primary)',
                    }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="text-xl font-black uppercase mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
                >
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-wrap gap-4 items-center"
        >
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wide cursor-pointer"
            style={{ backgroundColor: 'var(--color-cta)', color: '#141C14' }}
          >
            Get Your Free Quote
          </motion.a>
          <span className="text-slate-400 text-sm">— No pressure, no obligation</span>
        </motion.div>
      </div>
    </section>
  )
}
