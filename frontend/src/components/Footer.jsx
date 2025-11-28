import { FiGithub, FiLinkedin, FiHeart, FiMail, FiPhone } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/jharana-adhikari-AI', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/jharana-adhikari/', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:jharanaadk@gmail.com', label: 'Email' },
  { icon: FiPhone, href: 'tel:+14376031674', label: 'Phone' },
]

const footerLinks = [
  { name: 'Bio', href: '#bio' },
  { name: 'Skills', href: '#skills' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-block font-display font-bold text-2xl mb-4">
              JA<span className="text-primary-500">.</span>
            </a>
            <p className="text-gray-400 text-sm max-w-xs">
              Full Stack & AI Engineer building scalable web and AI solutions
              with expertise in Python, React, FastAPI, and Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center
                             text-gray-400 hover:bg-primary-600 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Toronto, ON, Canada
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Jharana Adhikari. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Made with <FiHeart className="w-4 h-4 text-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
