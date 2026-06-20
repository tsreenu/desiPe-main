import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()
  const go = (to) => () => navigate(to)

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <img className="footer-logo" src="/assets/desipe-mark.png" alt="Desipe Finance" />
          <b>Desipe<span>Finance</span></b>
          <p>Financial infrastructure for Bharat's workforce — from verified work to savings, skills and credit.</p>
          <div className="footer-mark"></div>
        </div>
        <div className="footer-col">
          <h5>Products</h5>
          <a onClick={go('/products')}>ShramStack</a>
          <a onClick={go('/products')}>Bharat Bachat</a>
          <a onClick={go('/products')}>BUSI Grow</a>
          <a onClick={go('/products')}>Desipe Credit</a>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <a onClick={go('/about')}>About</a>
          <a onClick={go('/pricing')}>Pricing</a>
          <a onClick={go('/contact')}>Contact</a>
          <a onClick={go('/contact')}>Partner with us</a>
        </div>
        <div className="footer-col">
          <h5>Legal</h5>
          <a onClick={go('/privacy')}>Privacy Policy</a>
          <a onClick={go('/terms')}>Terms &amp; Conditions</a>
          <a onClick={go('/refund')}>Cancellation &amp; Refund</a>
          <a onClick={go('/contact')}>Grievance Officer</a>
        </div>
        <div className="footer-col">
          <h5>Get in touch</h5>
          <a href="mailto:support@desipefin.com">support@desipefin.com</a>
          <a href="tel:+918688076731">+91 8688076731</a>
          <a onClick={go('/contact')}>Request a demo</a>
          <a onClick={go('/contact')} className="footer-addr">SBR CV Towers, HUDA Techno Enclave, Madhapur, Hyderabad – 500081</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© 2026 Desipe Finance Private Limited</span>
        <div className="footer-badges">
          <span className="footer-badge">CIN U64990TS2025PTC196073</span>
          <span className="footer-badge">GSTIN 36AALCD5441N1Z7</span>
          <span className="footer-badge">DPIIT DIPP199558</span>
          <span className="footer-badge">IIIT-B Incubatee</span>
          <span className="footer-badge">MeitY TIDE 2.0</span>
          <span className="footer-badge">Startup India Seed Fund</span>
        </div>
      </div>
    </footer>
  )
}
