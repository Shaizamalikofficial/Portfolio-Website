'use client'

import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>About Me</SectionHeading>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-8 max-w-4xl mx-auto"
        >
          <p className="text-gray-300 leading-8">
            I’m Shaiza, an aspiring AI and Machine Learning enthusiast driven by curiosity and creativity. I specialize in Python, Data Analysis and ML model development, exploring everything from EDA and Feature Engineering to Logistic Regression, KNN, SVM and ANN.
          </p>
          <p className="text-gray-300 leading-8 mt-4">
            Currently, I’m enhancing my skills through advanced AI learning programs and practical projects that blend data, logic and innovation. I create. I code. I learn—a bit more every day. AI excites me because every experiment feels like a step into the future.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


