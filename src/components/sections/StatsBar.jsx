import { stats } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import { FaTrophy, FaMasksTheater, FaGraduationCap } from '../ui/IconIndex.js'
import styles from './StatsBar.module.css'

const icons = {
  trophy: FaTrophy,
  crew: FaMasksTheater,
  cap: FaGraduationCap,
}

export default function StatsBar() {
  return (
    <section className={styles.stats}>
      <Container className={styles.grid}>
        {stats.map((stat) => {
          const Icon = icons[stat.icon]
          return (
            <div key={stat.label} className={styles.item}>
              <Icon aria-hidden className={styles.icon} />
              <p className={styles.value}>{stat.value}</p>
              <p className={styles.label}>{stat.label}</p>
            </div>
          )
        })}
      </Container>
    </section>
  )
}
