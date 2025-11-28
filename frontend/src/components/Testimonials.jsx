import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { SiUpwork } from 'react-icons/si'

const testimonials = [
  {
    id: 1,
    name: 'Dinesh Thapa',
    role: 'CEO',
    company: 'XDezo Technology',
    testimonial: "Jharana is one of the most dedicated and curious learners I've worked with at XDezo Technology. Her ability to grasp complex concepts in full-stack development and AI — and turn them into practical, high-quality solutions — is truly impressive. She brings a positive attitude, sharp analytical skills, and a consistent commitment to excellence. Any organization would be lucky to have her.",
    type: 'professional',
  },
  {
    id: 2,
    name: 'Trishna Sapkota',
    role: 'Team Colleague',
    company: 'Ombryo Lab',
    testimonial: "Working with Jharana at Ombryo Lab was truly inspiring. As an SEO Analyst, she brought strong analytical skills and a deep understanding of data-driven marketing. Her ability to apply data mining, regression analysis, and automation significantly improved our campaign performance and reporting efficiency. Jharana is hardworking, collaborative, and always eager to learn — a teammate who consistently elevates the quality of work around her.",
    type: 'professional',
  },
  {
    id: 3,
    name: 'Prasad Mahes',
    role: 'Client',
    company: 'Leads For Professionals Inc',
    location: 'Toronto, Canada',
    testimonial: "Jharna did a great job! I highly recommend hiring her!",
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
    testimonial: "Jharna is a professional and great to work with, she is responsive to all suggestions and completes the work quickly keeping to timetables and executing any changes immediately. Jharna is highly recommended for any social media or content creation work.",
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
        return prev === testimonials.length - 1 ? 0 : prev + 1
      }
      return prev === 0 ? testimonials.length - 1 : prev - 1
    })
  }

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1)
    }, 7000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              Testimonials
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              What People Say
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Feedback from colleagues, managers, and clients I've had the pleasure of working with.
            </p>
          </div>

          {/* Testimonial Carousel */}
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
                  {/* Badge - Professional or Upwork */}
                  <div className="flex justify-center mb-6">
                    {currentTestimonial.type === 'upwork' ? (
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <SiUpwork className="w-5 h-5 text-green-600 dark:text-green-400" />
                        <span className="text-sm font-medium text-green-700 dark:text-green-300">
                          Upwork Verified
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                        <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                          Professional Reference
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Rating - Only for Upwork */}
                  {currentTestimonial.type === 'upwork' && (
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                        5.0
                      </span>
                    </div>
                  )}

                  {/* Testimonial Quote */}
                  <blockquote className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
                    "{currentTestimonial.testimonial}"
                  </blockquote>


                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-white">
                        {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {currentTestimonial.role}, {currentTestimonial.company}
                    </p>
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
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12
                         p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg
                         text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
                         focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
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
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
