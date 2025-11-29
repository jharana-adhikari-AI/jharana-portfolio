import { motion } from 'framer-motion'

export default function BackgroundAnimation({ variant = 'default' }) {
  const variants = {
    // Neural network / AI pattern
    neural: (
      <>
        {/* Floating nodes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400/20 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <motion.line
            x1="20%" y1="30%" x2="50%" y2="50%"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          />
          <motion.line
            x1="80%" y1="30%" x2="50%" y2="50%"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-500"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          />
        </svg>
      </>
    ),

    // Data flow pattern
    data: (
      <>
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-b from-primary-400/30 to-transparent rounded-full"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: ['-100%', '200%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'linear',
            }}
          />
        ))}
      </>
    ),

    // Code brackets pattern
    code: (
      <>
        <motion.div
          className="absolute top-10 left-10 text-4xl font-mono text-primary-300/20 dark:text-primary-700/20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {'</>'}
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-10 text-4xl font-mono text-accent-300/20 dark:text-accent-700/20"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        >
          {'{ }'}
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-20 text-2xl font-mono text-primary-300/15 dark:text-primary-700/15"
          animate={{ opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          {'( )'}
        </motion.div>
      </>
    ),

    // Binary / Data pattern
    binary: (
      <>
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-xs font-mono text-primary-400/10 dark:text-primary-600/10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{ opacity: [0.05, 0.15, 0.05] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          >
            {i % 2 === 0 ? '01' : '10'}
          </motion.span>
        ))}
      </>
    ),

    // Default floating elements
    default: (
      <>
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-primary-200/20 to-accent-200/20 dark:from-primary-800/10 dark:to-accent-800/10 blur-2xl"
            style={{
              left: `${i * 25}%`,
              top: `${(i % 2) * 50 + 10}%`,
            }}
            animate={{
              x: [0, 20, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
            }}
          />
        ))}
      </>
    ),
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {variants[variant] || variants.default}
    </div>
  )
}
