import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AnimatedCursor from '@/components/AnimatedCursor'
import NeuralBackground from '@/components/NeuralBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shaiza Malik | AI & Data Enthusiast',
  description: 'BS Computer Science student at GCUF, passionate about Artificial Intelligence and Machine Learning. Turning data into intelligent solutions.',
  keywords: ['Shaiza Malik', 'AI', 'Machine Learning', 'Data Science', 'Computer Science', 'Portfolio'],
  authors: [{ name: 'Shaiza Malik' }],
  openGraph: {
    title: 'Shaiza Malik | AI & Data Enthusiast',
    description: 'BS Computer Science student at GCUF, passionate about Artificial Intelligence and Machine Learning.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://shaizamalik.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shaiza Malik | AI & Data Enthusiast',
    description: 'BS Computer Science student at GCUF, passionate about Artificial Intelligence and Machine Learning.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <AnimatedCursor />
        <NeuralBackground />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

