import { useState, useEffect } from 'react'
import { Menu, X, Phone, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

export default function Header({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Services', href: '#services', link: '/' },
    { label: 'Locations', href: '/locations', link: '/locations' },
    { label: 'Why Us', href: '#why-us', link: '/' },
    { label: 'Contact', href: '#contact', link: '/' },
  ]

  const handleNavClick = (item) => {
    setIsOpen(false)
    // If it's a link to another page, React Router will handle it
    // If it's an anchor, scroll to it on the current page
    if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg shadow-slate-200/30'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            American Duct
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            item.link === location.pathname ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavClick(item)}
                className="text-slate-700 hover:text-orange-500 transition-colors duration-200 font-medium cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.link}
                className="text-slate-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={onContactClick}
          className="hidden md:flex items-center gap-2 btn-primary"
          style={{ backgroundColor: '#F97316' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Phone size={18} />
          Get Quote
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-slate-200 shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-slate-700 hover:text-orange-500 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => {
                onContactClick()
                setIsOpen(false)
              }}
              className="w-full btn-primary mt-4"
              style={{ backgroundColor: '#F97316', color: 'white' }}
            >
              Get Free Quote
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
