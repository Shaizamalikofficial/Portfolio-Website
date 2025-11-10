'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  title: string
  date: string
  description: string
  category: 'learning' | 'milestone'
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Started my Computer Science journey',
    date: '2022',
    description: 'Began focusing on technology and problem-solving, laying the foundation for AI and ML.',
    category: 'milestone',
  },
  {
    title: 'Completed AI Foundation Course',
    date: '2023',
    description: 'Successfully completed a comprehensive AI foundation course, gaining fundamental knowledge in artificial intelligence and machine learning concepts.',
    category: 'learning',
  },
  {
    title: 'Python Crash Course (50% Complete)',
    date: '2024',
    description: 'Currently halfway through a Python Crash Course, building strong programming fundamentals and data manipulation skills.',
    category: 'learning',
  },
  {
    title: 'Cursor AI Bootcamp (In Progress)',
    date: '2024',
    description: 'Currently attending Cursor AI Bootcamp to deepen coding expertise and gain hands-on experience with AI development tools.',
    category: 'learning',
  },
]

export default function Timeline() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text"
        >
          Learning Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue via-accent-violet to-accent-blue transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent-blue rounded-full transform md:-translate-x-1/2 z-10 shadow-glow-blue" />

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="glass rounded-lg p-6 hover:glass-strong transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          item.category === 'learning'
                            ? 'bg-accent-blue/20 text-accent-blue'
                            : 'bg-accent-violet/20 text-accent-violet'
                        }`}
                      >
                        {item.category === 'learning' ? 'Learning' : 'Milestone'}
                      </span>
                      <span className="text-gray-400 text-sm">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

