import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const APP_URL = 'https://dev.shramstack.com'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <nav>
        <button className="nav-logo" onClick={() => navigate('/')} aria-label="Desipe Finance home">
          <span className="nav-logo-icon">
            <img src="/assets/desipe-mark.png" alt="Desipe Finance" />
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
