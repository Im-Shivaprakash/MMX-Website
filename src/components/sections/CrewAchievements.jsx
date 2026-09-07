import { achievements } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import styles from './CrewAchievements.module.css'

import award1 from '../../assets/achievements/award-1.jpg'
import award2 from '../../assets/achievements/award-2.jpeg'
import award3 from '../../assets/achievements/award-3.jpeg'
import award4 from '../../assets/achievements/award-4.jpeg'
import groupPic from '../../assets/achievements/group-pic.png'

const awardImages = {
  'award-1': award1,
  'award-2': award2,
  'award-3': award3,
  'award-4': award4,
}

export default function CrewAchievements() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={achievements.eyebrow}
            heading={achievements.heading}
            align="left"
            theme="dark"
          />
          <p className={styles.intro}>{achievements.intro}</p>
        </div>

        <div className={styles.body}>
          <div className={styles.awardsGrid}>
            {achievements.awards.map((award) => (
              <img
                key={award.key}
                src={awardImages[award.key]}
                alt={award.alt}
                className={styles.award}
              />
            ))}
          </div>
          <img
            src={groupPic}
            alt={achievements.groupPicAlt}
            className={styles.groupPic}
          />
        </div>
      </Container>
    </section>
  )
}
