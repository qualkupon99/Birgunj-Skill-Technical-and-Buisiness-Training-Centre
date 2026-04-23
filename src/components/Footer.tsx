const QUICK_LINKS = [
  { href: '#home',    label: 'Home'        },
  { href: '#courses', label: 'Courses'     },
  { href: '#about',   label: 'About Us'    },
  { href: '#gallery', label: 'Gallery'     },
  { href: '#contact', label: 'Contact'     },
]

const COURSE_LINKS = [
  { href: '#courses', label: 'R & AC Technician'       },
  { href: '#courses', label: 'Building Electrician'    },
  { href: '#courses', label: 'Motor Winding'           },
  { href: '#courses', label: 'Professional Welding'    },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <span className="footer-logo-badge">BSTBTC</span>
                <span className="footer-logo-name">
                  Birgunj Skill Technical<br />&amp; Business Training Center
                </span>
              </div>
              <p className="footer-tagline">
                "The Pathway Towards Skill, Employment &amp; Success."<br />
                Providing government-certified vocational training since 2013
                at Radhemai-13, Birgunj, Nepal.
              </p>
              <div className="footer-socials">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a
                  href="https://wa.me/9779823919293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
                <a
                  href="tel:9823919293"
                  className="footer-social"
                  aria-label="Call us"
                >
                  📞
                </a>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav" aria-label="Footer quick links">
                {QUICK_LINKS.map(({ href, label }) => (
                  <a key={label} href={href}>{label}</a>
                ))}
              </nav>
            </div>

            {/* Courses */}
            <div>
              <h4 className="footer-heading">Our Courses</h4>
              <nav className="footer-nav" aria-label="Footer course links">
                {COURSE_LINKS.map(({ href, label }) => (
                  <a key={label} href={href}>{label}</a>
                ))}
              </nav>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-contact-row">
                <span>📍</span>
                <span>Radhemai-13, Birgunj, Madhesh Pradesh, Nepal</span>
              </div>
              <div className="footer-contact-row">
                <span>📞</span>
                <div>
                  <a href="tel:9823919293">9823919293</a>
                  <br />
                  <a href="tel:9808266380">9808266380</a>
                </div>
              </div>
              <div className="footer-contact-row">
                <span>💬</span>
                <a
                  href="https://wa.me/9779823919293"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="footer-contact-row">
                <span>🕐</span>
                <span>Sun – Fri: 8:00 AM – 5:00 PM</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span className="footer-copy">
            © {year} Birgunj Skill Technical &amp; Business Training Center. All rights reserved.
          </span>
          <span className="footer-reg">
            Reg: 330287/080/81 &nbsp;|&nbsp; PAN: 619777750
          </span>
        </div>
      </div>
    </footer>
  )
}
