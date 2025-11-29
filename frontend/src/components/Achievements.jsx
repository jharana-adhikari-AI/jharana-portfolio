import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiAward, FiFileText } from 'react-icons/fi'

const achievements = [
  {
    id: 1,
    title: 'Kaggle Traffic Collision Outcome Prediction',
    award: 'Runner-Up',
    icon: FiAward,
    description: 'Developed ensemble modeling techniques to achieve 89% accuracy. Applied advanced feature engineering, missing data imputation, and model interpretation (SHAP) to optimize predictions.',
    highlights: ['89% Accuracy', 'Ensemble Models', 'SHAP Analysis'],
  },
  {
    id: 2,
    title: 'STEM Fellowship 2024 Summer',
    award: 'Top Finalist & Published Paper',
    icon: FiFileText,
    description: 'Designed an NLP-powered mental health chatbot supporting 1,000+ simulated interactions for anxiety, depression, and PTSD. Selected among 17 national finalists from 500+ entries.',
    highlights: ['Top 17 from 500+', '87%+ Accuracy', 'Published Research'],
  },
  {
    id: 3,
    title: 'AI Energy Automation System',
    award: 'Production Impact',
    icon: FiAward,
    description: 'Engineered AI-based automation integrating Zoho CRM and AWS serving 500+ clients monthly. Improved cost estimation accuracy by 90% and reduced manual work time by 60%.',
    highlights: ['500+ Clients', '90% Better Accuracy', '60% Time Saved'],
  },
  {
    id: 4,
    title: 'Insurance Document NLP API',
    award: 'Technical Excellence',
    icon: FiAward,
    description: 'Built production-ready NLP microservice processing 10,000+ documents with 98% text accuracy and 40% faster inference through OCR + Deep Learning optimization.',
    highlights: ['10,000+ Documents', '98% Accuracy', '40% Faster'],
  },
]

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % achievements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Get card style based on position relative to current
  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const totalCards = achievements.length

    // Handle wraparound
    let adjustedDiff = diff
    if (diff > totalCards / 2) adjustedDiff = diff - totalCards
    if (diff < -totalCards / 2) adjustedDiff = diff + totalCards

    if (adjustedDiff === 0) {
      return {
        x: 0,
        scale: 1,
        zIndex: 30,
        opacity: 1,
        rotateY: 0,
      }
    } else if (adjustedDiff === 1 || adjustedDiff === -totalCards + 1) {
      return {
        x: 320,
        scale: 0.75,
        zIndex: 20,
        opacity: 0.7,
        rotateY: -15,
      }
    } else if (adjustedDiff === -1 || adjustedDiff === totalCards - 1) {
      return {
        x: -320,
        scale: 0.75,
        zIndex: 20,
        opacity: 0.7,
        rotateY: 15,
      }
    } else {
      return {
        x: adjustedDiff > 0 ? 500 : -500,
        scale: 0.5,
        zIndex: 0,
        opacity: 0,
        rotateY: adjustedDiff > 0 ? -25 : 25,
      }
    }
  }

  return (
    <section id="achievements" className="section-padding bg-gradient-to-b from-accent-100/50 to-accent-200/40 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-accent-100 to-primary-50 rounded-full blur-3xl opacity-50 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-primary-100 to-accent-50 rounded-full blur-3xl opacity-40 translate-y-1/3" />
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-200 rounded-full opacity-30" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border-2 border-accent-200 rounded-lg rotate-45 opacity-30" />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary-200 rounded-full opacity-20" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-4">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Recognition
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Achievements & Awards
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
              Highlights from competitions, published research, and impactful projects
              that showcase technical excellence and innovation.
            </p>
          </div>

          {/* 3D Carousel */}
          <div className="relative h-[380px] sm:h-[400px] md:h-[420px] perspective-1000 mx-auto max-w-6xl">
            {/* Cards Container */}
            <div className="relative h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
              {achievements.map((achievement, index) => {
                const style = getCardStyle(index)
                const IconComponent = achievement.icon
                return (
                  <motion.div
                    key={achievement.id}
                    className="absolute w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] cursor-pointer left-1/2 -ml-[150px] sm:-ml-[190px] md:-ml-[210px] lg:-ml-[240px]"
                    animate={{
                      x: style.x,
                      y: [0, -10, 0],
                      scale: style.scale,
                      zIndex: style.zIndex,
                      opacity: style.opacity,
                      rotateY: style.rotateY,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20,
                      duration: 0.6,
                      y: {
                        duration: 3 + index * 0.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      },
                    }}
                    onClick={() => goToSlide(index)}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className={`card p-6 sm:p-8 overflow-hidden shadow-2xl transition-shadow duration-300 ${index === currentIndex ? 'ring-2 ring-primary-500 ring-offset-4 dark:ring-offset-gray-900' : ''}`}>
                      {/* Icon */}
                      <div className="flex justify-center mb-4">
                        <motion.div
                          className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center"
                          animate={index === currentIndex ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <IconComponent className="w-7 h-7 text-white" />
                        </motion.div>
                      </div>

                      {/* Award Badge */}
                      <div className="text-center mb-3">
                        <span className="inline-block px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-semibold rounded-full">
                          {achievement.award}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-center text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {achievement.title}
                      </h3>

                      {/* Description */}
                      <p className="text-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 italic">
                        {achievement.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap justify-center gap-2">
                        {achievement.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40
                         p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         hover:scale-110 active:scale-95 transition-all"
              aria-label="Previous achievement"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40
                         p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         hover:scale-110 active:scale-95 transition-all"
              aria-label="Next achievement"
            >
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-4">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary-600 to-accent-600'
                    : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                }`}
                aria-label={`Go to achievement ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-xs mx-auto mt-4">
            <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-600 to-accent-600"
                initial={{ width: '0%' }}
                animate={{ width: isAutoPlaying ? '100%' : '0%' }}
                transition={{ duration: isAutoPlaying ? 5 : 0, ease: 'linear' }}
                key={currentIndex}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
