'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SkillCardProps {
  name: string
  icon?: ReactNode
  delay?: number
}

export default function SkillCard({ name, icon, delay = 0 }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="glass rounded-lg p-6 cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/0 to-accent-violet/0 group-hover:from-accent-blue/10 group-hover:to-accent-violet/10 transition-all duration-300" />
      <div className="relative z-10">
        {icon && <div className="text-3xl mb-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-white">{name}</h3>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </motion.div>
  )
}

