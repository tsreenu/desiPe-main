import PhoneMockup from '../components/PhoneMockup.jsx'
import { PageHeader, CTABand } from '../components/Sections.jsx'

const shramFeatures = [
  ['01', 'Compliance score', 'A live, explainable score that tells employers exactly where they stand on statutory obligations.'],
  ['02', 'Automated wage runs', 'Correct wage computation, weekly-off and overtime rules, and EPF/ESI ready for filing.'],
  ['03', 'Statutory documents', 'Generate the registers, challans and filings the labour codes require — from one source of truth.'],
  ['04', 'Verified worker records', 'Every worker gets a clean identity and income history — the raw material for savings and credit.'],
]
const bachatFeatures = [
  ['01', 'Smart nudges', 'Behavioural prompts that turn everyday UPI activity into a steady savings rhythm.'],
  ['02', 'Round-ups', 'Spare change from each transaction quietly set aside — saving without sacrifice.'],
  ['03', 'Regulated rails', 'Built on compliant UPI / TPAP infrastructure, so trust and safety are foundational.'],
  ['04', 'Partner-ready', 'White-label B2B2C delivery lets partners bring micro-savings to their own users.'],
]

function FeatureGrid({ items }) {
  return (
    <div className="feat-grid reveal" style={{ marginTop: 54 }}>
      {items.map(([n, h, p]) => (
        <div className="feat" key={n}><div className="fnum">{n}</div><h5>{h}</h5><p>{p}</p></div>
      ))}
    </div>
  )
}

export default function Products() {
  return (
    <div className="page">
      <PageHeader badge="Products" title="The stack," titleAccent="layer by layer.">
        Two products in market today, two on the roadmap — all built on a single idea: verified work is the foundation everything else stands on.
      </PageHeader>

      {/* ShramStack */}
      <section className="pdive" style={{ '--lc': 'var(--blue2)' }}>
        <div className="pdive-grid">
          <div className="pd-side reveal">
            <div className="section-tag">L1 · Work</div>
            <h2>ShramStack <span className="stat-chip" style={{ background: 'rgba(20,184,166,0.14)', color: '#0d8a6e' }}>Live</span></h2>
            <div className="pd-one">Labour compliance SaaS</div>
            <p className="pd-desc">ShramStack is compliance software built by people who actually ran the floor. It takes the messiest, most paper-heavy parts of employing India's workforce — attendance, wages, EPF, ESI, statutory documents — and makes them clean, automated and audit-ready. In doing so, it creates the thing the rest of the stack depends on: a verified worker identity with a trustworthy income record.</p>
            <div className="pd-meta">
              <div className="row"><span className="k">For</span><span className="v">Contractors, employers &amp; their workers</span></div>
              <div className="row"><span className="k">Model</span><span className="v">B2B SaaS · subscription tiers</span></div>
              <div className="row"><span className="k">Status</span><span className="v">Live · scaling toward pilot deployments</span></div>
            </div>
          </div>
          <PhoneMockup variant="shramstack" />
        </div>
        <FeatureGrid items={shramFeatures} />
      </section>

      {/* Bharat Bachat */}
      <section className="pdive alt" style={{ '--lc': 'var(--teal2)' }}>
        <div className="pdive-grid">
          <PhoneMockup variant="bharatbachat" />
          <div className="pd-side reveal">
            <div className="section-tag">L2 · Save</div>
            <h2>Bharat Bachat <span className="stat-chip" style={{ background: 'rgba(217,119,6,0.14)', color: 'var(--amber)' }}>In pilot</span></h2>
            <div className="pd-one">UPI micro-savings nudge engine</div>
            <p className="pd-desc">Saving is hard when income is small and irregular. Bharat Bachat removes the friction entirely: it works on the UPI rails people already use, nudging tiny amounts into savings at the exact moment money moves. No new behaviour, no new app to master — just a quiet habit that compounds. It runs as a regulated TPAP / B2B2C service so partners can offer it under their own brand.</p>
            <div className="pd-meta">
              <div className="row"><span className="k">For</span><span className="v">Workers, gig earners &amp; B2B2C partners</span></div>
              <div className="row"><span className="k">Model</span><span className="v">TPAP / B2B2C on regulated UPI rails</span></div>
              <div className="row"><span className="k">Status</span><span className="v">CUG pilot in Hyderabad</span></div>
            </div>
          </div>
        </div>
        <FeatureGrid items={bachatFeatures} />
      </section>

      {/* Roadmap */}
      <section className="prods">
        <div className="section-tag reveal">On the roadmap</div>
        <div className="section-title reveal">The layers still to come.</div>
        <p className="section-sub reveal">Each is unlocked by the verified income data the live products generate — the reason Desipe is a platform, not two apps.</p>
        <div className="road">
          <div className="roadrow reveal" style={{ '--lc': 'var(--purple)' }}>
            <span className="rid">L3</span>
            <div><h4>BUSI Grow — Skills &amp; Marketplace</h4><div className="rd">A skill-development and jobs marketplace that helps verified workers upskill and find higher-paying, more stable work.</div></div>
            <span className="ry">2026</span>
          </div>
          <div className="roadrow reveal" style={{ '--lc': 'var(--amber)' }}>
            <span className="rid">L4</span>
            <div><h4>Desipe Credit</h4><div className="rd">Alternative lending underwritten on real income data — credit for workers no bureau has scored.</div></div>
            <span className="ry">2027</span>
          </div>
        </div>
      </section>

      <CTABand
        title="See where your business fits in the stack."
        sub="Book a walkthrough of ShramStack, or explore a Bharat Bachat partnership."
        cta="Request a demo"
      />
    </div>
  )
}
