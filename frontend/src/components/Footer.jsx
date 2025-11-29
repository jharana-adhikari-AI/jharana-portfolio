import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiHeart, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/jharana-adhikari-AI', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jharana-adhikari/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jharanaadk@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:+14376031674', label: 'Phone' },
]

const footerLinks = [
  { name: 'About Me', href: '#bio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative bg-gradient-to-b from-primary-100/60 to-primary-200/50 dark:from-gray-950 dark:via-purple-950/20 dark:to-gray-900 text-gray-900 dark:text-white py-16 overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-primary-100 to-accent-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent-100 to-primary-50 rounded-full blur-3xl opacity-50" />
      </div>

      {/* Dark mode decorative background */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl -translate-x-1/4" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl translate-x-1/4" />
      </div>

      {/* Animated Background Elements - Cloud/Connection Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cloud icons */}
        <motion.div
          className="absolute top-[15%] left-[10%] opacity-15 dark:opacity-10"
          animate={{ y: [0, -8, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
            <path d="M38 28H14C8 28 4 24 4 18C4 12 8 8 14 8C14 4 18 0 24 0C30 0 34 4 34 8H38C42 8 46 12 46 18C46 24 42 28 38 28Z" stroke="#6366f1" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] right-[12%] opacity-10 dark:opacity-[0.06]"
          animate={{ y: [0, 10, 0], x: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        >
          <svg width="40" height="28" viewBox="0 0 48 32" fill="none">
            <path d="M38 28H14C8 28 4 24 4 18C4 12 8 8 14 8C14 4 18 0 24 0C30 0 34 4 34 8H38C42 8 46 12 46 18C46 24 42 28 38 28Z" stroke="#8b5cf6" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>

        {/* Connection links */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] dark:opacity-[0.03]">
          <motion.line
            x1="15%" y1="30%" x2="35%" y2="50%"
            stroke="#6366f1" strokeWidth="1"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.line
            x1="35%" y1="50%" x2="55%" y2="35%"
            stroke="#8b5cf6" strokeWidth="1"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          />
          <motion.line
            x1="55%" y1="35%" x2="75%" y2="55%"
            stroke="#6366f1" strokeWidth="1"
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          />
          <motion.line
            x1="75%" y1="55%" x2="90%" y2="40%"
            stroke="#8b5cf6" strokeWidth="1"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.8 }}
          />
        </svg>

        {/* Connection nodes */}
        <motion.div
          className="absolute top-[30%] left-[15%] w-2 h-2 bg-primary-500/30 dark:bg-primary-400/15 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[50%] left-[35%] w-3 h-3 bg-accent-500/30 dark:bg-accent-400/15 rounded-full"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[35%] right-[45%] w-2 h-2 bg-primary-500/30 dark:bg-primary-400/15 rounded-full"
          animate={{ scale: [1, 1.6, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-[55%] right-[25%] w-3 h-3 bg-accent-500/30 dark:bg-accent-400/15 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, delay: 0.8 }}
        />

        {/* @ symbol for contact */}
        <motion.div
          className="absolute top-[40%] right-[15%] text-3xl text-primary-300/10 dark:text-primary-500/[0.06] font-mono"
          animate={{ rotate: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          @
        </motion.div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-primary-200 dark:border-gray-800">
            {/* Brand */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <a href="#hero" className="inline-block font-display font-bold text-2xl mb-4">
                <span className="text-gradient">JA</span><span className="text-primary-500">.</span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 text-sm max-w-xs italic">
                Full Stack Software Developer & AI Engineer with 3+ years of experience in building scalable softwares, web applications and AI solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 rounded-xl bg-transparent dark:bg-gray-800 flex items-center justify-center
                               text-gray-600 dark:text-gray-400 hover:bg-primary-600 hover:text-white
                               dark:hover:bg-primary-600 transition-all shadow-md"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4 flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-primary-500" />
                Toronto, ON, Canada
              </p>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Jharana Adhikari. All rights reserved.
            </p>
            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Made with <FiHeart className="w-4 h-4 text-red-500 animate-pulse" /> using React & Tailwind
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
