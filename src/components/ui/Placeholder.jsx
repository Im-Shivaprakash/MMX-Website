import styles from './Placeholder.module.css'

/**
 * Styled stand-in for photo/video content that hasn't been supplied yet.
 * tone: 'light' (medium-gray box, for placement on light/white cards) |
 *       'dark' (near-white box, for placement on black sections).
 * icon: optional react-icons component rendered centered (e.g. a play button
 * on video thumbnails).
 */
export default function Placeholder({
  tone = 'light',
  aspect = '4 / 3',
  label,
  icon: Icon,
  className = '',
}) {
  return (
    <div
      className={`${styles.placeholder} ${styles[tone]} ${className}`}
      style={{ aspectRatio: aspect }}
      role="img"
      aria-label={label ? `${label} placeholder` : 'image placeholder'}
    >
      {Icon && (
        <span className={styles.iconBadge}>
          <Icon aria-hidden />
        </span>
      )}
      {label && <span className={styles.label}>{label}</span>}
    </div>
  )
}
