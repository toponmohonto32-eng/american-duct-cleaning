import { motion } from 'framer-motion'
import { ArrowDown, Phone, CheckCircle } from 'lucide-react'
import { FaAward, FaShieldAlt, FaClock } from 'react-icons/fa'

export default function Hero({ onCTAClick }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const badges = [
    { icon: <FaAward className="text-xl" />, text: '25+ Years Experience' },
    { icon: <FaShieldAlt className="text-xl" />, text: '100% Satisfaction Guaranteed' },
    { icon: <FaClock className="text-xl" />, text: 'Same-Day Service Available' },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary-50 via-white to-slate-50 overflow-hidden pt-20">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Text Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6"
                variants={itemVariants}
              >
                Breathe Cleaner, Healthier Air
              </motion.h1>
              <motion.p
                className="text-xl text-slate-600 leading-relaxed"
                variants={itemVariants}
              >
                Professional air duct, HVAC, and dryer vent cleaning services in Orange County. Our expert technicians remove dust, allergens, and pollutants to improve your indoor air quality and protect your family's health.
              </motion.p>
            </div>

            {/* Trust Badges */}
            <motion.div className="space-y-3" variants={itemVariants}>
              {badges.map((badge, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-accent">{badge.icon}</div>
                  <span className="text-slate-700 font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <motion.button
                onClick={onCTAClick}
                className="btn-primary flex items-center justify-center gap-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={20} />
                Get Free Quote
              </motion.button>
              <motion.button
                onClick={onCTAClick}
                className="btn-secondary flex items-center justify-center gap-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCircle size={20} />
                Book Service
              </motion.button>
            </motion.div>

            {/* Trust Line */}
            <motion.p
              className="text-sm text-slate-500 pt-4"
              variants={itemVariants}
            >
              ✓ Licensed & Insured | NADCA Certified | Same-Day Availability
            </motion.p>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative h-96 md:h-full hidden md:block"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent rounded-3xl opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            ></motion.div>
            <motion.div
              className="absolute inset-4 border-2 border-accent/30 rounded-2xl"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            ></motion.div>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="text-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <div className="text-6xl mb-4">💨</div>
                <p className="text-primary-500 font-bold text-lg">Premium Air Quality</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-accent" size={24} />
      </motion.div>
    </section>
  )
}
