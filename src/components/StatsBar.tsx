interface Stat {
  number: string
  label:  string
}

const STATS: Stat[] = [
  { number: '10+',  label: 'Years of Training'     },
  { number: '4',    label: 'Certified Courses'      },
  { number: '500+', label: 'Students Trained'       },
  { number: '90%',  label: 'Employment Rate'        },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-bar-grid">
          {STATS.map(({ number, label }) => (
            <div key={label} className="stat-item">
              <span className="stat-num">{number}</span>
              <div className="stat-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
