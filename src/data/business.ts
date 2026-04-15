// ============================================================
// BUSINESS DATA — Cesar Lawns Services, Porirua NZ
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

  social?: {
    facebook?: string
    instagram?: string
  }

  hero: {
    headline: string
    subheadline: string
    ctaPrimary: string
    ctaSecondary: string
    badge?: string
    cyclingWords: string[]
  }

  stats: Array<{ value: string; label: string }>

  services: Array<{
    icon: string
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

  testimonials: Array<{
    name: string
    location: string
    rating: number
    text: string
  }>

  serviceAreas: string[]

  design: {
    primaryColor: string
    secondaryColor: string
    ctaColor: string
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

export const business: BusinessData = {
  name: "Cesar's Lawns Services",
  slug: "cesar-lawns",
  tagline: "Porirua's lawn and garden crew",
  description: "Reliable lawn mowing, hedge trimming, weeding, and garden maintenance across Porirua and surrounding suburbs.",
  industry: "Lawn & Garden Services",
  location: "Porirua, New Zealand",

  phone: "022 187 2853",
  email: "info@cesarslawnsservices.co.nz",
  address: "19 Beauzami Crescent, Ascot Park, Porirua 5024",

  social: {
    facebook: "https://www.facebook.com/CesarsLawns/",
    instagram: "https://www.instagram.com/cesars_lawns_services/",
  },

  hero: {
    headline: "Porirua's Lawn & Garden Crew",
    subheadline: "We keep your section looking sharp all year round. Free quotes, reliable crew across Porirua and surrounding areas.",
    ctaPrimary: "Get Your Free Quote",
    ctaSecondary: "Our Services",
    badge: "5-Star Rated in Porirua",
    cyclingWords: ["Lawn Mowing", "Hedge Trimming", "Weeding"],
  },

  stats: [
    { value: "5★", label: "Google Rating" },
  ],

  services: [
    {
      icon: "Scissors",
      title: "Lawn Mowing",
      description: "Regular mowing that keeps your lawn tidy and healthy. We clear the driveway after every visit.",
    },
    {
      icon: "Leaf",
      title: "Hedge Trimming",
      description: "Clean, sharp cuts that keep your hedges looking their best without the hassle.",
    },
    {
      icon: "Shovel",
      title: "Weeding",
      description: "Hand weeding and weed spray to keep your garden beds clean and your lawn weed-free.",
    },
    {
      icon: "Spray",
      title: "Weed Spray",
      description: "Targeted weed spray treatments for driveways, garden beds, and problem areas.",
    },
    {
      icon: "Trash2",
      title: "Rubbish Removal",
      description: "We take away garden waste, clippings, and general rubbish so you don't have to.",
    },
    {
      icon: "MoreHorizontal",
      title: "And More",
      description: "Got something else you need sorted in the garden? Just ask — we handle all sorts of outdoor work.",
    },
  ],

  about: {
    headline: "Local Crew, Reliable Service",
    body: "Cesar and his team have been looking after lawns and gardens across Porirua for years. We show up when we say we will, we work hard, and we leave your place looking great. No messing around. Just call us, we come out, and we get it done.",
    credentials: [],
  },

  process: [
    { step: "01", title: "Call or Text", description: "Give us a ring or text on 022 187 2853 and tell us what you need." },
    { step: "02", title: "Free Quote", description: "We come out, take a look, and give you a fair price — no strings attached." },
    { step: "03", title: "We Do the Work", description: "Cesar's crew shows up, gets the job done properly, and clears everything away." },
    { step: "04", title: "You Enjoy It", description: "Sit back and enjoy a clean, tidy section without lifting a finger." },
  ],

  testimonials: [
    {
      name: "Gail Murphy",
      location: "Porirua",
      rating: 5,
      text: "My lawn is mowed by Cesar's team on a regular basis. They also use a leaf blower to clear my driveway. Very happy with their work, would recommend them.",
    },
    {
      name: "Mateo Rendon",
      location: "Porirua",
      rating: 5,
      text: "Cesar and his team are great! Very nice, friendly and amazing work.",
    },
    {
      name: "Mayra Alvarado",
      location: "Porirua",
      rating: 5,
      text: "Excellent service my lawns always looks great.",
    },
    {
      name: "Deacon Fourteen",
      location: "Porirua",
      rating: 5,
      text: "Great service and professional crew.",
    },
    {
      name: "Fernando Sessarego",
      location: "Porirua",
      rating: 5,
      text: "Very efficient team always on time.",
    },
  ],

  serviceAreas: ["Tawa", "Tītahi Bay", "Elsdon", "Ranui", "Cannons Creek", "Waitangirua", "Ascot Park", "Whitby", "Aotea", "Plimmerton", "Papakowhai"],

  design: {
    primaryColor: "#1C5C37",
    secondaryColor: "#3DB06B",
    ctaColor: "#7DC744",
    headingFont: "Barlow Condensed",
    bodyFont: "Inter",
    googleFontsUrl:
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Inter:wght@400;500;600&display=swap",
  },

  seo: {
    title: "Lawn Mowing Porirua | Cesar's Lawns Services",
    description: "Reliable lawn mowing, hedge trimming, weeding and garden services across Porirua, Tawa, Whitby, Plimmerton and surrounding suburbs. Call 022 187 2853 for a free quote.",
    keywords: "lawn mowing porirua, lawn care porirua, hedge trimming porirua, garden services porirua, weed spray porirua, rubbish removal porirua, cesar lawns porirua, lawn mowing tawa, lawn mowing whitby, lawn mowing plimmerton, lawn mowing ascot park, garden services tawa, lawn mowing titahi bay",
  },

  clientEmail: "info@cesarslawnsservices.co.nz",
  clientName: "Cesar",
}
