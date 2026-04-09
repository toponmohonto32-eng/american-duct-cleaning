import { motion } from 'framer-motion'
import { Wind, Leaf, Zap, Droplets, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    {
      slug: 'air-duct-cleaning',
      icon: Wind,
      title: 'Air Duct Cleaning',
      description: 'Deep cleaning of your entire duct system to remove dust and allergens',
    },
    {
      slug: 'dryer-vent-cleaning',
      icon: Leaf,
      title: 'Dryer Vent Cleaning',
      description: 'Prevent fire hazards and improve dryer efficiency with expert cleaning',
    },
    {
      slug: 'hvac-cleaning',
      icon: Zap,
      title: 'HVAC System Cleaning',
      description: 'Comprehensive HVAC maintenance for optimal performance and efficiency',
    },
    {
      slug: 'mold-removal',
      icon: Droplets,
      title: 'Mold Inspection & Removal',
      description: 'Detect and safely remove mold growth in your air systems',
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
                className="card-hover bg-white rounded-2xl p-8 border border-slate-200 shadow-premium"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent rounded-xl flex items-center justify-center mb-6 text-white"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon size={32} />
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
