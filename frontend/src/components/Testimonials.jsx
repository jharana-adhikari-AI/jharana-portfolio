import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
    description: 'Engineered AI-based automation integrating Zoho CRM and AWS serving 500+ clients monthly. Improved cost estimation accuracy by 43% and reduced manual work time by 60%.',
    highlights: ['500+ Clients', '43% Better Accuracy', '60% Time Saved'],
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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      if (newDirection === 1) {
        return prev === achievements.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? achievements.length - 1 : prev - 1
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 6000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const currentAchievement = achievements[currentIndex]
  const IconComponent = currentAchievement.icon

  return (
    <section id="testimonials" className="section-padding bg-white dark:bg-gray-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Recognition
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Achievements & Awards
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Highlights from competitions, published research, and impactful projects
              that showcase technical excellence and innovation.
            </p>
          </div>

          {/* Achievement Carousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden py-8">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="card p-8 md:p-12"
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Award Badge */}
                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full">
                      {currentAchievement.award}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-center text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentAchievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-center text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                    {currentAchievement.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {currentAchievement.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-lg"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12
                         p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Previous achievement"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
                         p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Next achievement"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to achievement ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
