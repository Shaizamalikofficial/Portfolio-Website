import { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'

export const revalidate = 600

export const metadata: Metadata = {
  title: 'Projects | Shaiza Malik',
  description: 'Explore my AI and Machine Learning projects, including the Sleep Disorder Diagnosis System.',
}

// This will be fetched from Contentful in the future
const projects = [
  {
    name: 'Sleep Disorder Diagnosis System',
    summary: 'An intelligent machine learning system that diagnoses sleep disorders with high accuracy using multiple classification algorithms. The system analyzes patient data and provides accurate predictions to assist healthcare professionals.',
    technologies: ['Logistic Regression', 'KNN', 'SVM', 'Python', 'Scikit-learn', 'NumPy', 'Pandas'],
    metrics: '>90% Accuracy',
    githubUrl: 'https://github.com/Shaizamalikofficial',
  },
]

export default function Projects() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 glow-text text-center">
          Projects
        </h1>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Exploring the intersection of AI, Machine Learning and real-world problem solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              {...project}
              delay={index * 0.1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">More projects coming soon...</p>
          <div className="inline-block glass rounded-lg p-8 max-w-md">
            <p className="text-gray-300">
              I'm constantly working on new projects and learning opportunities.
              Check back soon for updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
