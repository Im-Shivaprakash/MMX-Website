import styles from './Container.module.css'

// Centers content at the design's max width with responsive side padding.
// Full-bleed section backgrounds live on the <section> itself; this only
// wraps the content that needs to line up in a column.
export default function Container({ as: Tag = 'div', className = '', children }) {
  return <Tag className={`${styles.container} ${className}`}>{children}</Tag>
}
