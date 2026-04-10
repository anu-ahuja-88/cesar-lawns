'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2 } from 'lucide-react'
import { business } from '@/data/business'

interface FormState {
  name: string
  phone: string
  service: string
  message: string
}

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-colors bg-white"
  const inputStyle = { borderColor: '#D1E8D8', color: '#141C14' }

  return (
    <section id="quote" className="py-24 px-6" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
              style={{ color: '#141C14', backgroundColor: 'var(--color-cta)' }}
            >
              Free Quote
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase leading-tight mb-6 text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Get Your Free<br />Quote Today
            </h2>
            <p className="text-white/65 text-lg leading-relaxed mb-8">
              Tell us what you need and we&apos;ll get back to you fast. Porirua only — {business.phone}.
            </p>

            <div className="space-y-3">
              {[
                'No obligation, no pressure',
                'Fast response every time',
                'Fair, honest pricing',
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle2 size={16} style={{ color: 'var(--color-cta)', flexShrink: 0 }} />
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="p-8 rounded-3xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 0.1 }}
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: 'var(--color-cta)' }}
                    >
                      <CheckCircle2 size={28} style={{ color: '#141C14' }} />
                    </motion.div>
                    <h3 className="text-2xl font-black text-white mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      Got it — thanks!
                    </h3>
                    <p className="text-white/60 text-sm">We&apos;ll be in touch soon. Or call us now on {business.phone}.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                  >
                    <div>
                      <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-1.5">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="First and last name"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-1.5">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="02X XXX XXXX"
                        className={inputClass}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-1.5">Service Needed</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        style={inputStyle}
                      >
                        <option value="">Select a service...</option>
                        {business.services.map((s) => (
                          <option key={s.title} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Regular maintenance">Regular maintenance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs font-medium uppercase tracking-wide mb-1.5">Message (optional)</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us a bit about your section..."
                        className={inputClass}
                        style={{ ...inputStyle, resize: 'none' }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wide cursor-pointer mt-1"
                      style={{ backgroundColor: 'var(--color-cta)', color: '#141C14' }}
                    >
                      <Send size={16} />
                      Send Quote Request
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
