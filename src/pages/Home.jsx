import { useNavigate } from 'react-router-dom'
import StackCard from '../components/StackCard.jsx'
import { CTABand } from '../components/Sections.jsx'

const stackLayers = [
  { lc: '#60A5FA', id: 'L1 · WORK', stat: 'Live', name: 'ShramStack', prod: 'Labour compliance, done right',
    desc: 'Attendance, wages, EPF, ESI and statutory documents for contractors and employers — turning every worker into a verified identity with a clean, auditable income record.' },
  { lc: 'var(--teal2)', id: 'L2 · SAVE', stat: 'In pilot', name: 'Bharat Bachat', prod: 'Saving, made automatic',
    desc: 'A UPI-native micro-savings engine that turns small, steady earnings into a habit — nudging a few rupees aside at the moment money moves, with no new app to learn.' },
  { lc: 'var(--purple2)', id: 'L3 · GROW', stat: '2026', name: 'BUSI Grow', prod: 'Skills & jobs marketplace',
    desc: 'A skill-development and work marketplace that helps verified workers upskill and find higher-paying, more stable jobs — feeding stronger income back into the stack.' },
  { lc: 'var(--amber2)', id: 'L4 · CREDIT', stat: '2027', name: 'Desipe Credit', prod: 'Credit, finally underwritten on truth',
    desc: 'Alternative credit, underwritten by the real, verified income data the layers below generate — reaching workers no bureau has ever scored.' },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circle c1"></div>
        <div className="hero-bg-circle c2"></div>
        <div className="hero-bg-circle c3"></div>
        <div className="hero-content">
          <div className="hero-badge"><span className="hero-badge-dot"></span>Desipe Finance — Platform for Bharat's workforce</div>
          <h1>Financial infrastructure,<br />built from the <span className="grad">work up.</span></h1>
          <p className="hero-sub">Most of India earns a living the formal system can't see — so it can't save for them, lend to them, or grow with them. Desipe starts where they start: at work. Verified labour becomes verified income, and verified income unlocks everything above it.</p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/products')}>See the platform <span className="arr">→</span></button>
            <button className="btn-outline" onClick={() => navigate('/about')}>Why we exist</button>
          </div>
          <div className="hero-stats">
            <div><div className="hero-stat-num g">4</div><div className="hero-stat-label">Layers, one stack</div></div>
            <div><div className="hero-stat-num g">2</div><div className="hero-stat-label">Products in market</div></div>
            <div><div className="hero-stat-num g">~90%</div><div className="hero-stat-label">Of India's workforce is informal</div></div>
            <div><div className="hero-stat-num g">1</div><div className="hero-stat-label">Verified-income engine</div></div>
          </div>
        </div>
        <StackCard />
      </section>

      {/* TRUST */}
      <div className="trust">
        <div className="trust-inner">
          <span className="tl">Backed &amp; recognised by</span>
          <span className="ti"><span className="d"></span>IIIT-Bangalore Innovation Centre</span>
          <span className="ti"><span className="d"></span>MeitY TIDE 2.0</span>
          <span className="ti"><span className="d"></span>Startup India Seed Fund</span>
          <span className="ti"><span className="d"></span>DPIIT Recognised</span>
        </div>
      </div>

      {/* THESIS */}
      <section className="thesis">
        <div className="section-tag reveal">The Desipe stack</div>
        <div className="section-title reveal">One thesis. Four layers. One direction: up.</div>
        <p className="section-sub reveal">Each layer is only possible because of the one beneath it. Work creates a verified identity and a clean income record. That record makes saving real, helps people earn more, and finally makes them lendable — on data India's credit system has never had.</p>
        <div className="layer-grid">
          {stackLayers.map((l) => (
            <div className="layer-card reveal" style={{ '--lc': l.lc }} key={l.id}>
              <div className="lc-top"><span className="lc-id">{l.id}</span><span className="lc-stat">{l.stat}</span></div>
              <h3>{l.name}</h3>
              <div className="lc-prod">{l.prod}</div>
              <p>{l.desc}</p>
            </div>
          ))}
          <div className="flow-note reveal">
            <span className="up">↑</span>
            <p><strong>Data flows upward.</strong> The same verified worker who clocks in on ShramStack becomes the saver in Bharat Bachat, the learner in BUSI Grow, and — in time — the borrower Desipe Credit can finally say yes to. The stack compounds with every layer.</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS TEASER */}
      <section className="prods">
        <div className="section-tag reveal">Live today</div>
        <div className="section-title reveal">Two products in the market. Two more on the way.</div>
        <p className="section-sub reveal">The foundation is already running. ShramStack is live with employers and contractors; Bharat Bachat is in pilot on regulated UPI rails.</p>
        <div className="prod-grid">
          <div className="prod-card reveal" style={{ '--lc': 'var(--blue2)' }}>
            <div className="pc-tag"><span className="pc-id">L1 · SHRAMSTACK</span><span className="pc-stat" style={{ background: 'rgba(20,184,166,0.14)', color: '#0d8a6e' }}>Live</span></div>
            <h3>ShramStack</h3>
            <div className="pc-one">Labour compliance SaaS for the real economy</div>
            <p>Built by people who ran factory floors. ShramStack handles attendance, wage runs, EPF/ESI and statutory paperwork so contractors and employers stay compliant — and every worker gets a verified record.</p>
            <ul className="pc-list">
              <li>Compliance score &amp; live watchlist</li>
              <li>Automated wage runs &amp; statutory filings</li>
              <li>Worker, contractor &amp; employer roles</li>
            </ul>
            <button className="pc-link" onClick={() => navigate('/products')}>Explore ShramStack <span className="arr">→</span></button>
          </div>
          <div className="prod-card reveal" style={{ '--lc': 'var(--teal2)' }}>
            <div className="pc-tag"><span className="pc-id">L2 · BHARAT BACHAT</span><span className="pc-stat" style={{ background: 'rgba(217,119,6,0.14)', color: 'var(--amber)' }}>In pilot</span></div>
            <h3>Bharat Bachat</h3>
            <div className="pc-one">UPI micro-savings for the next 400 million</div>
            <p>A nudge engine that helps workers save without thinking about it — small amounts set aside on regulated UPI/TPAP rails, building a savings habit one transaction at a time.</p>
            <ul className="pc-list">
              <li>Round-ups &amp; smart savings nudges</li>
              <li>Built on regulated UPI / TPAP infrastructure</li>
              <li>Savings instruments via licensed partners</li>
            </ul>
            <button className="pc-link" onClick={() => navigate('/products')}>Explore Bharat Bachat <span className="arr">→</span></button>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact">
        <div className="section-tag reveal">Why this matters</div>
        <div className="section-title reveal">We don't theorise about informal work. We came from it.</div>
        <p className="section-sub reveal">Desipe was founded by a former factory-floor worker turned production manager turned labour-rights advocate. The mission isn't a market thesis — it's lived.</p>
        <div className="impact-grid">
          <div className="impact-card reveal"><div className="impact-num">~90%</div><div className="impact-label">of India's workforce is informal — largely invisible to formal finance</div></div>
          <div className="impact-card reveal"><div className="impact-num teal">500+</div><div className="impact-label">workers our founder managed on the floor before building the fix</div></div>
          <div className="impact-card reveal"><div className="impact-num amber">64</div><div className="impact-label">RTIs filed in a multi-year push for worker rights and transparency</div></div>
          <div className="impact-card reveal"><div className="impact-num">4</div><div className="impact-label">layers of a single stack — from a day's work to credit</div></div>
        </div>
      </section>

      <CTABand
        title="Whether you employ workers or back the people fixing this — let's talk."
        sub="Enterprises, contractors, investors and ecosystem partners: there's a layer of the stack with your name on it."
        cta="Start a conversation"
      />
    </main>
  )
}
