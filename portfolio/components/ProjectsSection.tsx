'use client'

import { projects } from '@/lib/data'
import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading>Projects</SectionHeading>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.name}
              name={p.name}
              summary={p.summary}
              technologies={p.technologies}
              githubUrl={p.githubUrl}
              liveUrl={p.liveUrl}
              metrics={p.metrics}
              coverImage={p.coverImage}
              delay={i * 0.05}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


