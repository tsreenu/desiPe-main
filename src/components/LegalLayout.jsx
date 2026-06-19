import { PageHeader } from './Sections.jsx'

export default function LegalLayout({ badge, title, subtitle, updated, children }) {
  return (
    <div className="page">
      <PageHeader badge={badge} title={title}>{subtitle}</PageHeader>
      <section className="legal">
        <div className="legal-wrap">
          <p className="legal-updated">Last updated: {updated}</p>
          {children}
        </div>
      </section>
    </div>
  )
}
