import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript/TypeScript', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      { name: 'React', level: 92 },
      { name: 'FastAPI', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'Node.js', level: 88 },
      { name: 'Flask', level: 85 },
    ],
  },
  {
    name: 'AI/ML Tools',
    skills: [
      { name: 'TensorFlow', level: 88 },
      { name: 'PyTorch', level: 85 },
      { name: 'LangChain', level: 90 },
      { name: 'spaCy/NLTK', level: 88 },
      { name: 'Predictive Modeling', level: 85 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 88 },
      { name: 'Azure', level: 85 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 75 },
      { name: 'CI/CD', level: 88 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'Pinecone', level: 80 },
      { name: 'Redis', level: 78 },
    ],
  },
]

const techStack = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'FastAPI', 'Django',
  'Flask', 'PostgreSQL', 'MongoDB', 'AWS', 'Azure', 'Docker', 'Kubernetes',
  'TensorFlow', 'PyTorch', 'LangChain', 'spaCy', 'NLP', 'OCR', 'Tesseract',
  'Git', 'CI/CD', 'REST APIs', 'GraphQL', 'Microservices', 'Power BI',
]

function SkillBar({ skill, inView }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-950">
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
              Expertise
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit built over 3+ years of professional experience,
              spanning full-stack development, AI/ML engineering, and cloud platforms.
            </p>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium
                           text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/30
                           hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === index
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skill Bars */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8 space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Additional Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: '10+', label: 'Projects Completed' },
              { value: '500+', label: 'Clients Served' },
              { value: '3+', label: 'Years Experience' },
              { value: '25+', label: 'Technologies Mastered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-gray-50 dark:bg-gray-900"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
