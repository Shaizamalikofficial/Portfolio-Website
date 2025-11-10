import { Metadata } from 'next'
import Skills from '@/components/Skills'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'About | Shaiza Malik',
  description: 'BS Computer Science student at GCUF, passionate about AI and Machine Learning. Learn about my journey and expertise.',
}

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 glow-text">
            About Me
          </h1>

          <div className="glass rounded-2xl p-8 md:p-12 mb-12">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                I'm Shaiza Malik, a passionate BS Computer Science student at Government College University Faisalabad 
                currently diving deep into the fascinating world of <span className="text-accent-blue font-semibold">Artificial Intelligence</span> and <span className="text-accent-violet font-semibold">Machine Learning</span>.
              </p>

              

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm hands-on with <strong className="text-white">Python</strong>, <strong className="text-white">Machine Learning</strong> and <strong className="text-white">Data Analysis</strong> 
                with practical experience in:
              </p>

              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 ml-4">
                <li><strong className="text-white">Exploratory Data Analysis (EDA)</strong> - Uncovering insights from raw data</li>
                <li><strong className="text-white">Feature Engineering</strong> - Transforming data for better model performance</li>
                <li><strong className="text-white">Model Training</strong> - Working with Logistic Regression, KNN, SVM and ANN</li>
              </ul>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I've completed an AI foundation course and am currently halfway through a Python Crash Course 
                constantly expanding my knowledge base. I'm also actively attending the <span className="text-accent-blue">Cursor AI Bootcamp</span> to deepen 
                my coding expertise and AI skills.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                What drives me is the passion for <span className="text-accent-violet font-semibold">blending logic with creativity</span> to design 
                intelligent systems. I believe that the future lies in AI that's not just powerful but also intuitive and 
                accessible. My goal is to contribute to this future through research and development in Machine Learning.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding or learning I'm exploring new datasets working on personal projects like my 
                <span className="text-accent-blue"> Sleep Disorder Diagnosis System</span> (achieving &gt;90% accuracy) 
                or staying updated with the latest trends in AI and data science.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 glow-text-violet">
              Education
            </h2>
            <div className="glass rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-2">BS Computer Science</h3>
              <p className="text-accent-blue text-lg mb-2">Government College University Faisalabad</p>
              <p className="text-gray-300">Currently pursuing undergraduate studies with a focus on AI and Machine Learning</p>
            </div>
          </div>
        </div>
      </div>

      <Skills />
    </div>
  )
}

