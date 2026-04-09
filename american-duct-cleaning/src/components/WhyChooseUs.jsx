import { motion } from 'framer-motion'
import { Shield, Award, Users, Zap } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Award,
      title: 'Certified Professionals',
      description: 'Our technicians are fully trained and certified in air duct cleaning',
    },
    {
      icon: Zap,
      title: 'Advanced Equipment',
      description: 'We use state-of-the-art technology for deep, effective cleaning',
    },
    {
      icon: Shield,
      title: 'Transparent Pricing',
      description: 'No hidden fees—you know exactly what you\'re paying for',
    },
    {
      icon: Users,
      title: '100% Satisfaction',
      description: 'We stand behind our work with a complete satisfaction guarantee',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="why-us" className="py-20 md:py-32 bg-gradient-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Why Homeowners Trust Us
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Over a decade of experience serving Orange County with professional integrity
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {reasons.map((reason, idx) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={idx}
                className="card-hover bg-white rounded-xl p-8 border border-slate-100 shadow-premium"
                variants={itemVariants}
                whileHover={{ boxShadow: '0 20px 40px rgba(249, 115, 22, 0.15)' }}
              >
                <motion.div
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 20, scale: 1.15 }}
                >
                  <Icon className="text-accent" size={24} />
                </motion.div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Trust Elements */}
        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { number: '2000+', label: 'Happy Customers' },
            { number: '15+', label: 'Years Experience' },
            { number: '98%', label: 'Customer Rating' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </p>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
