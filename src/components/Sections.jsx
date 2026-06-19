import { useNavigate } from 'react-router-dom'

export function PageHeader({ badge, title, titleAccent, children }) {
  return (
    <section className="phead">
      <div className="phead-circle a"></div>
      <div className="phead-circle b"></div>
      <div className="phead-in">
        <div className="hero-badge"><span className="hero-badge-dot"></span>{badge}</div>
        <h1>{title} {titleAccent && <span className="grad">{titleAccent}</span>}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

export function CTABand({ title, sub, cta }) {
  const navigate = useNavigate()
  return (
    <section className="ctaband">
      <div className="ctaband-in">
        <h2>{title}</h2>
        <p>{sub}</p>
        <button className="btn-primary" onClick={() => navigate('/contact')}>
          {cta} <span className="arr">→</span>
        </button>
      </div>
    </section>
  )
}
