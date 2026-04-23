import { useState, useEffect } from 'react'
import './App.css'

import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import StatsBar from './components/StatsBar'
import Courses  from './components/Courses'
import WhyUs    from './components/WhyUs'
import About    from './components/About'
import Gallery  from './components/Gallery'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Courses />
        <WhyUs />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Floating action buttons */}
      <div className="floating-actions">
        <a
          id="whatsapp-float-btn"
          href="https://wa.me/9779823919293"
          target="_blank"
          rel="noopener noreferrer"
          className="float-btn wa-btn"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          💬
        </a>
        <button
          id="scroll-top-btn"
          className={`float-btn top-btn${showTop ? ' show' : ''}`}
          onClick={scrollTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          ↑
        </button>
      </div>
    </>
  )
}
