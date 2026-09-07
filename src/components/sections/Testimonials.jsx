import { useState } from 'react'
import { testimonials } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { FiChevronLeft, FiChevronRight, FiUser } from '../ui/IconIndex.js'
import styles from './Testimonials.module.css'

const VISIBLE = 3

// v1 simplification: this renders a static 3-up row, not a real swipeable
// carousel (drag/touch/infinite-loop is unnecessary complexity for a landing
// page whose testimonial list is currently exactly 3). If content.js grows
// past VISIBLE items, the prev/next buttons slide which window of items is
// shown; with <= VISIBLE items they're inert (no need for it, and there's
// nowhere to slide to).
export default function Testimonials() {
  const [start, setStart] = useState(0)
  const canSlide = testimonials.items.length > VISIBLE

  const visible = canSlide
    ? Array.from({ length: VISIBLE }, (_, i) => testimonials.items[(start + i) % testimonials.items.length])
    : testimonials.items

  function prev() {
    setStart((s) => (s - 1 + testimonials.items.length) % testimonials.items.length)
  }

  function next() {
    setStart((s) => (s + 1) % testimonials.items.length)
  }

  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            heading={testimonials.heading}
            align="left"
            theme="light"
          />
          <div className={styles.arrows}>
            <button type="button" aria-label="Previous" disabled={!canSlide} onClick={prev}>
              <FiChevronLeft />
            </button>
            <button type="button" aria-label="Next" disabled={!canSlide} onClick={next}>
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {visible.map((item) => (
            <article key={item.name} className={styles.card}>
              <span className={styles.avatar} aria-hidden="true">
                <FiUser />
              </span>
              <div className={styles.content}>
                <p className={styles.quote}>“{item.quote}”</p>
                <p className={styles.name}>{item.name}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
