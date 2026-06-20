import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PageHeader } from '../components/Sections.jsx'

const inr = (n) => '₹' + n.toLocaleString('en-IN')

const CONTRACTOR_PLANS = [
  { name: 'Solo', free: true, cap: 'Up to 5 workers', blurb: 'For small crews getting started. Free, forever.', cta: 'Get started', ctaType: 'outline',
    features: ['Worker digital identity & ShramStack ID', 'Digital payslip access', 'Attendance & muster roll', 'ESIC / EPF status visibility', 'Grievance filing'] },
  { name: 'Foundation', cap: 'Up to 20 workers', mrp: 1499, monthly: 999, annualMo: 799, annualYr: 9588, blurb: 'Full statutory compliance for a growing workforce.', cta: 'Start 30-day free trial', ctaType: 'primary',
    features: ['Everything in Solo', 'Automated wage runs (PF / ESI / OT)', 'ESIC + EPF challans', 'Statutory registers & Form XVII payslips', 'Bilingual appointment letters', 'Single site'] },
  { name: 'Professional', cap: 'Up to 50 workers', featured: true, mrp: 3749, monthly: 2499, annualMo: 1999, annualYr: 23988, blurb: 'Scale across sites with AI-assisted compliance.', cta: 'Start 30-day free trial', ctaType: 'primary',
    features: ['Everything in Foundation', 'AI document engine — Excel → statutory docs (rolling out)', 'Multi-site workforce', 'Compliance alerts & reminders', 'Priority support'] },
  { name: 'Enterprise', cap: '50+ workers', custom: true, blurb: 'Volume pricing and dedicated support.', cta: 'Talk to us', ctaType: 'outline',
    features: ['Everything in Professional', 'Dedicated success manager', 'API access & integrations', 'Custom SLA', 'Multi-entity'] },
]

const EMPLOYER_PLANS = [
  { name: 'Business', cap: 'Up to 20 employees', mrp: 3749, monthly: 2499, annualMo: 1999, annualYr: 23988, blurb: 'An HRMS that also keeps your contractors compliant.', cta: 'Start 45-day free trial', ctaType: 'primary',
    features: ['Full HRMS — attendance, leave, payroll, self-service', 'Statutory PF / ESI / PT / TDS', 'Contractor compliance score', 'Contractor watchlist (up to 5)', 'Contractor directory'] },
  { name: 'Business Pro', cap: 'Up to 50 employees', featured: true, mrp: 5999, monthly: 3999, annualMo: 3199, annualYr: 38388, blurb: 'Full oversight and your principal-employer liability shield.', cta: 'Start 45-day free trial', ctaType: 'primary',
    features: ['Everything in Business', 'Unlimited contractor monitoring', 'Real-time liability alerts', 'AI compliance reports (rolling out)', 'Multi-department', 'Priority support'] },
  { name: 'Enterprise', cap: '50+ employees', custom: true, blurb: 'Multi-entity scale with a dedicated team.', cta: 'Talk to us', ctaType: 'outline',
    features: ['Everything in Business Pro', 'Multi-entity & multi-location', 'Dedicated success manager', 'API access', 'Custom SLA'] },
]

const FAQS = [
  ['Is GST included in these prices?', 'No. All prices are exclusive of GST. 18% GST is applicable and added at checkout.'],
  ['Do I need a credit card to start the free trial?', 'No card required. Start your trial, run a real wage run or compliance report, and only choose a plan if it works for you.'],
  ['What counts toward my worker / employee count?', 'The number of active workers (contractors) or employees (employers) in a billing month. Workers always access ShramStack free.'],
  ['What happens when my trial ends?', "Pick a plan to continue. If you don't, your account moves to read-only — your data is preserved, never deleted."],
  ['Can I cancel anytime?', 'Yes. Monthly plans can be cancelled anytime and you keep access until the cycle ends. Annual plans are refundable within 7 days of purchase.'],
  ['Is my data secure?', 'Yes. Data is encrypted and hosted in India (AWS Mumbai), aligned with the Digital Personal Data Protection Act, 2023.'],
  ['I have more than 50 workers / employees. What do I do?', 'Choose Enterprise and talk to us for volume pricing built around your scale.'],
]

export default function Pricing() {
  const navigate = useNavigate()
  const [persona, setPersona] = useState('contractor')
  const [billing, setBilling] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(0)
  const plans = persona === 'contractor' ? CONTRACTOR_PLANS : EMPLOYER_PLANS

  return (
    <div className="page">
      <PageHeader badge="ShramStack Pricing" title="Simple pricing for" titleAccent="real compliance.">
        ShramStack plans scale with your workforce — predictable, flat pricing with no per-head metering. Built for ESIC + EPF reality, not generic office HR. Workers always free.
      </PageHeader>

      <section className="pricing">
        <div className="founding-banner">★ Founding Partner pricing — flat 33% off, for a limited launch period. <span style={{ opacity: 0.75 }}>(offer ends 31 December 2026)</span></div>

        <div className="toggles">
          <div className="persona-toggle">
            <button className={persona === 'contractor' ? 'active' : ''} onClick={() => setPersona('contractor')}>For Contractors</button>
            <button className={persona === 'employer' ? 'active' : ''} onClick={() => setPersona('employer')}>For Employers</button>
          </div>
          <div className="billing-toggle">
            <button className={billing === 'monthly' ? 'active' : ''} onClick={() => setBilling('monthly')}>Monthly</button>
            <button className={billing === 'annual' ? 'active' : ''} onClick={() => setBilling('annual')}>Annual <span className="save-pill">Save 20%</span></button>
          </div>
        </div>

        <div className="price-grid">
          {plans.map((p) => (
            <div key={p.name} className={`price-card${p.featured ? ' featured' : ''}`}>
              {p.featured && <div className="price-badge">Most popular</div>}
              <div className="price-name">{p.name}</div>
              <div className="price-cap">{p.cap}</div>
              <div className="price-amount-wrap">
                {p.free ? (
                  <div className="price-amount">Free</div>
                ) : p.custom ? (
                  <div className="price-amount">Custom</div>
                ) : (
                  <>
                    <span className="price-strike">{inr(p.mrp)}</span>
                    <div><span className="price-amount">{inr(billing === 'monthly' ? p.monthly : p.annualMo)}</span><span className="price-period">/mo</span></div>
                    {billing === 'annual' && <div className="price-sub">{inr(p.annualYr)} billed yearly</div>}
                    <div className="price-gst">+ 18% GST</div>
                  </>
                )}
              </div>
              <p className="price-blurb">{p.blurb}</p>
              <button className={`${p.ctaType === 'primary' ? 'btn-primary' : 'btn-outline-dark'} price-cta`} onClick={() => navigate('/contact')}>{p.cta}</button>
              <ul className="price-feats">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            </div>
          ))}
        </div>

        <p className="trial-note">{persona === 'contractor' ? '30-day' : '45-day'} free trial · no credit card required · cancel anytime.</p>

        <div className="free-callout">
          <div className="fc-emoji">👷</div>
          <div>
            <h4>Workers always use ShramStack free.</h4>
            <p>Payslips, ESIC / EPF status, worker ID and grievance filing — free for every worker, forever. They are the heart of the platform.</p>
          </div>
        </div>

        <div className="compare-strip">
          <div className="cs-head">How we compare</div>
          <p>From <strong>₹40 / worker / month</strong> with full ESIC + EPF compliance and contractor-grade tooling. Generic HR platforms price per employee and stop at your own payroll:</p>
          <div className="cs-rows">
            {[['ShramStack', '~₹40–50 / worker · flat bands · contractor + liability shield', true],
              ['greytHR', '~₹100 / employee · generic HRMS'],
              ['RazorpayX Payroll', '~₹100 / employee · generic payroll'],
              ['Zoho Payroll', '~₹33–50 / employee · generic payroll']].map(([n, d, hi]) => (
              <div className={`cs-row${hi ? ' hi' : ''}`} key={n}><span className="cs-name">{n}</span><span className="cs-detail">{d}</span></div>
            ))}
          </div>
          <p className="cs-foot">Comparison for context only. Plans and pricing of other providers change; figures are indicative.</p>
        </div>

        <div className="faq-section">
          <div className="section-title center">Pricing questions</div>
          <div className="faq-list">
            {FAQS.map(([q, a], i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={q}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>{q}<span className="faq-chev">{openFaq === i ? '−' : '+'}</span></button>
                {openFaq === i && <div className="faq-a">{a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
