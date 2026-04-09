import { motion } from 'framer-motion'
import { FaFan, FaFire, FaSnowflake, FaShieldAlt } from 'react-icons/fa'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      slug: 'air-duct-cleaning',
      icon: FaFan,
      title: 'Air Duct Cleaning',
      description: 'Deep cleaning of your entire duct system to remove dust, allergens, and contaminants',
    },
    {
      slug: 'dryer-vent-cleaning',
      icon: FaFire,
      title: 'Dryer Vent Cleaning',
      description: 'Prevent house fires and improve efficiency by removing dangerous lint buildup',
    },
    {
      slug: 'hvac-cleaning',
      icon: FaSnowflake,
      title: 'HVAC System Cleaning',
      description: 'Comprehensive heating and cooling system maintenance for peak efficiency',
    },
    {
      slug: 'mold-removal',
      icon: FaShieldAlt,
      title: 'Mold Inspection & Removal',
      description: 'Detect and safely remove dangerous mold growth from your air systems',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive air quality solutions for your home or business
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={idx}
                className="card-hover bg-white rounded-2xl p-8 border border-slate-200 shadow-premium hover:shadow-xl transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent rounded-xl flex items-center justify-center mb-6 text-white text-2xl"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to={`/service/${service.slug}`}
                  className="text-accent font-semibold hover:text-primary-500 transition-colors inline-flex items-center gap-2"
                >
                  Learn More
                  <motion.span whileHover={{ x: 5 }}>
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
