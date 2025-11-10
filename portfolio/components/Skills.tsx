'use client'

import { motion } from 'framer-motion'
import SkillCard from './SkillCard'
import { skills as skillsList } from '@/lib/data'

export default function Skills() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {skillsList.map((name, index) => (
            <SkillCard
              key={name}
              name={name}
              icon={''}
              delay={index * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

