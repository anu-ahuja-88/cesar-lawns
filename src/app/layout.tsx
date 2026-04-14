import type { Metadata } from 'next'
import { business } from '@/data/business'
import './globals.css'

const DOMAIN = 'https://cesarslawnsservices.co.nz'

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  authors: [{ name: business.name }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/android-chrome-192x192.png', color: '#1C5C37' },
    ],
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    siteName: business.name,
    type: 'website',
    locale: 'en_NZ',
    url: DOMAIN,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: "Cesar's Lawns Services — Lawn Mowing Porirua",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: business.seo.title,
    description: business.seo.description,
    images: ['/opengraph-image'],
  },
  other: {
    'theme-color': '#1C5C37',
    'geo.region': 'NZ-WGN',
    'geo.placename': 'Porirua',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  description: business.seo.description,
  image: `${DOMAIN}/opengraph-image`,
  '@id': DOMAIN,
  url: DOMAIN,
  telephone: business.phone,
  email: business.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '19 Beauzami Crescent',
    addressLocality: 'Ascot Park',
    addressRegion: 'Porirua',
    postalCode: '5024',
    addressCountry: 'NZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -41.1416,
    longitude: 174.8508,
  },
  areaServed: business.serviceAreas,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '18:00',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: business.name,
  url: DOMAIN,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cssVars = `
    :root {
      --color-primary: ${business.design.primaryColor};
      --color-secondary: ${business.design.secondaryColor};
      --color-cta: ${business.design.ctaColor};
      --font-heading: '${business.design.headingFont}', sans-serif;
      --font-body: '${business.design.bodyFont}', sans-serif;
    }
  `

  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href={business.design.googleFontsUrl} rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
        <meta name="google-site-verification" content="C7SgVGSE2fBpllZh8Cs2l8K6NR08asHiZZ6Lj5BJAZA" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
