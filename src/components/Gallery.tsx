interface GalleryItem {
  src:   string
  alt:   string
  label: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src:   '/images/gallery-welding.png',
    alt:   'Professional welding training with sparks flying',
    label: 'Professional Welding Training',
  },
  {
    src:   '/images/gallery-electrician.png',
    alt:   'Building electrician training on electrical panels',
    label: 'Electrician Training',
  },
  {
    src:   '/images/gallery-ac.png',
    alt:   'AC technician training on air conditioning unit',
    label: 'R & AC Technician Training',
  },
  {
    src:   '/images/gallery-motor.png',
    alt:   'Close-up of motor winding training with copper wire',
    label: 'Motor Winding Training',
  },
  {
    src:   '/images/gallery-classroom.png',
    alt:   'Students in vocational training classroom',
    label: 'Technical Classroom Sessions',
  },
  {
    src:   '/images/hero-bg.png',
    alt:   'Training center workshop facility',
    label: 'Our Workshop Facility',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Gallery</div>
          <h2 className="section-title">Life at BSTBTC</h2>
          <p className="section-subtitle">
            A glimpse into our workshops, classrooms, and the skilled hands we train every day.
          </p>
        </div>

        <div className="gallery-grid">
          {GALLERY_ITEMS.map(({ src, alt, label }) => (
            <div key={label} className="gallery-item">
              <img
                src={src}
                alt={alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-lbl">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
