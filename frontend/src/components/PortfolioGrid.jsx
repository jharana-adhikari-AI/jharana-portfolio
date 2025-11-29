import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'AI Energy Automation System',
    description: 'Engineered an AI-based automation system integrating Zoho CRM and AWS that dynamically generates personalized energy reports for 500+ clients monthly. Improved cost estimation accuracy by 90% and reduced manual work time by 60%.',
    githubUrl: null,
    liveUrl: 'https://www.canadianecohome.ca/',
    tags: ['FastAPI', 'React', 'AWS', 'Zoho API', 'PostgreSQL', 'AI'],
  },
  {
    id: 2,
    title: 'Precision Agriculture - Vine Wood Fungal Classification',
    description: 'VineWoodFungiSegmentation leverages CNNs to classify vine wood as healthy or infected, enabling AI-powered disease detection in agriculture. Integrating this into robotic systems enhances crop management and precision farming.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/Precision-Agriculture-Vine-Wood-Fungal-Classification-with-Deep-Learning',
    tags: ['Deep Learning', 'CNN', 'Computer Vision', 'Jupyter', 'Agriculture AI'],
  },
  {
    id: 3,
    title: 'YOLO Real-Time Object Detection',
    description: 'Real-time object detection system using YOLO (You Only Look Once) with Python, OpenCV, and Ultralytics library. Train custom YOLO models and detect objects in real-time video streams with high accuracy.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/YOLO-Object-Detection-in-Real-Time',
    tags: ['YOLO', 'Python', 'OpenCV', 'Ultralytics', 'Computer Vision'],
  },
  {
    id: 4,
    title: 'Insurance Document NLP API',
    description: 'A FastAPI-based tool that extracts structured data from unstructured insurance documents (PDFs, scanned images) using OCR (Tesseract), NLP (spaCy NER), and regex. Outputs clean JSON for downstream processing.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/-Insurance-Document-NLP-using-FastAPI',
    tags: ['FastAPI', 'Tesseract OCR', 'spaCy', 'NLP', 'Python'],
  },
  {
    id: 5,
    title: 'Next-Click Prediction System',
    description: 'A hybrid recommendation engine that boosts product discovery by predicting the next item a user will click using clickstream data, Markov Chains, and GRU-based deep learning for Fashion Campus.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/-Next-Click-Prediction-System-for-Fashion-Campus',
    tags: ['GRU', 'Markov Chains', 'Deep Learning', 'Recommendation System', 'Python'],
  },
  {
    id: 6,
    title: 'NYC Housing Big Data Analysis',
    description: 'A comprehensive analysis of NYC housing datasets to uncover trends, insights, and opportunities in the housing market using big data tools and visualization techniques.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/BigDataNYCHousing',
    tags: ['Big Data', 'Data Analysis', 'Jupyter', 'Visualization', 'Python'],
  },
  {
    id: 7,
    title: 'Mental Health AI Chatbot',
    description: 'NLP-powered mental health chatbot supporting 1,000+ simulated interactions for anxiety, depression, and PTSD. Published in STEM Fellowship with 87%+ classification accuracy. Top 17 finalist from 500+ entries.',
    githubUrl: 'https://github.com/jharana-adhikari-AI/chatbotMentalHealth',
    tags: ['NLP', 'Sentiment Analysis', 'ANN', 'Python', 'Published Research'],
  },
]

export default function PortfolioGrid() {
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
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, currentIndex])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Get indices for visible cards (prev, current, next)
  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const totalCards = projects.length

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
        x: 280,
        scale: 0.85,
        zIndex: 20,
        opacity: 0.7,
        rotateY: -15,
      }
    } else if (adjustedDiff === -1 || adjustedDiff === totalCards - 1) {
      return {
        x: -280,
        scale: 0.85,
        zIndex: 20,
        opacity: 0.7,
        rotateY: 15,
      }
    } else if (adjustedDiff === 2 || adjustedDiff === -totalCards + 2) {
      return {
        x: 480,
        scale: 0.7,
        zIndex: 10,
        opacity: 0.3,
        rotateY: -25,
      }
    } else if (adjustedDiff === -2 || adjustedDiff === totalCards - 2) {
      return {
        x: -480,
        scale: 0.7,
        zIndex: 10,
        opacity: 0.3,
        rotateY: 25,
      }
    } else {
      return {
        x: adjustedDiff > 0 ? 600 : -600,
        scale: 0.5,
        zIndex: 0,
        opacity: 0,
        rotateY: adjustedDiff > 0 ? -30 : 30,
      }
    }
  }

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-primary-100/60 to-primary-200/40 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-100 to-accent-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent-100 to-primary-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-4 sm:mb-6">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Portfolio
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Showcasing my top work across AI/ML engineering, full-stack software development, and data-driven solutions.
            </p>
          </div>

          {/* 3D Carousel */}
          <div className="relative h-[400px] sm:h-[420px] md:h-[420px] perspective-1000 mx-auto max-w-6xl">
            {/* Cards Container */}
            <div className="relative h-full flex items-center justify-center" style={{ perspective: '1200px' }}>
              {projects.map((project, index) => {
                const style = getCardStyle(index)
                return (
                  <motion.div
                    key={project.id}
                    className="absolute w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] cursor-pointer left-1/2 -ml-[140px] sm:-ml-[175px] md:-ml-[200px] lg:-ml-[225px]"
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
                        duration: 3 + index * 0.3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.15,
                      },
                    }}
                    onClick={() => goToSlide(index)}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className={`card overflow-hidden shadow-2xl transition-shadow duration-300 ${index === currentIndex ? 'ring-2 ring-primary-500 ring-offset-4 dark:ring-offset-gray-900' : ''}`}>
                      {/* Card Header */}
                      <div className="relative h-32 sm:h-36 bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center overflow-hidden">
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 opacity-20"
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{
                            duration: 15,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                          style={{
                            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                          }}
                        />

                        {/* Floating circles */}
                        <motion.div
                          className="absolute top-4 right-4 w-12 h-12 border border-white/20 rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        />
                        <motion.div
                          className="absolute bottom-4 left-4 w-8 h-8 border border-white/20 rounded-full"
                          animate={{ rotate: -360 }}
                          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* Project Initial */}
                        <motion.span
                          className="text-6xl sm:text-7xl font-bold text-white/30"
                          animate={index === currentIndex ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {project.title.charAt(0)}
                        </motion.span>

                        {/* Project Number */}
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <span className="text-white text-xs font-mono font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Action Buttons */}
                        {index === currentIndex && (
                          <motion.div
                            className="absolute top-3 left-3 flex gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                              >
                                <FiGithub className="w-4 h-4 text-white" />
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                              >
                                <FiExternalLink className="w-4 h-4 text-white" />
                              </a>
                            )}
                          </motion.div>
                        )}
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 text-[10px] sm:text-xs leading-relaxed mb-3 italic">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
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
              aria-label="Previous project"
            >
              <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40
                         p-2 sm:p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         hover:scale-110 active:scale-95 transition-all"
              aria-label="Next project"
            >
              <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-1 sm:mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary-600 to-accent-600'
                    : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="max-w-xs mx-auto mt-1 sm:mt-4">
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

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-2 sm:mt-8"
          >
            <a
              href="https://github.com/jharana-adhikari-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FiGithub className="w-5 h-5" />
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
