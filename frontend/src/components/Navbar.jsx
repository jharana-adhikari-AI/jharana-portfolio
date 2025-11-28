import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import DarkToggle from './DarkToggle'

const navLinks = [
  { name: 'Bio', href: '#bio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ visible }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.replace('#', ''))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <nav className="glass shadow-lg">
            <div className="section-container">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="font-display font-bold text-xl text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  JA<span className="text-primary-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        activeSection === link.href.replace('#', '')
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                          : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Right Side - Theme Toggle & Mobile Menu */}
                <div className="flex items-center gap-2">
                  <DarkToggle />
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Toggle menu"
                    aria-expanded={mobileMenuOpen}
                  >
                    {mobileMenuOpen ? (
                      <FiX className="w-6 h-6" />
                    ) : (
                      <FiMenu className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden overflow-hidden"
                  >
                    <div className="py-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                            activeSection === link.href.replace('#', '')
                              ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30'
                              : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                          }`}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
