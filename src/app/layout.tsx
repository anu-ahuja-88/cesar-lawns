import type { Metadata } from 'next'
import { business } from '@/data/business'
import './globals.css'

export const metadata: Metadata = {
  title: business.seo.title,
  description: business.seo.description,
  keywords: business.seo.keywords,
  openGraph: {
    title: business.seo.title,
    description: business.seo.description,
    siteName: business.name,
    type: 'website',
    locale: 'en_NZ',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: business.name,
  description: business.seo.description,
  telephone: business.phone,
  email: business.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: business.location,
    addressCountry: 'NZ',
  },
  areaServed: business.serviceAreas,
  priceRange: '$$',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
