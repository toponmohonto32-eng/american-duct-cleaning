import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ServiceAreas() {
  const cities = [
    'Anaheim',
    'Irvine',
    'Santa Ana',
    'Huntington Beach',
    'Garden Grove',
    'Fullerton',
    'Orange',
    'Costa Mesa',
    'San Clemente',
    'Laguna Hills',
    'Newport Beach',
    'Seal Beach',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proudly serving Orange County and surrounding communities
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {cities.map((city, idx) => (
            <motion.div
              key={idx}
              className="card-hover bg-white rounded-lg p-6 border border-slate-200 shadow-sm flex items-center gap-3 text-center justify-center"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 10px 25px rgba(249, 115, 22, 0.15)',
              }}
            >
              <MapPin size={18} className="text-accent flex-shrink-0" />
              <span className="font-semibold text-slate-900">{city}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-slate-600 mb-6">
            Don't see your area listed? We may still service your location!
          </p>
          <Link
            to="/locations"
            className="inline-flex items-center gap-2 btn-primary hover:opacity-90 transition"
          >
            View All Locations & Details
            <motion.span whileHover={{ x: 5 }}>
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
