'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { business } from '@/data/business'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#quote' },
  ]

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(28, 92, 55, 0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.15)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center cursor-pointer">
          <Image
            src="/cesars-lawns-services-logo-removebg-preview.png"
            alt="Cesar's Lawns Services logo"
            width={240}
            height={96}
            className="h-20 w-auto"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-150 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <motion.a
            href={`tel:${business.phone.replace(/\s/g, '')}`}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold cursor-pointer"
            style={{ backgroundColor: 'var(--color-cta)', color: '#141C14' }}
          >
            <Phone size={14} />
            {business.phone}
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white cursor-pointer p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(28, 92, 55, 0.98)' }}
          >
            <div className="px-6 pb-6 flex flex-col gap-4 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-white font-medium text-base cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${business.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm w-fit cursor-pointer"
                style={{ backgroundColor: 'var(--color-cta)', color: '#141C14' }}
              >
                <Phone size={14} />
                {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
