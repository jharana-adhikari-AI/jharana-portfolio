import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import DarkToggle from './DarkToggle'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullName = 'JHARANA ADHIKARI'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullName.length) {
        setDisplayedText(fullName.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 200) // Slower - 200ms per letter
    return () => clearInterval(timer)
  }, [])

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
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-accent-400/15 rounded-full blur-2xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
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
      <div className="relative z-10 px-4 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Floating Circular Profile Image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 }}
          >
            {/* Animated glow ring */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-xl opacity-40"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
            {/* Decorative rotating ring */}
            <motion.div
              className="absolute -inset-3 border-2 border-dashed border-primary-400/30 dark:border-primary-500/30 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            />
            {/* Profile image */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/profile.png"
                alt="Jharana Adhikari"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-2 -right-2 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              3+ Years Exp
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p
                className="text-primary-600 dark:text-primary-400 font-mono text-base sm:text-lg mb-4 tracking-wider font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Hello, I'm
              </motion.p>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-wider"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100 }}
            >
              <span className="block">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block w-1 h-10 sm:h-12 md:h-14 lg:h-16 bg-primary-600 dark:bg-primary-400 ml-1 align-middle"
                />
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, type: 'spring', stiffness: 100 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium mb-6 whitespace-nowrap">
                Full Stack Software Developer & AI Engineer
              </p>
            </motion.div>

            <motion.div
              className="mt-8 flex flex-row justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              <motion.button
                onClick={scrollToSection}
                className="btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
              <motion.a
                href="#contact"
                className="btn-secondary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToSection}
        className="absolute bottom-8 left-0 right-0 mx-auto w-fit z-10 cursor-pointer focus:outline-none group"
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
