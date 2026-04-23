import { useState, type FormEvent } from 'react'

interface FormState {
  name:    string
  phone:   string
  email:   string
  course:  string
  message: string
}

const INITIAL_FORM: FormState = {
  name:    '',
  phone:   '',
  email:   '',
  course:  '',
  message: '',
}

const COURSES = [
  'R & AC Technician Training',
  'Building Electrician Training',
  'Motor Winding Training',
  'Professional Welder Training',
  'Other / Not Sure',
]

// WhatsApp number (Nepal country code 977)
const WA_NUMBER = '9779808266380'

export default function Contact() {
  const [form,       setForm]       = useState<FormState>(INITIAL_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [submitted,  setSubmitted]  = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    // Build a formatted WhatsApp message from the form data
    const lines = [
      '📋 *New Inquiry — BSTBTC Website*',
      '──────────────────────',
      `👤 *Name:*    ${form.name}`,
      `📞 *Phone:*   ${form.phone}`,
      form.email ? `📧 *Email:*   ${form.email}` : null,
      `📚 *Course:*  ${form.course}`,
      form.message ? `💬 *Message:*\n${form.message}` : null,
      '──────────────────────',
      '_Sent from bstbtc.com.np_',
    ]
      .filter(Boolean)            // remove null lines (empty optional fields)
      .join('\n')

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(lines)}`

    // Short delay so the user sees the "Sending" state, then redirect
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setForm(INITIAL_FORM)
      window.open(waUrl, '_blank', 'noopener,noreferrer')
    }, 800)
  }


  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Get in Touch</div>
          <h2 className="section-title">Contact &amp; Admission</h2>
          <p className="section-subtitle">
            Ready to start your training? Reach out to us or fill in the form
            and we'll get back to you promptly.
          </p>
        </div>

        <div className="contact-grid">

          {/* ── Left: info cards ─────────────────── */}
          <div>
            <div className="contact-info-cards">
              <div className="contact-card">
                <div className="contact-icon-box" aria-hidden="true">📍</div>
                <div>
                  <div className="contact-card-label">Address</div>
                  <div className="contact-card-value">
                    Radhemai-13, Birgunj<br />Madhesh Pradesh, Nepal
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box" aria-hidden="true">📞</div>
                <div>
                  <div className="contact-card-label">Phone Numbers</div>
                  <div className="contact-card-value">
                    <a href="tel:9823919293">9823919293</a>
                    &nbsp;/&nbsp;
                    <a href="tel:9808266380">9808266380</a>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box" aria-hidden="true">💬</div>
                <div>
                  <div className="contact-card-label">WhatsApp</div>
                  <div className="contact-card-value">
                    <a
                      href="https://wa.me/9779823919293"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon-box" aria-hidden="true">🕐</div>
                <div>
                  <div className="contact-card-label">Office Hours</div>
                  <div className="contact-card-value">
                    Sun – Fri: 8:00 AM – 5:00 PM
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="contact-map-placeholder">
              <span className="map-pin-icon">🗺️</span>
              <span>Radhemai-13, Birgunj, Nepal</span>
              <a
                href="https://www.google.com/maps/search/Birgunj+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
                style={{ marginTop: '8px', padding: '8px 18px', fontSize: '13px' }}
              >
                View on Google Maps
              </a>
            </div>
          </div>

          {/* ── Right: inquiry form ───────────────── */}
          <div className="contact-form-box">
            <h3 className="form-title">Send an Inquiry</h3>
            <p className="form-subtitle">
              Fill in the form below and our team will contact you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-grid-2">
                {/* Name */}
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">
                    Full Name <span className="required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone */}
                <div className="form-group">
                  <label htmlFor="contact-phone" className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="98XXXXXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Course */}
                <div className="form-group">
                  <label htmlFor="contact-course" className="form-label">
                    Course of Interest <span className="required">*</span>
                  </label>
                  <select
                    id="contact-course"
                    name="course"
                    className="form-select"
                    value={form.course}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select a course</option>
                    {COURSES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="form-group form-group-full">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    className="form-textarea"
                    placeholder="Any questions or additional details…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                id="contact-submit-btn"
                className="form-submit-btn"
                disabled={submitting}
              >
                {submitting ? '⏳ Opening WhatsApp…' : '💬 Send via WhatsApp'}
              </button>

              {submitted && (
                <div className="form-success-msg" role="status">
                  ✅ WhatsApp opened! Your inquiry is ready to send — just press Send in WhatsApp.
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
