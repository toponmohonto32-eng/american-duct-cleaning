import { motion } from 'framer-motion'

export default function CTABanner({ onCTAClick }) {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-r from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Improve Your Air Quality?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Don't wait another day to breathe cleaner, healthier air. Schedule your free inspection and experience the American Duct Cleaning difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onCTAClick}
              className="px-8 py-4 bg-accent text-white rounded-lg font-bold text-lg hover:bg-accent/90 transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Quote Today
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-white text-primary-500 rounded-lg font-bold text-lg hover:bg-slate-100 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Call Us Now
            </motion.button>
          </div>

          {/* Trust line */}
          <motion.p
            className="mt-10 text-white/80 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ✓ Same-day service available • ✓ No hidden fees • ✓ 100% satisfaction guaranteed
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
