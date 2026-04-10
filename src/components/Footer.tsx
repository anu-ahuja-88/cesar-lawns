'use client'

import { Phone, Mail, MapPin } from 'lucide-react'
import { business } from '@/data/business'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="py-16 px-6" style={{ backgroundColor: '#0F3620', color: 'rgba(255,255,255,0.55)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                style={{ backgroundColor: 'var(--color-cta)' }}
              >
                C
              </div>
              <span
                className="font-black uppercase tracking-tight text-white text-lg leading-none"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Cesar&apos;s Lawns Services
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Lawn mowing, hedge trimming, weeding, and more — serving Porirua.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              {business.services.slice(0, 5).map((s) => (
                <li key={s.title}>
                  <a href="#services" className="hover:text-white transition-colors cursor-pointer">{s.title}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-cta)' }} />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} style={{ color: 'var(--color-cta)' }} />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} style={{ color: 'var(--color-cta)' }} />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {business.email}
                </a>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 text-xs">
              <span>Service area: </span>
              {business.serviceAreas.join(', ')}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs">
          <p>&copy; {year} {business.name}. All rights reserved.</p>
          <p>Lawn mowing Porirua · Hedge trimming Porirua · Garden services Porirua</p>
        </div>
      </div>
    </footer>
  )
}
