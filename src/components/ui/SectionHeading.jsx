import { renderRichText } from '../../utils/richText.jsx'
import styles from './SectionHeading.module.css'

/**
 * align: 'left' | 'center'
 * theme: 'dark' | 'light' — controls eyebrow/heading color against the
 * section's background.
 */
export default function SectionHeading({
  eyebrow,
  heading,
  align = 'left',
  theme = 'light',
  children,
}) {
  return (
    <div className={`${styles.wrap} ${styles[align]} ${styles[theme]}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.heading}>{renderRichText(heading)}</h2>
      {children}
    </div>
  )
}
