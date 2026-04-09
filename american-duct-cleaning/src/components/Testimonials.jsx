import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Irvine, CA',
      text: 'The air in our home feels completely different. Super professional service and quick completion. Highly recommend!',
      rating: 5,
      avatar: '👩‍💼',
    },
    {
      name: 'Michael Chen',
      location: 'Huntington Beach, CA',
      text: 'Best investment we made for our home. The difference in air quality is amazing. Great customer service too!',
      rating: 5,
      avatar: '👨‍💻',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Santa Ana, CA',
      text: 'Professional team arrived on time, did the job efficiently, and my allergies have improved dramatically. Worth every penny!',
      rating: 5,
      avatar: '👩‍🔬',
    },
    {
      name: 'David Thompson',
      location: 'Anaheim, CA',
      text: 'Transparent pricing, no hidden fees, and they explained everything. This is the service you want for air duct cleaning.',
      rating: 5,
      avatar: '👨‍🎓',
    },
  ]

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

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
            What Our Customers Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners experiencing cleaner air
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="bg-gradient-light rounded-2xl p-8 md:p-12 border border-slate-200 shadow-premium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-xl text-slate-700 mb-8 leading-relaxed italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonials[current].avatar}</div>
                <div>
                  <p className="font-bold text-slate-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-slate-600">
                    {testimonials[current].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              className="p-3 rounded-full bg-slate-100 hover:bg-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={next}
              className="p-3 rounded-full bg-slate-100 hover:bg-accent hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-colors ${
                  idx === current ? 'bg-accent' : 'bg-slate-300'
                }`}
                style={{ width: idx === current ? '32px' : '8px' }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
