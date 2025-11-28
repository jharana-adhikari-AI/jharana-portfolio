import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiBookOpen, FiCode, FiBriefcase } from 'react-icons/fi'

const timeline = [
  {
    year: '2025',
    title: 'Associate Software Developer',
    company: 'Canadian Eco Home Group',
    description: 'Engineering AI-based automation systems integrating Zoho CRM and AWS for 500+ clients monthly.',
  },
  {
    year: '2024',
    title: 'PG Certificate - AI & Machine Learning',
    company: 'Lambton College, Toronto',
    description: 'Advanced studies in AI/ML, NLP, and deep learning applications.',
  },
  {
    year: '2022-2024',
    title: 'Full Stack Developer',
    company: 'Xdezo Technology',
    description: 'Designed SaaS platforms using FastAPI, Django, React achieving 99.9% uptime.',
  },
  {
    year: '2022',
    title: 'BSc - Computer System Engineering',
    company: 'University of Sunderland',
    description: 'Focus on Software Engineering, Algorithms, AI, and Data Analysis.',
  },
  {
    year: '2021',
    title: 'SEO Analyst',
    company: 'Ombryo Lab',
    description: 'Applied data mining and regression analysis to optimize digital campaigns.',
  },
]

const badges = [
  { icon: FiAward, label: 'STEM Finalist', description: 'Top 17 from 500+ entries' },
  { icon: FiBookOpen, label: 'AI/ML Certified', description: 'Lambton College' },
  { icon: FiCode, label: 'Kaggle Runner-Up', description: '89% Model Accuracy' },
  { icon: FiBriefcase, label: '3+ Years', description: 'Professional Experience' },
]

export default function Bio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="bio" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              My Story & Journey
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Profile Photo */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <div className="aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full blur-2xl opacity-20" />
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
                    variants={itemVariants}
                    className="card p-4 text-center hover:shadow-xl transition-shadow"
                    whileHover={{ y: -5 }}
                  >
                    <badge.icon className="w-8 h-8 mx-auto mb-2 text-primary-500" />
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

            {/* Right Column - Bio & Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Bio Text */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a Full Stack & AI Engineer with 3+ years of experience in developing
                  scalable web and AI solutions. My expertise spans Python, React, FastAPI,
                  Django, and PostgreSQL, with a strong background in AI/ML model integration
                  and cloud platforms like AWS and Azure.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently based in Toronto, I specialize in building data-driven systems
                  that enhance decision-making and automation. From engineering AI-based
                  automation systems for energy companies to developing NLP microservices
                  processing 10,000+ documents, I'm passionate about solving complex problems
                  with elegant solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a published researcher in AI mental health applications and a Kaggle
                  competition runner-up. I believe in continuous learning, clean code, and
                  building technology that makes a real impact on people's lives.
                </p>
              </div>

              {/* Timeline */}
              <div className="relative mt-12">
                <h3 className="heading-3 text-gray-900 dark:text-white mb-6">
                  Career Timeline
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0"
                    >
                      <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900" />
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-mono rounded-full mb-2">
                        {item.year}
                      </span>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">
                        {item.company}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
