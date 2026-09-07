import { hero } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { FiPlay } from '../ui/IconIndex.js'
import heroBg from '../../assets/hero-bg.png'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      style={{ '--hero-photo': `url(${heroBg})` }}
    >
      <Container className={styles.content}>
        <p className={styles.eyebrow}>{hero.eyebrow}</p>
        <h1 className={styles.heading}>
          {hero.headingLine1}
          <br />
          <span className="gold">{hero.headingLine2}</span>
        </h1>
        <p className={styles.subtext}>
          {hero.subtextLine1}
          <br />
          {hero.subtextLine2}
        </p>
        <div className={styles.ctas}>
          <Button variant="solid-gold" href={hero.primaryCta.href}>
            {hero.primaryCta.label} →
          </Button>
          <Button
            variant="outline-gold"
            href={hero.secondaryCta.href}
            icon={FiPlay}
            iconCircle
          >
            {hero.secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  )
}
