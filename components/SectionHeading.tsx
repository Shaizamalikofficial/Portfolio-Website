'use client'

import { motion } from 'framer-motion'

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
    >
      {children}
    </motion.h2>
  )
}


