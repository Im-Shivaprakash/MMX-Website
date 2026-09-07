import { founder } from '../../data/content.js'
import { renderRichText } from '../../utils/richText.jsx'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { FaInstagram } from '../ui/IconIndex.js'
import founderPhoto from '../../assets/founder.jpeg'
import styles from './FounderAbout.module.css'

export default function FounderAbout() {
  return (
    <section id="founder" className={styles.section}>
      <Container className={styles.grid}>
        <div className={styles.imageCol}>
          <span aria-hidden="true" className={styles.watermark}>
            {founder.watermark}
          </span>
          <img src={founderPhoto} alt={founder.name} className={styles.image} />
        </div>

        <div className={styles.textCol}>
          <h2 className={styles.heading}>{renderRichText(founder.heading)}</h2>
          <p className={styles.name}>{founder.name}</p>
          <div className={styles.roleRow}>
            <p className={styles.role}>{founder.role}</p>
            <span className={styles.experience}>{founder.experience}</span>
          </div>
          <p className={styles.bio}>{founder.bio}</p>

          <div className={styles.styleGroup}>
            <p className={styles.styleLabel}>Style Mastery</p>
            <ul className={styles.styleList}>
              {founder.styles.map((style) => (
                <li key={style} className={styles.styleTag}>
                  {style}
                </li>
              ))}
            </ul>
          </div>

          <blockquote className={styles.quote}>“{founder.quote}”</blockquote>

          <div className={styles.ctas}>
            <Button variant="solid-gold" href={founder.instagramCta.href} icon={FaInstagram}>
              {founder.instagramCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
