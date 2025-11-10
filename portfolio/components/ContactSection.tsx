'use client'

import Link from 'next/link'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeading>Contact</SectionHeading>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Email me at <a className="text-accent-blue underline" href="mailto:malikshaiza07@gmail.com">malikshaiza07@gmail.com</a> or reach out on LinkedIn.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="/contact" className="px-8 py-4 bg-accent-blue text-background font-semibold rounded-lg hover:bg-accent-blue-dark transition-all duration-300">Open Contact Form</Link>
          <a href="https://linkedin.com/in/shaizamalik/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 glass rounded-lg">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}


