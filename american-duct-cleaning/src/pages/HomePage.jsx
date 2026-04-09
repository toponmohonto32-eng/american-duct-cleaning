import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import Services from '../components/Services'
import Process from '../components/Process'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import ServiceAreas from '../components/ServiceAreas'
import CTABanner from '../components/CTABanner'

export default function HomePage({ onContactClick }) {
  return (
    <>
      <Hero onCTAClick={onContactClick} />
      <Benefits />
      <Services />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <ServiceAreas />
      <CTABanner onCTAClick={onContactClick} />
    </>
  )
}
