import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

const skillCategories = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'JavaScript / TypeScript', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'Java', level: 75 },
      { name: 'C', level: 70 },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'React (UI Library)', level: 92 },
      { name: 'Node.js', level: 88 },
      { name: 'FastAPI', level: 95 },
      { name: 'Django', level: 90 },
      { name: 'Flask', level: 85 },
    ],
  },
  {
    name: 'AI / ML Tools',
    skills: [
      { name: 'TensorFlow', level: 88 },
      { name: 'PyTorch', level: 85 },
      { name: 'LangChain', level: 90 },
      { name: 'spaCy', level: 88 },
      { name: 'NLP', level: 90 },
      { name: 'OCR (Tesseract)', level: 85 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 92 },
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 88 },
      { name: 'Oracle', level: 75 },
      { name: 'Pinecone', level: 78 },
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
    name: 'Other Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'REST APIs', level: 95 },
      { name: 'GraphQL', level: 80 },
      { name: 'Microservices', level: 88 },
      { name: 'Power BI', level: 78 },
    ],
  },
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
    <section id="skills" className="section-padding bg-gradient-to-b from-accent-100/50 to-accent-200/40 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        {/* Gradient mesh background */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-primary-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-bl from-accent-100 to-accent-50 rounded-full blur-3xl opacity-50 translate-x-1/3" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-primary-50 to-accent-50 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-primary-100 to-transparent rounded-full blur-2xl opacity-30" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Expertise
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic">
              A versatile toolkit crafted over 3+ years, combining full-stack development, AI/ML engineering, and cloud expertise to deliver intelligent, production-ready solutions.
            </p>
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
                    : 'bg-purple-50 dark:bg-purple-900/20 text-purple-800 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 border border-purple-800 dark:border-purple-500/30 shadow-[0_0_10px_rgba(88,28,135,0.4)] dark:shadow-[0_0_10px_rgba(147,51,234,0.3)]'
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
            <motion.div
              className="card p-8 space-y-6 animate-neon-pulse"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} inView={inView} />
              ))}
            </motion.div>
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
                className="card text-center p-6 animate-neon-pulse"
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
