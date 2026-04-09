import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import ServiceAreas from './components/ServiceAreas'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

export default function App() {
  const [showContact, setShowContact] = useState(false)

  return (
    <div className="bg-white">
      <Header onContactClick={() => setShowContact(true)} />
      <Hero onCTAClick={() => setShowContact(true)} />
      <Benefits />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <CTABanner onCTAClick={() => setShowContact(true)} />
      <Footer />
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </div>
  )
}
