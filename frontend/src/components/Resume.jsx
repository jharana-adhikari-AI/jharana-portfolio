import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiDownload,
  FiShare2,
  FiCopy,
  FiCheck,
  FiLinkedin,
  FiMail,
  FiEye,
  FiX,
} from 'react-icons/fi'

export default function Resume() {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/api/resume/share`
    : ''

  const resumeUrl = '/Jharana Resume.pdf'

  const handleCopyLink = async () => {
    try {
      const response = await fetch('/api/resume/share-link')
      const data = await response.json()
      await navigator.clipboard.writeText(data.shareUrl || shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      name: 'Email',
      icon: FiMail,
      href: `mailto:?subject=Check out Jharana Adhikari's Resume&body=I thought you might be interested in this portfolio: ${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-red-500 hover:text-white',
    },
  ]

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900">
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
              Resume
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              Download & Share
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get a copy of my resume or share it with others who might be interested.
            </p>
          </div>

          {/* Resume Card */}
          <div className="max-w-4xl mx-auto">
            <div className="card p-4 md:p-6">
              {/* Preview Card (shown when PDF viewer is closed) */}
              <AnimatePresence mode="wait">
                {!showPdfViewer ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 md:p-12 mb-6"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Avatar */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg">
                          <span className="text-3xl md:text-4xl font-bold text-white">JA</span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                          Jharana Adhikari
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-3">
                          Full Stack & AI Engineer
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          3+ years of experience in building scalable web applications and AI solutions.
                          Specialized in Python, React, FastAPI, and Machine Learning.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                            Python
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                            React
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                            AI/ML
                          </span>
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                            FastAPI
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pdf"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative"
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowPdfViewer(false)}
                      className="absolute top-2 right-2 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>

                    {/* PDF Viewer */}
                    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden mb-6">
                      <iframe
                        src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                        className="w-full h-full border-0"
                        title="Jharana Adhikari Resume"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* View Button */}
                <button
                  onClick={() => setShowPdfViewer(!showPdfViewer)}
                  className={`flex-1 justify-center ${showPdfViewer ? 'btn-secondary' : 'btn-primary'}`}
                >
                  {showPdfViewer ? (
                    <>
                      <FiX className="w-5 h-5 mr-2" />
                      Close Preview
                    </>
                  ) : (
                    <>
                      <FiEye className="w-5 h-5 mr-2" />
                      View Resume
                    </>
                  )}
                </button>

                {/* Download Button */}
                <a
                  href={resumeUrl}
                  download="Jharana_Adhikari_Resume.pdf"
                  className="flex-1 btn-secondary justify-center"
                >
                  <FiDownload className="w-5 h-5 mr-2" />
                  Download PDF
                </a>

                {/* Share Button */}
                <div className="relative flex-1">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="w-full btn-secondary justify-center"
                  >
                    <FiShare2 className="w-5 h-5 mr-2" />
                    Share
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-0 right-0 mb-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-10"
                    >
                      {/* Copy Link */}
                      <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors mb-2"
                      >
                        {copied ? (
                          <FiCheck className="w-5 h-5 text-green-500" />
                        ) : (
                          <FiCopy className="w-5 h-5 text-gray-500" />
                        )}
                        <span className="text-gray-700 dark:text-gray-300">
                          {copied ? 'Link Copied!' : 'Copy Share Link'}
                        </span>
                      </button>

                      <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
                        {shareLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${link.color}`}
                          >
                            <link.icon className="w-5 h-5" />
                            <span>{link.name}</span>
                          </a>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Info Text */}
              <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                Last updated: November 2025 • PDF format • 2 pages
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
