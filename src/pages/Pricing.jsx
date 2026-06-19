import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../components/Sections.jsx'

/* NOTE: The amounts below are EXAMPLE values. Replace with your live ShramStack
   subscription rates before publishing / resubmitting to PayU. */
const plans = [
  {
    name: 'Starter',
    tagline: 'For small contractors getting compliant',
    amount: '₹999', unit: '/month',
    note: 'Billed monthly · excl. GST',
    featured: false,
    features: ['Up to 25 workers', 'Attendance & wage runs', 'EPF / ESI statutory documents', 'Worker portal access', 'Email support'],
    cta: 'Get started',
  },
  {
    name: 'Growth',
    tagline: 'For growing workforces and multiple sites',
    amount: '₹2,999', unit: '/month',
    note: 'Billed monthly · excl. GST',
    featured: true,
    features: ['Up to 200 workers', 'Everything in Starter', 'Compliance score & watchlist', 'Bulk Excel import', 'Priority support'],
    cta: 'Get started',
  },
  {
    name: 'Enterprise',
    tagline: 'For large employers and aggregators',
    amount: 'Custom', unit: '',
    note: 'Tailored to your scale',
    featured: false,
    features: ['Unlimited workers', 'Everything in Growth', 'Dedicated onboarding', 'API & integrations', 'Account manager'],
    cta: 'Talk to sales',
  },
]

export default function Pricing() {
  const navigate = useNavigate()
  return (
    <div className="page">
      <PageHeader badge="Pricing" title="Simple pricing for" titleAccent="real compliance.">
        ShramStack plans scale with your workforce. Start small, upgrade as you grow — no setup fees, cancel anytime.
      </PageHeader>

      <section className="pricing">
        <div className="pricing-grid">
          {plans.map((p) => (
            <div className={`price-card${p.featured ? ' featured' : ''}`} key={p.name}>
              <div className="price-name">{p.name}</div>
              <div className="price-tagline">{p.tagline}</div>
              <div className="price-amount">{p.amount}{p.unit && <span>{p.unit}</span>}</div>
              <div className="price-note">{p.note}</div>
              <ul className="price-list">
                {p.features.map((f) => (<li key={f}><span className="ck">✓</span>{f}</li>))}
              </ul>
              <button
                className={p.featured ? 'btn-primary price-btn' : 'btn-outline price-btn'}
                style={p.featured ? null : { color: 'var(--dark)', borderColor: '#CBD5E1' }}
                onClick={() => navigate('/contact')}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="price-gst">All prices are exclusive of applicable taxes (GST). See our <a href="/refund" style={{ color: 'var(--blue2)', fontWeight: 600 }}>Cancellation &amp; Refund Policy</a>.</p>
      </section>
    </div>
  )
}
