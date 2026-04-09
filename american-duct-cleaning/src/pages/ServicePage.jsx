import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ChevronLeft, ArrowRight } from 'lucide-react'
import { FaFan, FaFire, FaSnowflake, FaShieldAlt } from 'react-icons/fa'

const servicesData = {
  'air-duct-cleaning': {
    title: 'Air Duct Cleaning',
    subtitle: 'Professional Air Duct Cleaning in Orange County',
    description: 'Over time, your air ducts collect dust, allergens, mold, and debris that circulate throughout your home. Our expert technicians use advanced equipment to thoroughly clean your entire duct system.',
    icon: '💨',
    hero_image: 'linear-gradient(135deg, #0A2540 0%, #1e5a8e 100%)',
    benefits: [
      'Cleaner indoor air quality',
      'Reduced allergies and respiratory issues',
      'Improved HVAC system efficiency',
      'Lower energy bills (up to 20%)',
      'Elimination of musty odors',
      'Extended equipment lifespan'
    ],
    process: [
      { step: 1, title: 'Initial Inspection', description: 'We inspect your duct system with video technology to assess contamination levels' },
      { step: 2, title: 'System Preparation', description: 'Seal access points and prepare the system for thorough cleaning' },
      { step: 3, title: 'High-Powered Cleaning', description: 'Use advanced rotary brushes and HEPA vacuums to remove all debris and contaminants' },
      { step: 4, title: 'Final Quality Check', description: 'Verify airflow and system performance to ensure optimal results' }
    ],
    faq: [
      { q: 'How often should ducts be cleaned?', a: 'Every 2-3 years for most homes. More frequently if you have pets, allergies, or recent construction.' },
      { q: 'How long does the process take?', a: 'Typically 2-4 hours depending on your system size and complexity.' },
      { q: 'Is duct cleaning necessary?', a: 'Yes, dust and allergens accumulate over time. Regular cleaning improves air quality and system efficiency.' },
      { q: 'Do you offer guarantees?', a: 'We guarantee 100% satisfaction. If you\'re not happy, we\'ll address it at no extra cost.' }
    ],
    price: '$249 - $699'
  },
  'dryer-vent-cleaning': {
    title: 'Dryer Vent Cleaning',
    subtitle: 'Professional Dryer Vent Cleaning Services',
    description: 'Clogged dryer vents are a leading cause of house fires. Our expert technicians safely remove lint buildup to improve efficiency and protect your home.',
    icon: '🔥',
    hero_image: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)',
    benefits: [
      'Reduce fire hazard risk by 99%',
      'Cut drying time in half',
      'Lower energy consumption',
      'Extend dryer lifespan',
      'Faster laundry cycles',
      'Improved dryer performance'
    ],
    process: [
      { step: 1, title: 'Safety Inspection', description: 'Inspect vent connection and dryer exhaust system' },
      { step: 2, title: 'Lint Removal', description: 'Remove lint buildup from vent pipe and duct work' },
      { step: 3, title: 'System Testing', description: 'Test airflow to ensure proper ventilation' },
      { step: 4, title: 'Performance Check', description: 'Verify dryer efficiency and safety compliance' }
    ],
    faq: [
      { q: 'Why is dryer vent cleaning important?', a: 'Lint accumulation is the leading cause of dryer fires. Regular cleaning prevents fire hazards and improves efficiency.' },
      { q: 'How often should I clean my dryer vent?', a: 'At least once per year, more frequently if you use your dryer heavily.' },
      { q: 'What are signs my vent needs cleaning?', a: 'Clothes taking longer to dry, burning smell, lint around the dryer, or moisture in laundry room.' },
      { q: 'Can I clean the vent myself?', a: 'While you can clean the lint trap, professional cleaning is safer and more thorough.' }
    ],
    price: '$99 - $199'
  },
  'hvac-cleaning': {
    title: 'HVAC System Cleaning',
    subtitle: 'Complete HVAC System Cleaning & Maintenance',
    description: 'A clean HVAC system runs more efficiently and lasts longer. We provide comprehensive cleaning of your furnace, air conditioning unit, and ductwork.',
    icon: '❄️',
    hero_image: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)',
    benefits: [
      'Improved heating and cooling efficiency',
      'Consistent temperature throughout home',
      'Reduced energy costs',
      'Extended HVAC lifespan',
      'Cleaner air circulation',
      'Prevention of system breakdowns'
    ],
    process: [
      { step: 1, title: 'System Assessment', description: 'Evaluate your HVAC system components and identify cleaning needs' },
      { step: 2, title: 'Coil Cleaning', description: 'Clean evaporator and condenser coils for optimal heat transfer' },
      { step: 3, title: 'Component Inspection', description: 'Check filters, blower, and electrical components' },
      { step: 4, title: 'System Optimization', description: 'Ensure all components work together efficiently' }
    ],
    faq: [
      { q: 'When should I get HVAC cleaning?', a: 'Every 1-2 years, or more if you notice reduced efficiency or increased dust.' },
      { q: 'Does HVAC cleaning include duct cleaning?', a: 'We offer both separately or together. Discuss with our technicians which is best for you.' },
      { q: 'Will cleaning reduce my energy bills?', a: 'Yes, a clean system operates more efficiently, typically reducing energy costs 10-20%.' },
      { q: 'How long does HVAC cleaning take?', a: 'Usually 3-5 hours depending on system complexity and current condition.' }
    ],
    price: '$399 - $899'
  },
  'mold-removal': {
    title: 'Mold Inspection & Removal',
    subtitle: 'Professional Mold Detection & Remediation',
    description: 'Mold in air ducts can cause serious health problems. Our certified technicians identify and safely remove mold contamination from your HVAC system.',
    icon: '🛡️',
    hero_image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    benefits: [
      'Protect family health from mold exposure',
      'Identify mold sources and growth',
      'Professional mold remediation',
      'Prevent future mold growth',
      'Improve air quality',
      'Peace of mind'
    ],
    process: [
      { step: 1, title: 'Professional Assessment', description: 'Inspect ducts with advanced video technology to detect mold' },
      { step: 2, title: 'Air Quality Testing', description: 'Test air samples to determine mold species and contamination level' },
      { step: 3, title: 'Safe Removal', description: 'Use EPA-approved methods to safely remove mold contamination' },
      { step: 4, title: 'Prevention Treatment', description: 'Apply protective treatments to prevent mold re-growth' }
    ],
    faq: [
      { q: 'How do I know if there\'s mold in my ducts?', a: 'Signs include musty odors, visible growth, increased allergies, or water damage history.' },
      { q: 'Is mold in air ducts dangerous?', a: 'Yes, mold can cause respiratory issues, allergies, and other health problems.' },
      { q: 'Can mold come back after removal?', a: 'Our prevention treatment significantly reduces re-growth risk. Address moisture sources for best results.' },
      { q: 'Do you have mold certifications?', a: 'Yes, our technicians are certified in mold detection and remediation by industry standards.' }
    ],
    price: '$299 - $799'
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function ServicePage({ onContactClick }) {
  const { slug } = useParams()
  const service = servicesData[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="sticky top-20 bg-white z-10 py-4 px-6 flex items-center gap-2"
      >
        <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition">
          <ChevronLeft size={20} />
          Back to Home
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-6 text-white overflow-hidden"
        style={{ background: service.hero_image }}
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={itemVariants} className="text-6xl mb-4">{service.icon}</motion.div>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {service.title}
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl md:text-2xl opacity-90 mb-8">
              {service.subtitle}
            </motion.p>
            <motion.button
              variants={itemVariants}
              onClick={onContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition inline-flex items-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {service.description}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <span className="text-blue-600">✓</span> Estimated Cost
              </h3>
              <p className="text-3xl font-bold text-blue-600">{service.price}</p>
              <p className="text-gray-600 mt-2">Free quote available</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-4">Service Duration</h3>
              <p className="text-lg text-gray-700">2-5 hours typically</p>
              <p className="text-gray-600 mt-2">Exact time depends on system size</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Benefits</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {service.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
              >
                <Check className="text-green-500 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-800">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {service.process.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    {i < service.process.length - 1 && (
                      <div className="w-1 h-24 bg-blue-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {service.faq.map((item, i) => (
              <motion.details
                key={i}
                variants={itemVariants}
                className="group bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              >
                <summary className="p-6 font-semibold flex justify-between items-center">
                  {item.q}
                  <span className="text-blue-600 group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="px-6 pb-6 text-gray-700">{item.a}</div>
              </motion.details>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free quote today and schedule your service with our certified technicians.
          </p>
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-flex items-center gap-2"
          >
            Book Your Service
            <ArrowRight size={22} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
