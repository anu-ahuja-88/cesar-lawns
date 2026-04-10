// ============================================================
// BUSINESS DATA — Claude fills this in for each client
// RULES:
// - Only use data explicitly provided by the client
// - Never fabricate stats, testimonials, credentials, or locations
// - Leave arrays empty ([]) if no real data exists — components handle gracefully
// ============================================================

export interface BusinessData {
  name: string
  slug: string
  tagline: string
  description: string
  industry: string
  location: string

  phone: string
  email: string
  address: string
  bookingUrl?: string

  hero: {
    headline: string        // Must contain primary service + location keyword
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    badge?: string          // Only if client has real social proof
    cyclingWords: string[]  // 3 words that rotate in the headline animation
  }

  // ONLY real client data — leave empty if unknown
  stats: Array<{ value: string; label: string }>

  services: Array<{
    icon: string            // Lucide icon name
    title: string
    description: string
  }>

  about: {
    headline: string
    body: string
    credentials: string[]
  }

  process: Array<{
    step: string
    title: string
    description: string
  }>

  // ONLY real testimonials provided by client — never write fake ones
  testimonials: Array<{
    name: string
    location: string
    rating: number
    text: string
  }>

  serviceAreas: string[]

  design: {
    primaryColor: string    // Dark tone for hero/sections bg
    secondaryColor: string
    ctaColor: string        // Accent — must pop
    headingFont: string
    bodyFont: string
    googleFontsUrl: string
  }

  seo: {
    title: string
    description: string
    keywords: string
  }

  clientEmail?: string
  clientName?: string
}

// ============================================================
// PLACEHOLDER — Replace ALL values with real client data
// ============================================================

export const business: BusinessData = {
  name: "Business Name",
  slug: "business-slug",
  tagline: "Short tagline here",
  description: "One sentence description of the business.",
  industry: "Industry",
  location: "City, New Zealand",

  phone: "021 000 0000",
  email: "hello@example.co.nz",
  address: "Serving [City], New Zealand",

  hero: {
    headline: "City's [Service] Specialists",
    subheadline: "Subheadline here — benefit-focused, Kiwi voice, max 2 sentences.",
    ctaPrimary: "Get a Free Quote",
    ctaSecondary: "See Our Services",
    cyclingWords: ["Word One", "Word Two", "Word Three"],
  },

  stats: [],

  services: [
    { icon: "Wrench", title: "Service One", description: "One to two sentences. What the client gets and why it matters." },
    { icon: "Hammer", title: "Service Two", description: "One to two sentences. What the client gets and why it matters." },
    { icon: "Home", title: "Service Three", description: "One to two sentences. What the client gets and why it matters." },
    { icon: "Layers", title: "Service Four", description: "One to two sentences. What the client gets and why it matters." },
    { icon: "ShieldCheck", title: "Service Five", description: "One to two sentences. What the client gets and why it matters." },
    { icon: "Sparkles", title: "Service Six", description: "One to two sentences. What the client gets and why it matters." },
  ],

  about: {
    headline: "About headline goes here",
    body: "About body copy. Straight-talking Kiwi voice. No filler phrases.",
    credentials: [],
  },

  process: [
    { step: "01", title: "Step One", description: "Description of step one." },
    { step: "02", title: "Step Two", description: "Description of step two." },
    { step: "03", title: "Step Three", description: "Description of step three." },
    { step: "04", title: "Step Four", description: "Description of step four." },
  ],

  testimonials: [],
  serviceAreas: [],

  design: {
    primaryColor: "#1C1917",
    secondaryColor: "#78716C",
    ctaColor: "#F97316",
    headingFont: "Plus Jakarta Sans",
    bodyFont: "Plus Jakarta Sans",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap",
  },

  seo: {
    title: "Service City | Business Name",
    description: "Service in City. USP. Call 021 000 0000 for a free quote.",
    keywords: "service city, business name, local service NZ",
  },

  clientEmail: "hello@example.co.nz",
  clientName: "Client Name",
}
