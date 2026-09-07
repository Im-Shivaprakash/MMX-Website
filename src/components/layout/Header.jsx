import { useState } from 'react'
import logo from '../../assets/logo.png'
import { navLinks, hero } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { FiMenu, FiX } from '../ui/IconIndex.js'
import styles from './Header.module.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <a href="#home" className={styles.logoLink} onClick={() => setIsOpen(false)}>
          <img src={logo} alt="MMX Dance Studio" className={styles.logo} />
        </a>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.navCta}>
            <Button variant="solid-gold" href={hero.primaryCta.href}>
              {hero.primaryCta.label} →
            </Button>
          </div>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </Container>
    </header>
  )
}
