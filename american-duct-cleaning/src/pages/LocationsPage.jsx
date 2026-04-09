import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react'

const locations = [
  {
    city: 'Anaheim',
    zip: '92805',
    coverage: 'Anaheim, Cypress, Garden Grove',
    phone: '(714) 555-0123',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Irvine',
    zip: '92614',
    coverage: 'Irvine, Tustin, Lake Forest',
    phone: '(949) 555-0124',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Santa Ana',
    zip: '92701',
    coverage: 'Santa Ana, Orange, Fountain Valley',
    phone: '(714) 555-0125',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Huntington Beach',
    zip: '92648',
    coverage: 'Huntington Beach, Newport Beach, Seal Beach',
    phone: '(714) 555-0126',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Long Beach',
    zip: '90801',
    coverage: 'Long Beach, Signal Hill, Cerritos',
    phone: '(562) 555-0127',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Costa Mesa',
    zip: '92626',
    coverage: 'Costa Mesa, Laguna Beach, Dana Point',
    phone: '(949) 555-0128',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Fullerton',
    zip: '92831',
    coverage: 'Fullerton, Placentia, Brea',
    phone: '(714) 555-0129',
    hours: 'Mon-Sat: 7am-7pm'
  },
  {
    city: 'Riverside',
    zip: '92501',
    coverage: 'Riverside, San Bernardino, Ontario',
    phone: '(951) 555-0130',
    hours: 'Mon-Sat: 7am-7pm'
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { y: -8, transition: { duration: 0.2 } }
}

export default function LocationsPage({ onContactClick }) {
  const [selectedLocation, setSelectedLocation] = useState(null)

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-4 leading-tight"
          >
            Proudly Serving Orange County
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl opacity-90 mb-8"
          >
            Professional air duct and HVAC cleaning throughout Southern California
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onContactClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition inline-flex items-center justify-center gap-2"
            >
              Get Free Quote
              <ArrowRight size={20} />
            </button>
            <button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Call 1-800-DUCT-NOW
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Service Areas Map Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gray-50"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Service Areas</h2>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Orange County</h3>
                <ul className="space-y-3 text-gray-700">
                  {['Anaheim', 'Irvine', 'Santa Ana', 'Huntington Beach', 'Costa Mesa', 'Fullerton'].map(city => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Surrounding Areas</h3>
                <ul className="space-y-3 text-gray-700">
                  {['Long Beach', 'Riverside', 'San Bernardino', 'Ontario', 'Newport Beach', 'Laguna Beach'].map(city => (
                    <li key={city} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service Hours Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <Clock className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-semibold mb-2">Service Hours</h4>
                  <p className="text-gray-600">Monday - Saturday<br/>7:00 AM - 7:00 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-semibold mb-2">Emergency Service</h4>
                  <p className="text-gray-600">Call for same-day<br/>emergency bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600 flex-shrink-0" size={32} />
                <div>
                  <h4 className="font-semibold mb-2">Free Quotes</h4>
                  <p className="text-gray-600">No charge for<br/>initial inspections</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Locations Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Local Service Centers</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {locations.map((location, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover="hover"
                onClick={() => setSelectedLocation(selectedLocation === i ? null : i)}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 cursor-pointer hover:border-blue-600 transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-600">{location.city}</h3>
                    <p className="text-gray-600">{location.zip}</p>
                  </div>
                  <MapPin className="text-blue-600" size={24} />
                </div>

                <p className="text-gray-700 mb-4">
                  <strong>Serving:</strong> {location.coverage}
                </p>

                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: selectedLocation === i ? 1 : 0,
                    height: selectedLocation === i ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="border-t pt-4 mt-4 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-orange-500" />
                    <a href={`tel:${location.phone}`} className="text-blue-600 hover:underline">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-orange-500" />
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onContactClick()
                    }}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
                  >
                    Get Quote for {location.city}
                  </button>
                </motion.div>

                {selectedLocation !== i && (
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    Click to view details
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition" />
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Our Local Service */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-6 bg-gradient-to-br from-blue-50 to-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Local Matters</h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              { icon: '🏘️', title: 'Local Expertise', desc: 'Deep knowledge of Orange County homes and HVAC systems' },
              { icon: '⚡', title: 'Faster Response', desc: 'Quick service appointments and same-day availability' },
              { icon: '🤝', title: 'Community Trusted', desc: 'Established relationships and local reputation' },
              { icon: '💰', title: 'Fair Pricing', desc: 'Transparent pricing with no hidden fees or surprises' },
              { icon: '🎯', title: 'Certified Technicians', desc: 'Local crew with industry certifications and training' },
              { icon: '✅', title: '100% Satisfaction', desc: 'Warranty on all work and full customer support' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Find Your Local Service Center</h2>
          <p className="text-xl mb-8 opacity-90">
            Select your location above to schedule a free inspection or call our local team.
          </p>
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition inline-flex items-center gap-2"
          >
            Book Service Now
            <ArrowRight size={22} />
          </motion.button>
        </div>
      </motion.section>
    </div>
  )
}
