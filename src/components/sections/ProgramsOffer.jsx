import { programs } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import styles from './ProgramsOffer.module.css'

import regularClasses from '../../assets/programs/regular-classes.jpg'
import schoolCollege from '../../assets/programs/school-college.jpg'
import sangeetWedding from '../../assets/programs/sangeet-wedding.jpg'
import onlineClasses from '../../assets/programs/online-classes.jpg'

const programImages = {
  'regular-classes': regularClasses,
  'school-college': schoolCollege,
  'sangeet-wedding': sangeetWedding,
  'online-classes': onlineClasses,
}

export default function ProgramsOffer() {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow={programs.eyebrow}
          heading={programs.heading}
          align="center"
          theme="light"
        />

        <div className={styles.grid}>
          {programs.items.map((item) => (
            // tabIndex + :focus-within in CSS lets keyboard/touch users reveal
            // the expanded panel the same way :hover does for a mouse.
            <article key={item.key} className={styles.card} tabIndex={0}>
              <img
                src={programImages[item.key]}
                alt={item.title}
                className={styles.image}
              />
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>

              {/* Covers the card (photo included) and pokes slightly above
                  its top edge on hover/focus with the fuller explanation,
                  instead of linking out to a "learn more" page. */}
              <div className={styles.expandedPanel} aria-hidden="true">
                <h3 className={styles.expandedTitle}>{item.title}</h3>
                <p className={styles.expandedText}>{item.details}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
