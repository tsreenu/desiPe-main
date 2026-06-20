import LegalLayout from '../components/LegalLayout.jsx'

export default function Refund() {
  return (
    <LegalLayout
      badge="Legal"
      title="Cancellation & Refund Policy"
      subtitle="How subscriptions, cancellations, refunds, and service delivery work."
      updated="19 June 2026"
    >
      <p>This policy describes how subscriptions, cancellations, and refunds are handled for paid services provided by <strong>Desipe Finance Private Limited</strong>, and how our digital services are delivered.</p>

      <h2>1. Service delivery</h2>
      <p>Our products are <strong>digital software services</strong>. There is no physical shipment. On successful subscription and payment, access to the relevant service is provisioned to your account — typically immediately, and in any case within 24 hours. Access details are sent to your registered email.</p>

      <h2>2. Subscriptions &amp; billing</h2>
      <p>Paid plans are billed in advance for the chosen billing cycle (for example, monthly or annually), as shown on our <a href="/pricing">Pricing</a> page. Subscriptions renew automatically unless cancelled before the renewal date.</p>

      <h2>3. Cancellation</h2>
      <p>You may cancel your subscription at any time from your account or by writing to us. On cancellation, your plan remains active until the end of the current billing cycle, after which it will not renew.</p>

      <h2>4. Refunds</h2>
      <ul>
        <li>Subscription fees are generally <strong>non-refundable</strong> for the current billing cycle once the service has been provisioned and used.</li>
        <li>If you experience a verified billing error or a duplicate charge, we will refund the affected amount.</li>
        <li>Eligible refunds are processed to the original payment method within <strong>7–10 business days</strong> of approval. Timelines for the amount to reflect may vary by bank or payment provider.</li>
      </ul>

      <h2>5. How to request a refund or cancellation</h2>
      <p>Email <a href="mailto:support@desipefin.com">support@desipefin.com</a> from your registered email with your account details and reason. We aim to respond within 2 business days.</p>

      <div className="legal-callout">
        <strong>Note:</strong> The exact refund window and terms should match what you have agreed with your payment partner and any plan-specific terms. Confirm these details before publishing.
      </div>

      <h2>6. Contact</h2>
      <p>Questions about billing or this policy? Reach us at <a href="mailto:support@desipefin.com">support@desipefin.com</a> or via the <a href="/contact">Contact</a> page.</p>
    </LegalLayout>
  )
}
