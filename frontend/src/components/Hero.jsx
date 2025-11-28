import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import DarkToggle from './DarkToggle'

export default function Hero() {
  const scrollToSection = () => {
    const bioSection = document.getElementById('bio')
    if (bioSection) {
      bioSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background with Light/Dark Mode Support */}
      <div className="absolute inset-0 z-0">
        {/* Light mode: Clean white/gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:hidden" />

        {/* Dark mode: Dark background with optional image */}
        <div className="absolute inset-0 hidden dark:block">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/hero-bg.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Dark Mode Toggle - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <DarkToggle />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-primary-600 dark:text-primary-400 font-mono text-sm sm:text-base mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hello, I'm
          </motion.p>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Jharana Adhikari</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-light mb-8">
            Full Stack & AI Engineer
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Building scalable web and AI solutions with 3+ years of experience.
            Specialized in Python, React, FastAPI, and Machine Learning integration.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button
            onClick={scrollToSection}
            className="btn-primary"
          >
            Explore My Work
          </button>
          <a
            href="#contact"
            className="btn-secondary"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToSection}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer focus:outline-none group"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        aria-label="Scroll to content"
      >
        <motion.div
          className="flex flex-col items-center text-gray-500 dark:text-white/70 hover:text-gray-900 dark:hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm font-medium mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <FiChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}
