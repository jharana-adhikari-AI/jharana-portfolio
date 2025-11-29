import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiCode, FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi'

const workExperience = [
  {
    title: 'Associate Software Developer',
    company: 'Canadian Eco Home Group',
    location: '81 Zenway Blvd #10, Woodbridge, ON L4H 0S5, Canada',
    website: 'https://www.canadianecohome.ca/',
    period: 'Aug 2025 – Present',
    highlights: [
      'Engineered an AI-based automation system integrating Zoho CRM and AWS that dynamically generates personalized energy reports for 500+ clients monthly.',
      'Automated financial calculations for electricity savings, IRR, and rebate eligibility, improving cost estimation accuracy by 90% and reducing manual work time by 60%.',
      'Developed real-time inspection analytics using FastAPI and React dashboards to visualize performance, anomalies, and test metrics.',
      'Linked Zoho APIs with PostgreSQL databases for secure, automated decision-making — increasing data synchronization speed by 70%.',
      'Applied AI algorithms and statistical models to analyze energy usage and compliance, enhancing operational efficiency and client engagement.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company: 'Xdezo Technology',
    location: 'Nepal',
    period: 'Feb 2022 – Oct 2024',
    highlights: [
      'Designed and deployed SaaS platforms using FastAPI, Django, React, and Node.js, improving response time by 35% and uptime to 99.9%.',
      'Implemented testing automation (Postman, PyTest) and CI/CD pipelines in Azure DevOps, streamlining software release cycles by 40%.',
      'Built REST APIs and integrated ML-based analytics dashboards for early detection of performance anomalies, reducing system failure rates by 25%.',
      'Collaborated with QA and DevOps teams for compliance-based release management and security audits.',
    ],
  },
  {
    title: 'SEO Analyst',
    company: 'Ombryo Lab',
    location: 'Nepal',
    period: 'Feb 2021 – Jun 2021',
    highlights: [
      'Applied data mining and regression analysis to optimize digital campaigns for 300+ publications.',
      'Automated SEO performance reports, improving analytical insights and increasing organic web traffic by 28%.',
      'Used statistical methods to identify performance anomalies, contributing to improved marketing ROI.',
    ],
  },
]

const education = [
  {
    degree: 'Ontario Graduate Certificate – Artificial Intelligence & Machine Learning',
    institution: 'Lambton College, Toronto',
    period: 'Jan 2024 – Aug 2025',
    focus: 'Advanced AI/ML, Deep Learning, NLP, Computer Vision, and Data Science',
  },
  {
    degree: 'Bachelor of Science – Computer System Engineering',
    institution: 'University of Sunderland',
    period: 'Oct 2018 – Nov 2022',
    focus: 'Software Engineering, Algorithms, AI, and Data Analysis',
  },
]

const badges = [
  { icon: FiAward, label: 'STEM Finalist', description: 'Top 17 from 500+ entries' },
  { icon: FiBookOpen, label: 'AI/ML Certified', description: 'Lambton College' },
  { icon: FiCode, label: 'Kaggle Runner-Up', description: '89% Model Accuracy' },
  { icon: FiBriefcase, label: '3+ Years', description: 'Professional Experience' },
]

export default function Bio() {
  const [activeTab, setActiveTab] = useState('experience')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="bio" className="section-padding bg-gradient-to-b from-primary-100/60 to-primary-200/40 dark:from-gray-900 dark:to-gray-950">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              My Story & Journey
            </h2>
          </motion.div>

          {/* Profile Photo and Bio Text Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Profile Photo */}
            <motion.div
              variants={itemVariants}
              className="space-y-8 lg:sticky lg:top-24"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                    <img
                      src="/bio.jpg"
                      alt="Jharana Adhikari - Full Stack & AI Engineer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="card p-4 text-center hover:shadow-xl transition-all"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <badge.icon className="w-8 h-8 mx-auto mb-2 text-primary-500" />
                    </motion.div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      {badge.label}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {badge.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Bio Text + Tab Buttons + Experience/Education */}
            <motion.div
              variants={itemVariants}
              className="space-y-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              {/* Bio Text */}
              <motion.div
                className="card relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-800/50 border border-primary-100 dark:border-gray-700 overflow-hidden animate-neon-pulse"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-2xl" />

                {/* Quote mark */}
                <div className="absolute top-4 left-4 text-6xl text-primary-300 dark:text-primary-700 opacity-50 font-serif leading-none">"</div>

                <p className="relative text-gray-600 dark:text-gray-300 leading-relaxed text-base italic">
                  I develop scalable software and AI-powered systems using Python, React, FastAPI, Node.js, and cloud technologies—building intelligent, data-driven solutions that enable automation and smarter decision-making.
                </p>

                <p className="relative mt-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base italic">
                  With 3+ years of experience, I specialize in LLM integration, RAG pipelines, vector databases, and modern microservice-based architectures to deliver production-ready AI applications from Toronto.
                </p>
              </motion.div>

              {/* Tab Buttons */}
              <div className="flex gap-4">
                <motion.button
                  onClick={() => setActiveTab('experience')}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                    activeTab === 'experience'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiBriefcase className="w-5 h-5" />
                  Work Experience
                </motion.button>
                <motion.button
                  onClick={() => setActiveTab('education')}
                  className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all ${
                    activeTab === 'education'
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiBookOpen className="w-5 h-5" />
                  Education
                </motion.button>
              </div>

              {/* Content Area */}
              <div>
            <AnimatePresence mode="wait">
              {activeTab === 'experience' ? (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                {workExperience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.01 }}
                    className="card p-6 md:p-8 relative overflow-hidden group animate-neon-pulse"
                  >
                    {/* Decorative gradient */}
                    <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-accent-500" />

                    <div className="ml-4">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                            {job.title}
                          </h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-primary-600 dark:text-primary-400 font-medium">
                              {job.company}
                            </span>
                            {job.website && (
                              <a
                                href={job.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary-500 transition-colors"
                              >
                                <FiExternalLink className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                        </div>
                        <motion.span
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-mono rounded-full flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <FiCalendar className="w-4 h-4" />
                          {job.period}
                        </motion.span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <FiMapPin className="w-4 h-4" />
                        {job.location}
                      </div>

                      <ul className="space-y-3">
                        {job.highlights.map((highlight, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + i * 0.05 }}
                            className="flex items-start gap-3 text-gray-600 dark:text-gray-300 text-sm italic"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                            <span>{highlight}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="education"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                    className="card p-6 relative overflow-hidden group animate-neon-pulse"
                  >
                    {/* Decorative background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />

                    <div className="relative">
                      <motion.span
                        className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-mono rounded-full mb-4"
                        whileHover={{ scale: 1.05 }}
                      >
                        <FiCalendar className="w-4 h-4" />
                        {edu.period}
                      </motion.span>

                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>

                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                        {edu.institution}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        <span className="font-medium">Focus:</span> {edu.focus}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              )}
            </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
