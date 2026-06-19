import { useState } from 'react'
import { PageHeader } from '../components/Sections.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'An employer / contractor (ShramStack)', msg: '' })
  const [note, setNote] = useState({ text: "We'll get back within two business days.", color: 'rgba(255,255,255,0.5)' })

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const send = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setNote({ text: 'Please add your name and email so we can reply.', color: '#fca5a5' })
      return
    }
    setNote({
      text: `Thanks, ${form.name.trim().split(' ')[0]} — your message is ready to send. (Wire this form to your inbox or CRM to go live.)`,
      color: '#5eead4',
    })
  }

  return (
    <div className="page">
      <PageHeader badge="Contact" title="Let's build something" titleAccent="that lasts.">
        Tell us who you are and what you're after — an employer evaluating ShramStack, a partner for Bharat Bachat, or an investor in the stack. We read every message.
      </PageHeader>

      <section className="contact" style={{ paddingTop: 72 }}>
        <div className="contact-grid">
          <div className="contact-info reveal">
            <h4>Reach the team</h4>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div><div className="ci-label">Email</div><div className="ci-text"><a href="mailto:hello@desipefinance.com">hello@desipefinance.com</a></div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div><div className="ci-label">Phone</div><div className="ci-text">+91-9030417269</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div><div className="ci-label">Registered office</div><div className="ci-text">Desipe Finance Private Limited<br />[Registered office address — to be inserted]<br />Telangana, India</div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🛡️</div>
              <div><div className="ci-label">Grievance Officer</div><div className="ci-text"><a href="mailto:grievance@desipefinance.com">grievance@desipefinance.com</a></div></div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🏢</div>
              <div><div className="ci-label">CIN</div><div className="ci-text">U64990TS2025PTC196073 · DPIIT DIPP199558</div></div>
            </div>
          </div>

          <div className="contact-form reveal">
            <div className="cf-group">
              <label className="cf-label" htmlFor="cf-name">Your name</label>
              <input className="cf-input" id="cf-name" type="text" placeholder="Full name" value={form.name} onChange={set('name')} />
            </div>
            <div className="cf-group">
              <label className="cf-label" htmlFor="cf-email">Work email</label>
              <input className="cf-input" id="cf-email" type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
            </div>
            <div className="cf-group">
              <label className="cf-label" htmlFor="cf-type">I'm reaching out as</label>
              <select className="cf-select" id="cf-type" value={form.type} onChange={set('type')}>
                <option>An employer / contractor (ShramStack)</option>
                <option>A potential Bharat Bachat partner</option>
                <option>An investor</option>
                <option>Something else</option>
              </select>
            </div>
            <div className="cf-group">
              <label className="cf-label" htmlFor="cf-msg">Message</label>
              <textarea className="cf-textarea" id="cf-msg" placeholder="Tell us a little about what you need." value={form.msg} onChange={set('msg')} />
            </div>
            <button className="btn-primary cf-send" onClick={send}>Send message <span className="arr">→</span></button>
            <div className="cf-note" style={{ color: note.color }}>{note.text}</div>
          </div>
        </div>
      </section>
    </div>
  )
}
