'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { business } from '@/data/business'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = business.hero.cyclingWords

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length)
    }, 2200)
    return () => clearInterval(timer)
  }, [words.length])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden bg-white"
    >
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large blob top-right */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ backgroundColor: 'var(--color-primary)' }}
        />
        {/* Medium blob bottom-left */}
        <div
          className="absolute -bottom-48 -left-24 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ backgroundColor: 'var(--color-cta)' }}
        />
        {/* Subtle grid lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1C5C37" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left — text content */}
        <div className="flex flex-col">
          {/* Badge */}
          {business.hero.badge && (
            <motion.div variants={itemVariants} className="mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: 'rgba(125, 199, 68, 0.15)', color: '#2d7a1f', border: '1px solid rgba(125, 199, 68, 0.4)' }}
              >
                {business.hero.badge}
              </span>
            </motion.div>
          )}

          {/* Main headline with cycling word */}
          <motion.div variants={itemVariants}>
            <h1
              className="text-5xl sm:text-7xl lg:text-[80px] font-black uppercase leading-none tracking-tight mb-4"
              style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
            >
              Porirua&apos;s
              <br />
              <span className="flex items-baseline gap-4 flex-wrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ color: 'var(--color-cta)', display: 'inline-block' }}
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
                <span>Crew</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
            style={{ color: 'var(--color-primary)', opacity: 0.75 }}
          >
            {business.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base cursor-pointer"
              style={{ backgroundColor: 'var(--color-cta)', color: '#141C14' }}
            >
              {business.hero.ctaPrimary}
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href={`tel:${business.phone.replace(/\s/g, '')}`}
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
              className="flex items-center gap-2 px-7 py-4 rounded-full font-bold text-base cursor-pointer border-2 transition-colors"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              <Phone size={16} />
              {business.phone}
            </motion.a>
          </motion.div>

          {/* Service tags */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mt-10">
            {['Lawn Mowing', 'Hedge Trimming', 'Weeding', 'Garden Cleanup', 'Rubbish Removal'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide"
                style={{ backgroundColor: 'rgba(28,92,55,0.07)', border: '1px solid rgba(28,92,55,0.15)', color: 'var(--color-primary)' }}
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right — single hero image (desktop only) */}
        <motion.div
          className="hidden lg:block relative"
          variants={itemVariants}
        >
          <div
            className="relative rounded-3xl overflow-hidden w-full h-[600px]"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <Image
              src="/lawn-care-team-porirua.jpeg"
              alt="Cesar's Lawns Services team working in Porirua Wellington"
              fill
              sizes="45vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
            {/* Subtle bottom gradient for text legibility */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(28,92,55,0.65) 0%, transparent 55%)' }}
            />
            {/* Rating badge — bottom left */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md"
                style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <div>
                  <p className="text-white font-black text-xl leading-none">5.0 ★</p>
                  <p className="text-white/60 text-xs mt-0.5">Google Rating</p>
                </div>
                <div className="w-px h-8 bg-white/20" />
                <div>
                  <p className="text-white font-black text-xl leading-none">Porirua</p>
                  <p className="text-white/60 text-xs mt-0.5">Based locally</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
