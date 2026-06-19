import LegalLayout from '../components/LegalLayout.jsx'

export default function Privacy() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      subtitle="How Desipe Finance Private Limited collects, uses, and protects your information."
      updated="19 June 2026"
    >
      <p>This Privacy Policy explains how <strong>Desipe Finance Private Limited</strong> ("Desipe", "we", "us", or "our") — the company behind ShramStack and Bharat Bachat — collects, uses, discloses, and safeguards information when you use our websites, applications, and services (together, the "Services").</p>

      <h2>1. Information we collect</h2>
      <p>Depending on how you use the Services, we may collect:</p>
      <ul>
        <li><strong>Account &amp; contact information</strong> — name, email address, phone number, organisation, and role.</li>
        <li><strong>Workforce &amp; compliance data</strong> (ShramStack) — worker records, attendance, wages, and statutory details that employers and contractors provide to operate the service.</li>
        <li><strong>Transaction &amp; savings data</strong> (Bharat Bachat) — information required to enable UPI-based micro-savings, processed through regulated payment infrastructure.</li>
        <li><strong>Technical data</strong> — device, browser, IP address, and usage information collected automatically.</li>
      </ul>

      <h2>2. How we use information</h2>
      <ul>
        <li>To provide, operate, secure, and improve the Services.</li>
        <li>To process subscriptions and payments through our payment partners.</li>
        <li>To meet legal, statutory, and regulatory obligations.</li>
        <li>To communicate with you about your account, support requests, and service updates.</li>
      </ul>

      <h2>3. Sharing of information</h2>
      <p>We do not sell your personal information. We share it only as needed to run the Services, including with:</p>
      <ul>
        <li><strong>Payment and financial partners</strong> (such as our payment gateway and UPI/TPAP infrastructure providers) to process transactions.</li>
        <li><strong>Service providers</strong> who support hosting, analytics, and communications under appropriate confidentiality obligations.</li>
        <li><strong>Authorities</strong> where required by applicable law or to comply with legal process.</li>
      </ul>

      <h2>4. Data security</h2>
      <p>We use reasonable technical and organisational measures to protect information against unauthorised access, alteration, or disclosure. Sensitive credentials and secrets are stored using managed secret stores, and access is restricted on a need-to-know basis.</p>

      <h2>5. Data retention</h2>
      <p>We retain information for as long as your account is active or as needed to provide the Services, and thereafter only as required to meet legal, accounting, or regulatory obligations.</p>

      <h2>6. Your rights</h2>
      <p>Subject to applicable law, you may request access to, correction of, or deletion of your personal information, and may withdraw consent where processing is based on consent. To exercise these rights, contact us using the details below.</p>

      <h2>7. Cookies</h2>
      <p>Our websites may use cookies and similar technologies to keep you signed in, remember preferences, and understand usage. You can control cookies through your browser settings.</p>

      <h2>8. Grievance Officer</h2>
      <p>In accordance with applicable Indian law, the Grievance Officer can be reached at:</p>
      <div className="legal-box">
        <p><strong>Grievance Officer — Desipe Finance Private Limited</strong></p>
        <p>Email: <a href="mailto:grievance@desipefinance.com">grievance@desipefinance.com</a></p>
        <p>Address: [Registered office address — to be inserted]</p>
      </div>

      <h2>9. Changes to this policy</h2>
      <p>We may update this Privacy Policy from time to time. The "Last updated" date above reflects the latest revision. Material changes will be communicated through the Services.</p>

      <h2>10. Contact us</h2>
      <p>Questions about this policy? Email <a href="mailto:hello@desipefinance.com">hello@desipefinance.com</a> or use our <a href="/contact">Contact</a> page.</p>
    </LegalLayout>
  )
}
