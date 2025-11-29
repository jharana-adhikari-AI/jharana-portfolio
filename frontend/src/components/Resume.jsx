import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FiDownload,
  FiEye,
  FiX,
  FiExternalLink,
  FiFileText,
  FiShare2,
  FiCopy,
  FiCheck,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

export default function Resume() {
  const [showPdfViewer, setShowPdfViewer] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const resumeUrl = '/Jharana_Resume.pdf'
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}/api/resume/share`
    : ''

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy')
    }
  }

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Email',
      icon: FiMail,
      href: `mailto:?subject=Check out Jharana Adhikari's Resume&body=I thought you might be interested: ${encodeURIComponent(shareUrl)}`,
    },
  ]

  return (
    <section id="resume" className="section-padding bg-gradient-to-b from-primary-100/60 to-primary-200/40 dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-950 relative overflow-hidden">
      {/* Light mode decorative background */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-primary-100 to-accent-50 rounded-full blur-3xl opacity-50 -translate-x-1/3" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent-100 to-primary-50 rounded-full blur-3xl opacity-40 translate-y-1/3" />
      </div>

      {/* Dark mode decorative background */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      {/* Animated Background Elements - Floating Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top row */}
        <motion.div
          className="absolute top-[8%] left-[5%] w-2 h-2 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[12%] left-[15%] w-3 h-3 bg-accent-500/35 dark:bg-accent-400/20 rounded-full"
          animate={{ y: [0, 8, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[6%] left-[28%] w-2 h-2 bg-primary-500/30 dark:bg-primary-400/20 rounded-full"
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-[10%] right-[35%] w-2 h-2 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
        />
        <motion.div
          className="absolute top-[8%] right-[20%] w-3 h-3 bg-accent-500/30 dark:bg-accent-400/18 rounded-full"
          animate={{ y: [0, -8, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.div
          className="absolute top-[14%] right-[8%] w-2 h-2 bg-primary-500/35 dark:bg-primary-400/22 rounded-full"
          animate={{ y: [0, 12, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
        />

        {/* Middle row */}
        <motion.div
          className="absolute top-[35%] left-[3%] w-2 h-2 bg-accent-500/35 dark:bg-accent-400/22 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-[42%] left-[18%] w-3 h-3 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-[40%] right-[15%] w-3 h-3 bg-accent-500/35 dark:bg-accent-400/20 rounded-full"
          animate={{ y: [0, -12, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 1.3 }}
        />
        <motion.div
          className="absolute top-[48%] right-[5%] w-2 h-2 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, 8, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: 0.7 }}
        />

        {/* Bottom row */}
        <motion.div
          className="absolute top-[65%] left-[6%] w-3 h-3 bg-primary-500/35 dark:bg-primary-400/22 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: 1.1 }}
        />
        <motion.div
          className="absolute top-[72%] left-[20%] w-2 h-2 bg-accent-500/40 dark:bg-accent-400/25 rounded-full"
          animate={{ y: [0, 10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-[75%] right-[18%] w-2 h-2 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, -10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-[78%] right-[6%] w-2 h-2 bg-accent-500/30 dark:bg-accent-400/18 rounded-full"
          animate={{ y: [0, 8, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5.2, repeat: Infinity, delay: 1 }}
        />

        {/* Extra scattered */}
        <motion.div
          className="absolute top-[88%] left-[12%] w-2 h-2 bg-primary-500/35 dark:bg-primary-400/22 rounded-full"
          animate={{ y: [0, -6, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 4.2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.div
          className="absolute top-[85%] left-[45%] w-3 h-3 bg-accent-500/35 dark:bg-accent-400/20 rounded-full"
          animate={{ y: [0, 10, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.2 }}
        />
        <motion.div
          className="absolute top-[90%] right-[25%] w-2 h-2 bg-primary-500/40 dark:bg-primary-400/25 rounded-full"
          animate={{ y: [0, -8, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 4.8, repeat: Infinity, delay: 0.3 }}
        />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary-600 dark:text-primary-400 font-mono text-sm tracking-wider uppercase">
              Resume
            </span>
            <h2 className="heading-2 mt-2 text-gray-900 dark:text-white">
              My Resume
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl mx-auto text-sm italic">
              View or download my resume to learn more about my experience and qualifications.
            </p>
          </div>

          {/* Resume Card - Clean & Minimal */}
          <motion.div
            className="max-w-2xl mx-auto"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="card p-6 md:p-8 bg-transparent dark:bg-transparent">
              <AnimatePresence mode="wait">
                {!showPdfViewer ? (
                  <motion.div
                    key="preview"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8"
                  >
                    {/* Simple Icon */}
                    <motion.div
                      className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.05, rotate: 3 }}
                    >
                      <FiFileText className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Jharana Adhikari
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 text-sm mb-2">
                      Full Stack Software Developer & AI Engineer
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-md mx-auto">
                      3+ years of experience in building scalable softwares, web applications and AI solutions.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
                      <motion.button
                        onClick={() => setShowPdfViewer(true)}
                        className="btn-primary flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiEye className="w-5 h-5 mr-2" />
                        View
                      </motion.button>

                      <motion.a
                        href={resumeUrl}
                        download="Jharana_Adhikari_Resume.pdf"
                        className="flex-1 justify-center inline-flex items-center px-6 py-3 rounded-xl font-medium bg-transparent dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-purple-800 dark:border-purple-500 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FiDownload className="w-5 h-5 mr-2" />
                        Download
                      </motion.a>

                      <div className="relative flex-1">
                        <motion.button
                          onClick={() => setShowShareMenu(!showShareMenu)}
                          className="w-full justify-center inline-flex items-center px-6 py-3 rounded-xl font-medium bg-transparent dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border border-purple-800 dark:border-purple-500 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <FiShare2 className="w-5 h-5 mr-2" />
                          Share
                        </motion.button>

                        {/* Share Menu */}
                        <AnimatePresence>
                          {showShareMenu && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute bottom-full left-0 right-0 mb-2 p-3 bg-transparent dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-20"
                            >
                              <button
                                onClick={handleCopyLink}
                                className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                              >
                                {copied ? (
                                  <FiCheck className="w-4 h-4 text-green-500" />
                                ) : (
                                  <FiCopy className="w-4 h-4 text-gray-500" />
                                )}
                                <span className="text-gray-700 dark:text-gray-300">
                                  {copied ? 'Copied!' : 'Copy Link'}
                                </span>
                              </button>
                              <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                                {shareLinks.map((link) => (
                                  <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300"
                                  >
                                    <link.icon className="w-4 h-4" />
                                    <span>{link.name}</span>
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Info */}
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                      PDF • 2 pages • Updated November 2025
                    </p>
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
                      className="absolute -top-2 -right-2 z-10 p-2 bg-transparent dark:bg-gray-800 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiX className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                    </button>

                    {/* PDF Viewer */}
                    <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] bg-transparent dark:bg-gray-800 rounded-lg overflow-hidden">
                      {isMobile ? (
                        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                          <FiExternalLink className="w-12 h-12 text-primary-500 mb-4" />
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                            Open Resume
                          </h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
                            For better viewing on mobile, open in a new tab.
                          </p>
                          <a
                            href={resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                          >
                            Open PDF
                          </a>
                        </div>
                      ) : (
                        <iframe
                          src={`${resumeUrl}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
                          className="w-full h-full border-0"
                          title="Jharana Adhikari Resume"
                        />
                      )}
                    </div>

                    {/* Close text link */}
                    <button
                      onClick={() => setShowPdfViewer(false)}
                      className="mt-4 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors mx-auto block"
                    >
                      ← Back to overview
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
