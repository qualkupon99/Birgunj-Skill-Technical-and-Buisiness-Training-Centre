import { useState, useEffect } from 'react'

interface NavLink {
  href: string
  label: string
}

const NAV_LINKS: NavLink[] = [
  { href: '#home',    label: 'Home'    },
  { href: '#courses', label: 'Courses' },
  { href: '#about',   label: 'About'   },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      {/* ── Top info bar ─────────────────────────── */}
      <div className="topbar">
        <div className="container topbar-inner">
          <span>📍 Radhemai-13, Birgunj (Nepal)</span>
          <span>Reg No: 330287/080/81 &nbsp;|&nbsp; PAN: 619777750</span>
          <div className="topbar-actions">
            <a href="tel:9823919293" className="topbar-phone">📞 9823919293</a>
            <a href="tel:9808266380" className="topbar-phone">📞 9808266380</a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ──────────────────────────── */}
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className="container nav-inner">

          {/* Logo */}
          <a href="#home" className="nav-logo" onClick={closeMenu}>
            <div className="logo-badge">BSTBTC</div>
            <div className="logo-text-wrapper">
              <span className="logo-main">Birgunj Skill Technical</span>
              <span className="logo-sub">&amp; Business Training Center</span>
            </div>
          </a>

          {/* Desktop links */}
          <ul className="nav-links-desktop">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="nav-link">{label}</a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="nav-actions">
            <a href="tel:9823919293" className="btn btn-primary nav-cta">
              📞 Call Us
            </a>
            <button
              id="hamburger-btn"
              className={`hamburger${isOpen ? ' hamburger-open' : ''}`}
              onClick={() => setIsOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`mobile-nav${isOpen ? ' mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className="mobile-nav-link" onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="tel:9823919293" className="btn btn-primary mobile-nav-cta">
                📞 9823919293
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
