import { motion } from 'framer-motion'
import { FaLungs, FaAllergies, FaLeaf, FaSmile } from 'react-icons/fa'

export default function Benefits() {
  const benefits = [
    {
      icon: FaLungs,
      title: 'Healthier Breathing',
      description: 'Remove dust, bacteria, mold, and pollutants that circulate in your home daily',
    },
    {
      icon: FaAllergies,
      title: 'Reduce Allergies',
      description: 'Eliminate allergens and respiratory irritants for cleaner indoor air',
    },
    {
      icon: FaLeaf,
      title: 'Save on Energy',
      description: 'Improve HVAC efficiency by up to 20% and lower monthly energy bills',
    },
    {
      icon: FaSmile,
      title: 'Peace of Mind',
      description: 'Enjoy fresh air and the confidence of a professionally maintained system',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Clean Air Matters
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Discover how professional duct cleaning transforms your home's indoor air quality
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={idx}
                className="card-hover bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-accent hover:shadow-lg transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-accent" />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
