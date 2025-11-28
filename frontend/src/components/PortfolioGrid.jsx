import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const projects = [
  {
    id: 1,
    title: 'Insurance Document NLP API',
    category: 'AI/ML',
    description: 'Production-ready NLP microservice for document text extraction and classification. Combined OCR + Deep Learning to process 10,000+ documents with 40% faster inference and 98% text accuracy.',
    thumbnail: '/images/projects/nlp-api.jpg',
    githubUrl: 'https://github.com/jharana-adhikari-AI',
    tags: ['Python', 'FastAPI', 'Tesseract OCR', 'spaCy', 'NLTK', 'PostgreSQL'],
  },
  {
    id: 2,
    title: 'RAG Financial Chatbot',
    category: 'AI/ML',
    description: 'Retrieval-Augmented Generation pipeline to query financial statements. Uses semantic vector search and OCR to convert unstructured PDFs into searchable knowledge bases with >90% accuracy.',
    thumbnail: '/images/projects/rag-chatbot.jpg',
    githubUrl: 'https://github.com/jharana-adhikari-AI',
    tags: ['LangChain', 'GPT-2', 'OCR', 'Pinecone', 'FastAPI', 'PyTorch'],
  },
  {
    id: 3,
    title: 'Apple Stock LSTM Forecasting',
    category: 'AI/ML',
    description: 'LSTM-based time series models achieving <5% Mean Absolute Percentage Error (MAPE). Integrated predictions into an interactive visualization dashboard for investors.',
    thumbnail: '/images/projects/stock-forecast.jpg',
    githubUrl: 'https://github.com/jharana-adhikari-AI',
    tags: ['TensorFlow', 'Pandas', 'Matplotlib', 'NumPy', 'LSTM'],
  },
  {
    id: 4,
    title: 'Kijiji House Clustering',
    category: 'Data Science',
    description: 'Scraped and processed 80,000+ listings using Spark for large-scale clustering. Developed unsupervised learning models with K-Means and DBSCAN for real estate investment analysis.',
    thumbnail: '/images/projects/kijiji-cluster.jpg',
    githubUrl: 'https://github.com/jharana-adhikari-AI',
    tags: ['Spark', 'K-Means', 'DBSCAN', 'Power BI', 'Big Data'],
  },
  {
    id: 5,
    title: 'AI Energy Automation System',
    category: 'Full Stack',
    description: 'AI-based automation system integrating Zoho CRM and AWS that dynamically generates personalized energy reports for 500+ clients monthly, improving cost estimation accuracy by 43%.',
    thumbnail: '/images/projects/energy-automation.jpg',
    tags: ['FastAPI', 'React', 'AWS', 'Zoho API', 'PostgreSQL', 'AI'],
  },
  {
    id: 6,
    title: 'Mental Health AI Chatbot',
    category: 'AI/ML',
    description: 'NLP-powered mental health chatbot supporting 1,000+ simulated interactions for anxiety, depression, and PTSD. Published in STEM Fellowship with 87%+ classification accuracy.',
    thumbnail: '/images/projects/mental-health.jpg',
    githubUrl: 'https://github.com/jharana-adhikari-AI',
    tags: ['NLP', 'Sentiment Analysis', 'ANN', 'Python', 'Published Research'],
  },
]

const categories = ['All', 'AI/ML', 'Full Stack', 'Data Science']

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="portfolio" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              Portfolio
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my best work spanning AI/ML engineering, full-stack development,
              and data science solutions.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 shadow'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="card overflow-hidden group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary-500/30">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          aria-label="View live site"
                        >
                          <FiExternalLink className="w-6 h-6 text-white" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors"
                          aria-label="View source code"
                        >
                          <FiGithub className="w-6 h-6 text-white" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-500">
                          +{project.tags.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={itemVariants} className="text-center mt-12">
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
