import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Bio from './components/Bio'
import Skills from './components/Skills'
import PortfolioGrid from './components/PortfolioGrid'
import Achievements from './components/Achievements'
import Testimonials from './components/Testimonials'
import Resume from './components/Resume'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setShowNavbar(scrollPosition > heroHeight * 0.8)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar visible={showNavbar} />

      <main>
        <Hero />
        <Bio />
        <Skills />
        <PortfolioGrid />
        <Achievements />
        <Testimonials />
        <Resume />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
