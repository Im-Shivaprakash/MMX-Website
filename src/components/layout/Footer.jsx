import logo from '../../assets/logo.png'
import { navLinks, footer } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import { FiMapPin, FiPhone, FiMail, FaFacebookF, FaInstagram, FaYoutube } from '../ui/IconIndex.js'
import styles from './Footer.module.css'

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.top}>
        <div className={styles.brand}>
          <img src={logo} alt="MMX Dance Studio" className={styles.logo} />
          <p className={styles.tagline}>{footer.tagline}</p>
        </div>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.meta}>
          <a
            href={footer.mapLink}
            target="_blank"
            rel="noreferrer"
            className={styles.location}
          >
            <FiMapPin aria-hidden /> <span>{footer.address}</span>
          </a>
          <a href={footer.phoneHref} className={styles.contactLine}>
            <FiPhone aria-hidden /> {footer.phone}
          </a>
          <a href={`mailto:${footer.email}`} className={styles.contactLine}>
            <FiMail aria-hidden /> {footer.email}
          </a>
          <div className={styles.social}>
            <span>{footer.socialLabel}</span>
            <div className={styles.socialIcons}>
              {footer.socials.map((s) => {
                const Icon = socialIcons[s.icon]
                return (
                  <a key={s.icon} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                    <Icon aria-hidden />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.bottomBar}>
        <Container>
          <p>© {new Date().getFullYear()} {footer.copyright}</p>
        </Container>
      </div>
    </footer>
  )
}
