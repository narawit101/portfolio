import Navbar from '@/components/navbar'
import TechStackSection from '@/components/TechStackSection'
import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import FooterSection from '@/components/FooterSection'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a12] text-white overflow-x-hidden">
        <HeroSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  )
}