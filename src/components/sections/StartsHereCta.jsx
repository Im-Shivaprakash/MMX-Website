import { startsHere } from '../../data/content.js'
import { renderRichText } from '../../utils/richText.jsx'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import styles from './StartsHereCta.module.css'

export default function StartsHereCta() {
  return (
    <section className={styles.section}>
      <Container className={styles.content}>
        <p className={styles.label}>{startsHere.label}</p>
        <h2 className={styles.heading}>{renderRichText(startsHere.heading)}</h2>
        <p className={styles.subtext}>{startsHere.subtext}</p>
        <Button variant="solid-gold" href={startsHere.cta.href}>
          {startsHere.cta.label} →
        </Button>
      </Container>
    </section>
  )
}
