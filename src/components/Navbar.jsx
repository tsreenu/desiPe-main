import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const APP_URL = 'https://shramstack-app.web.app'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <button className="nav-logo" onClick={() => navigate('/')} aria-label="Desipe Finance home">
          <span className="nav-logo-icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="16" width="16" height="3.2" rx="1.6" fill="#fff" opacity="0.95" />
              <rect x="6" y="11.4" width="12" height="3.2" rx="1.6" fill="#fff" opacity="0.8" />
              <rect x="8" y="6.8" width="8" height="3.2" rx="1.6" fill="#fff" opacity="0.65" />
              <rect x="10" y="2.2" width="4" height="3.2" rx="1.6" fill="#fff" opacity="0.5" />
            </svg>
          </span>
          <span className="nav-brand">
            Desipe<span>Finance</span>
            <small>BHARAT'S WORKFORCE STACK</small>
          </span>
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'current' : '')}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a className="nav-login" href={APP_URL} target="_blank" rel="noreferrer">Login</a>
          <button className="nav-cta" onClick={() => navigate('/contact')}>Talk to us</button>
        </div>

        <button
          className="hamburger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {links.map((l) => (
          <a key={l.to} onClick={() => { navigate(l.to); setOpen(false) }}>{l.label}</a>
        ))}
        <a href={APP_URL} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Login</a>
        <button className="mobile-cta" onClick={() => { navigate('/contact'); setOpen(false) }}>Talk to us</button>
      </div>
    </>
  )
}
