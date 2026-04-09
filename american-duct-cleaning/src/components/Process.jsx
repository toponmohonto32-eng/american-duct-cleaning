import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Inspection',
      description: 'We thoroughly inspect your duct system to identify all problem areas',
    },
    {
      number: '02',
      title: 'Cleaning',
      description: 'High-powered equipment removes dust, debris, and contaminants',
    },
    {
      number: '03',
      title: 'Verification',
      description: 'Final inspection ensures complete cleaning and system efficiency',
    },
    {
      number: '04',
      title: 'Report',
      description: 'Detailed report of work completed and maintenance recommendations',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="process" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our 4-Step Process
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional approach to comprehensive air duct cleaning
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Timeline connector line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent to-primary-500 -z-10"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative"
              variants={itemVariants}
            >
              <div className="text-center">
                {/* Step number circle */}
                <motion.div
                  className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  {step.number}
                </motion.div>

                {/* Step content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.div
          className="mt-16 bg-gradient-light rounded-2xl p-8 border border-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Why Our Process Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Advanced EPA-approved equipment removes 99% of contaminants',
              'Certified technicians follow industry best practices',
              'Complete system protection with protective coverings',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <Check className="text-accent flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
