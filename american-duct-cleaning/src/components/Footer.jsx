import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Services',
      links: ['Air Duct Cleaning', 'Dryer Vent Cleaning', 'HVAC Cleaning', 'Mold Removal'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Team', 'Service Areas', 'Blog'],
    },
    {
      title: 'Support',
      links: ['Contact Us', 'FAQ', 'Pricing', 'Testimonials'],
    },
  ]

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '(714) 555-0123' },
    { icon: Mail, label: 'Email', value: 'info@americanductcleaning.com' },
    { icon: MapPin, label: 'Location', value: 'Orange County, CA' },
  ]

  // Simple SVG social icons
  const SocialIcons = [
    {
      name: 'Facebook',
      svg: '👍',
    },
    {
      name: 'Instagram',
      svg: '📸',
    },
    {
      name: 'LinkedIn',
      svg: '🔗',
    },
  ]

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Contact Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-6">
              American Duct
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Professional air duct cleaning services delivering cleaner air and healthier homes across Orange County.
            </p>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3"
                    whileHover={{ x: 5 }}
                  >
                    <Icon size={18} className="text-orange-500 flex-shrink-0" style={{ color: '#F97316' }} />
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {SocialIcons.map((social, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors text-lg"
                  style={{ '--hover-bg': '#F97316' }}
                  whileHover={{ scale: 1.1, rotate: 20 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  {social.svg}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h4 className="font-bold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-orange-500 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>&copy; {currentYear} American Duct Cleaning. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
