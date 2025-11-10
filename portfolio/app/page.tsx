import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ProjectsSection from '@/components/ProjectsSection'
import Skills from '@/components/Skills'
import Timeline from '@/components/Timeline'
import ContactSection from '@/components/ContactSection'

export const revalidate = 600

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <Skills />
      <Timeline />
      <ContactSection />
    </>
  )
}

