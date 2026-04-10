'use client'

import { motion } from 'framer-motion'
import { Scissors, Leaf, Shovel, Trash2, MoreHorizontal, Droplets, type LucideProps } from 'lucide-react'
import { business } from '@/data/business'

type IconComponent = React.ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>>

const iconMap: Record<string, IconComponent> = {
  Scissors,
  Leaf,
  Shovel,
  Trash2,
  MoreHorizontal,
  Spray: Droplets,
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ backgroundColor: '#FAFCF8' }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
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
            What We Do
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
          >
            Every Job Done Right
          </h2>
          <p className="text-slate-500 text-lg mt-3 max-w-lg">
            From regular mowing to a full garden tidy-up — we&apos;ve got Porirua covered.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {business.services.map((service) => {
            const Icon = iconMap[service.icon] ?? Leaf
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(28,92,55,0.12)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="group p-7 rounded-2xl border-2 cursor-default"
                style={{ borderColor: '#E6F4EC', backgroundColor: 'white' }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-200"
                  style={{ backgroundColor: '#E6F4EC' }}
                >
                  <Icon size={22} strokeWidth={1.8} color="var(--color-primary)" />
                </div>
                <h3
                  className="text-xl font-black uppercase leading-tight mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}
                >
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <motion.a
            href="#quote"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm uppercase tracking-wide cursor-pointer"
            style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}
          >
            Get a Free Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
