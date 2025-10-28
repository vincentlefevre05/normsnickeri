import Hero from '@/components/sections/hero'
import Intro from '@/components/sections/intro'
import ServicesGrid from '@/components/sections/services-grid'
import ProcessSteps from '@/components/sections/process-steps'
import GalleryPreview from '@/components/sections/gallery-preview'
import AboutNorm from '@/components/sections/about-norm'
import CTAContact from '@/components/sections/cta-contact'
import ContactFormSection from '@/components/sections/contact-form-section'

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesGrid />
      <ProcessSteps />
      <GalleryPreview />
      <AboutNorm />
      <CTAContact />
      <ContactFormSection />
    </>
  )
}
