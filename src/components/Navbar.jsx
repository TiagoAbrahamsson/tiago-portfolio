import { useState } from 'react'
import '../styles/Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav aria-label="Main navigation">
      <a href="#top" className="nav-logo" aria-label="Tiago Abrahamsson — home">
        Tiago Abrahamsson
      </a>

      <button
        className="nav-toggle"
        aria-controls="nav-menu"
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        className={`nav-links ${isOpen ? 'open' : ''}`}
        id="nav-menu"
        role="list"
      >
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar