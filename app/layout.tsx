import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-var',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-var',
})

// ponytail: update metadataBase URL once custom domain is set
const SITE_URL = 'https://sathianathan.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'V. Sathianathan — UI/UX Designer & Digital Strategist',
    template: '%s | V. Sathianathan',
  },
  description: '20+ years crafting intuitive digital experiences — UI/UX design, WordPress development, SEO, logo design, and brand identity. Founder & CEO of Amazepixels Technologies, Chennai.',
  keywords: ['UI/UX Designer', 'Web Designer', 'WordPress Developer', 'SEO Expert', 'Logo Designer', 'Brand Identity', 'Amazepixels', 'Chennai', 'India', 'Sathianathan'],
  authors: [{ name: 'V. Sathianathan', url: 'https://www.linkedin.com/in/amazepixels/' }],
  creator: 'V. Sathianathan',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'V. Sathianathan Portfolio',
    title: 'V. Sathianathan — UI/UX Designer & Digital Strategist',
    description: '20+ years crafting intuitive digital experiences — UI/UX design, WordPress, SEO, logo design. Founder & CEO of Amazepixels Technologies.',
    images: [{ url: '/me.jpeg', width: 800, height: 800, alt: 'V. Sathianathan — Founder & CEO, Amazepixels Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'V. Sathianathan — UI/UX Designer & Digital Strategist',
    description: '20+ years crafting intuitive digital experiences. Founder & CEO of Amazepixels Technologies, Chennai.',
    images: ['/me.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
