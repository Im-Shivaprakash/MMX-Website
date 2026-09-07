import { featuredVideos } from '../../data/content.js'
import Container from '../ui/Container.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import Button from '../ui/Button.jsx'
import { FaInstagram, FiPlay } from '../ui/IconIndex.js'
import styles from './FeaturedVideos.module.css'

import reel1 from '../../assets/featured-videos/reel-1.png'
import reel2 from '../../assets/featured-videos/reel-2.png'
import reel3 from '../../assets/featured-videos/reel-3.jpg'

const reelImages = {
  'reel-1': reel1,
  'reel-2': reel2,
  'reel-3': reel3,
}

export default function FeaturedVideos() {
  return (
    <section id="featured-videos" className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.header}>
          <SectionHeading
            eyebrow={featuredVideos.eyebrow}
            heading={featuredVideos.heading}
            align="left"
            theme="dark"
          />
          <Button variant="outline-light" href={featuredVideos.instagramCta.href} icon={FaInstagram}>
            {featuredVideos.instagramCta.label}
          </Button>
        </div>

        <div className={styles.grid}>
          {featuredVideos.items.map((item) => (
            <a
              key={item.key}
              className={styles.reel}
              href={item.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={reelImages[item.key]} alt={item.alt} className={styles.reelImage} />
              <span className={styles.playBadge} aria-hidden="true">
                <FiPlay />
              </span>
            </a>
          ))}
        </div>

        <p className={styles.caption}>{featuredVideos.caption}</p>
      </Container>
    </section>
  )
}
