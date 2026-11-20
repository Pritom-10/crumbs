import { useState } from 'react'
import SearchBar from './SearchBar'

const links = [['Home', '#home'], ['Shop', '#shop'], ['Why Us', '#why'], ['Contact', '#contact']]

export default function Navbar({ query, onQuery }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="brand">Crumb<span>&</span>Co.</a>
        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Main">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <div className="nav__search"><SearchBar id="nav-search" value={query} onChange={onQuery} /></div>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
