import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

const testimonials = [
  {
    id: 1,
    name: 'Dinesh Thapa',
    role: 'CEO',
    company: 'XDezo Technology',
    testimonial: "Jharana is a dedicated and curious Full Stack & AI Engineer, turning complex concepts into high-quality solutions with a positive attitude and sharp analytical skills.",
    type: 'professional',
  },
  {
    id: 2,
    name: 'Trishna Sapkota',
    role: 'Team Colleague',
    company: 'Ombryo Lab',
    testimonial: "Jharana is a hardworking and collaborative SEO Analyst whose expertise in data-driven marketing, analytics, and automation consistently elevates team performance and campaign results.",
    type: 'professional',
  },
  {
    id: 3,
    name: 'Prasad Mahes',
    role: 'Client',
    company: 'Leads For Professionals Inc',
    location: 'Toronto, Canada',
    testimonial: "Jharana did a great job! I highly recommend hiring her!",
    project: 'Extract Website Page and Blog Post URLs, Titles, Descriptions and Word Count',
    date: 'Mar 2024',
    amount: '$25.00',
    type: 'upwork',
  },
  {
    id: 4,
    name: 'Allan Muir',
    role: 'CEO',
    company: 'Yoga Center Natural',
    testimonial: "Jharana is a professional and great to work with, she is responsive to all suggestions and completes the work quickly keeping to timetables and executing any changes immediately. Jharana is highly recommended for any social media or content creation work.",
    project: 'Creating/Editing Material for Facebook & Instagram Posts',
    date: 'Sep 2022 - Feb 2023',
    amount: '$504.17',
    type: 'upwork',
  },
  {
    id: 5,
    name: 'Ananthakrishnan Anil',
    role: 'Client',
    company: 'Pixel Technologies',
    location: 'India',
    testimonial: "The work she did was beyond my expectations. She is an expert in web development. She is very responsive and professional. Highly recommended.",
    project: 'Website Developer to Make Contents on Social Media',
    date: 'Sep - Oct 2022',
    amount: '$5.00',
    type: 'upwork',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, currentIndex])

  // Handle swipe/drag
  const handleDragEnd = (event, info) => {
    const threshold = 50
    if (info.offset.x < -threshold) {
      nextSlide()
    } else if (info.offset.x > threshold) {
      prevSlide()
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Unique 3D carousel - cards fan out in a circular arc
  const getCardStyle = (index) => {
    const diff = index - currentIndex
    const totalCards = testimonials.length

    // Handle wraparound
    let adjustedDiff = diff
    if (diff > totalCards / 2) adjustedDiff = diff - totalCards
    if (diff < -totalCards / 2) adjustedDiff = diff + totalCards

    // Calculate rotation angle for fan effect
    const angle = adjustedDiff * 25 // degrees between cards
    const radius = 50 // distance from center

    if (adjustedDiff === 0) {
      return {
        x: 0,
        y: 0,
        scale: 1,
        zIndex: 50,
        opacity: 1,
        rotateY: 0,
        rotateZ: 0,
      }
    } else if (Math.abs(adjustedDiff) === 1) {
      return {
        x: adjustedDiff * 280,
        y: 30,
        scale: 0.8,
        zIndex: 40,
        opacity: 0.8,
        rotateY: adjustedDiff * -20,
        rotateZ: adjustedDiff * 3,
      }
    } else if (Math.abs(adjustedDiff) === 2) {
      return {
        x: adjustedDiff * 220,
        y: 60,
        scale: 0.6,
        zIndex: 30,
        opacity: 0.5,
        rotateY: adjustedDiff * -25,
        rotateZ: adjustedDiff * 5,
      }
    } else {
      return {
        x: adjustedDiff > 0 ? 500 : -500,
        y: 80,
        scale: 0.4,
        zIndex: 10,
        opacity: 0,
        rotateY: adjustedDiff > 0 ? -30 : 30,
        rotateZ: adjustedDiff > 0 ? 8 : -8,
      }
    }
  }

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-primary-100/60 to-primary-200/40 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        {/* Gradient mesh */}
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-br from-primary-100 to-transparent rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-tl from-accent-100 to-primary-50 rounded-full blur-3xl opacity-50 translate-x-1/4" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-r from-primary-50 to-accent-50 rounded-full blur-3xl opacity-30 -translate-x-1/3" />
        {/* Quote decorations */}
        <div className="absolute top-16 right-1/4 text-8xl text-primary-100 font-serif opacity-50">"</div>
        <div className="absolute bottom-16 left-1/4 text-8xl text-accent-100 font-serif opacity-50 rotate-180">"</div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-2 sm:mb-4">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Testimonials
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              What People Say
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
              Feedback from colleagues, managers, and clients I've had the pleasure of working with.
            </p>
          </div>

          {/* 3D Fan Carousel */}
          <div className="relative h-[420px] sm:h-[450px] md:h-[480px] mx-auto max-w-6xl">
            {/* Cards Container */}
            <motion.div
              className="relative h-full flex items-center justify-center touch-pan-y"
              style={{ perspective: '1500px' }}
              drag={isMobile ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              {testimonials.map((testimonial, index) => {
                const style = getCardStyle(index)
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute w-[280px] sm:w-[350px] md:w-[400px] lg:w-[450px] cursor-pointer left-1/2 -ml-[140px] sm:-ml-[175px] md:-ml-[200px] lg:-ml-[225px]"
                    animate={{
                      x: style.x,
                      y: [style.y, style.y - 8, style.y],
                      scale: style.scale,
                      zIndex: style.zIndex,
                      opacity: style.opacity,
                      rotateY: style.rotateY,
                      rotateZ: style.rotateZ,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 80,
                      damping: 15,
                      duration: 0.8,
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      },
                    }}
                    onClick={() => goToSlide(index)}
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div className={`card p-5 sm:p-6 md:p-8 overflow-hidden shadow-2xl transition-all duration-300 bg-gradient-to-b from-primary-100 to-primary-200 dark:from-gray-900 dark:to-gray-900 ${index === currentIndex ? 'ring-2 ring-primary-500 ring-offset-4 dark:ring-offset-gray-900 shadow-primary-500/20' : ''}`}>
                      {/* Large Quote Mark Background */}
                      <div className="absolute top-2 left-4 text-6xl text-primary-200 dark:text-primary-800/30 font-serif leading-none opacity-50">"</div>

                      {/* Badge - Professional or Upwork */}
                      <div className="flex justify-center mb-4 relative z-10">
                        {testimonial.type === 'upwork' ? (
                          <motion.div
                            className="flex items-center gap-2 px-3 py-1.5 bg-green-100 dark:bg-green-900/30 rounded-full"
                            animate={index === currentIndex ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <SiUpwork className="w-4 h-4 text-green-600 dark:text-green-400" />
                            <span className="text-xs font-medium text-green-700 dark:text-green-300">
                              Upwork Verified
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            className="flex items-center gap-2 px-3 py-1.5 bg-primary-100 dark:bg-primary-900/30 rounded-full"
                            animate={index === currentIndex ? { scale: [1, 1.05, 1] } : {}}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <span className="text-xs font-medium text-primary-700 dark:text-primary-300">
                              Professional Reference
                            </span>
                          </motion.div>
                        )}
                      </div>

                      {/* Rating - Only for Upwork */}
                      {testimonial.type === 'upwork' && (
                        <div className="flex justify-center gap-0.5 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={index === currentIndex ? { rotate: [0, 10, -10, 0] } : {}}
                              transition={{ duration: 0.5, delay: i * 0.1, repeat: Infinity, repeatDelay: 3 }}
                            >
                              <FiStar className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </motion.div>
                          ))}
                          <span className="ml-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                            5.0
                          </span>
                        </div>
                      )}

                      {/* Testimonial Quote */}
                      <blockquote className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4 italic relative z-10">
                        "{testimonial.testimonial}"
                      </blockquote>

                      {/* Client Info */}
                      <div className="flex flex-col items-center relative z-10">
                        <motion.div
                          className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-2 shadow-lg"
                          animate={index === currentIndex ? {
                            boxShadow: ['0 0 0 0 rgba(99, 102, 241, 0.4)', '0 0 0 10px rgba(99, 102, 241, 0)', '0 0 0 0 rgba(99, 102, 241, 0)']
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-sm font-bold text-white">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </motion.div>
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* Navigation Arrows - Hidden on mobile */}
            {!isMobile && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50
                             p-2 sm:p-3 rounded-full bg-transparent dark:bg-gray-800 shadow-xl
                             text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                             hover:scale-110 active:scale-95 transition-all"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50
                             p-2 sm:p-3 rounded-full bg-transparent dark:bg-gray-800 shadow-xl
                             text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                             hover:scale-110 active:scale-95 transition-all"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-primary-600 to-accent-600'
                    : 'w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-400 dark:hover:bg-primary-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
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
                transition={{ duration: isAutoPlaying ? 6 : 0, ease: 'linear' }}
                key={currentIndex}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
