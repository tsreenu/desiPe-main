import { PageHeader } from '../components/Sections.jsx'

const timeline = [
  ['td-amber', '🏭', '2010', 'On the floor', 'Began on the factory floor — learning first-hand what work really looks like from the ground up.'],
  ['td-blue', '👷', '2016 – 2025', 'Production manager', 'Oversaw 500+ workers in manufacturing — and saw first-hand how hard compliance and wages are to get right, even when everyone means well.'],
  ['td-purple', '🧭', '2022 – 2025', 'Understanding the system', 'Spent years mapping India\u2019s labour systems end to end — learning exactly where compliance becomes slow, costly and confusing, and how to fix it.'],
  ['td-teal', '🚀', '2025', 'Founded Desipe Finance', 'Turned a decade of lived experience into a platform — starting with ShramStack and building upward.'],
]

const values = [
  ['var(--blue2)', '01', 'Start at work', 'Inclusion that skips the income problem is charity. We begin with verified work because that\u2019s where durable identity comes from.'],
  ['var(--teal2)', '02', 'Build for trust', 'We operate in compliance and money — domains where shortcuts cost people dearly. Regulated rails and correctness come first.'],
  ['var(--purple)', '03', 'Compound the worker', 'Every layer should make the worker better off than the last. The stack only works if it works for them first.'],
]

const company = [
  ['Headquarters', 'Hyderabad, Telangana, India'],
  ['Incubation', 'IIIT-Bangalore Innovation Centre'],
  ['Recognition', 'DPIIT · MeitY TIDE 2.0 · Startup India Seed Fund'],
  ['Founded', '2025'],
]

export default function About() {
  return (
    <div className="page">
      <PageHeader badge="About Desipe" title="This started on a" titleAccent="factory floor.">
        Desipe Finance is building the financial stack India's workforce has long needed — built by someone who lived the problem from the inside.
      </PageHeader>

      {/* Founder + timeline */}
      <section className="founder">
        <div className="section-tag reveal">The founder's path</div>
        <div className="section-title reveal">From the floor to the founding.</div>
        <p className="section-sub reveal">Desipe wasn't built in a lab. It was built by someone who started as a factory-floor worker, rose to manage hundreds, came to understand the system inside out — then built the infrastructure to make compliance simpler for everyone.</p>
        <div className="founder-grid">
          <div className="timeline reveal">
            <div className="timeline-line"></div>
            {timeline.map(([dot, emoji, year, title, text]) => (
              <div className="timeline-item" key={year}>
                <div className={`timeline-dot ${dot}`}>{emoji}</div>
                <div>
                  <div className="timeline-year">{year}</div>
                  <h4>{title}</h4>
                  <p className="timeline-text">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="founder-right reveal">
            <div className="founder-quote">
              <p>"Financial inclusion that skips the income problem is charity. We begin with verified work — because that's where real, durable identity comes from."</p>
              <cite>— Founder &amp; CEO, Desipe Finance</cite>
            </div>
            <div className="founder-mission">
              <h4>What we're building toward</h4>
              <div className="mission-item"><div className="mission-icon mi-amber">🎯</div><div className="mission-text"><strong>Identity first.</strong> Every worker earns a verified, portable income record they own.</div></div>
              <div className="mission-item"><div className="mission-icon mi-purple">📈</div><div className="mission-text"><strong>A compounding stack.</strong> Work funds savings, savings and skills fund growth, growth unlocks credit.</div></div>
              <div className="mission-item"><div className="mission-icon mi-teal">🤝</div><div className="mission-text"><strong>Built on trust.</strong> Regulated rails and correctness come first — always, in money and compliance.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="section-tag reveal">What we believe</div>
        <div className="section-title reveal">Principles, not slogans.</div>
        <div className="values-grid">
          {values.map(([lc, n, h, p]) => (
            <div className="vcard reveal" style={{ '--lc': lc }} key={n}>
              <div className="vn">{n}</div><h4>{h}</h4><p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Company */}
      <section className="company">
        <div className="section-tag reveal">The company</div>
        <div className="section-title reveal">Desipe Finance Private Limited.</div>
        <p className="section-sub reveal">A DPIIT-recognised startup, incubated at IIIT-Bangalore, backed by national innovation programmes.</p>
        <div className="company-strip reveal">
          {company.map(([label, detail]) => (
            <div className="cs-item" key={label}><div className="cs-label">{label}</div><div className="cs-detail">{detail}</div></div>
          ))}
        </div>
      </section>
    </div>
  )
}
