import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiDownload,
  FiShare2,
  FiCopy,
  FiCheck,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

export default function Resume() {
  const [copied, setCopied] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/api/resume/share`
    : ''

  const resumeUrl = '/resume.pdf'

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
          <div className="max-w-2xl mx-auto">
            <div className="card p-8 md:p-12">
              {/* Resume Preview */}
              <div className="relative aspect-[8.5/11] bg-white dark:bg-gray-800 rounded-lg shadow-inner mb-8 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">JA</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      Jharana Adhikari
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Full Stack & AI Engineer
                    </p>
                    <div className="mt-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                      <p>Python • React • FastAPI • Django</p>
                      <p>AI/ML • NLP • Cloud (AWS/Azure)</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 via-transparent to-transparent" />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download Button */}
                <a
                  href={resumeUrl}
                  download="YourName_Resume.pdf"
                  className="flex-1 btn-primary justify-center"
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
                    Share Resume
                  </button>

                  {/* Share Menu */}
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-full left-0 right-0 mb-2 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700"
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
                Last updated: November 2025 • PDF format • 1 page
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
