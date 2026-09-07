import styles from './Button.module.css'

/**
 * variant: 'solid-gold' | 'outline-light' | 'outline-dark' | 'outline-gold'
 * iconCircle: renders the icon inside a small filled-gold circle badge
 * instead of plain inline (matches the Hero "Show Reel" play button).
 * Renders an <a> when href is given, otherwise a <button> (for form submit).
 */
export default function Button({
  variant = 'solid-gold',
  href,
  icon: Icon,
  iconPosition = 'right',
  iconCircle = false,
  type = 'button',
  disabled = false,
  onClick,
  className: extraClassName = '',
  children,
}) {
  const className = `${styles.button} ${styles[variant]} ${extraClassName}`
  const iconNode = Icon ? (
    iconCircle ? (
      <span className={styles.iconCircle}>
        <Icon aria-hidden />
      </span>
    ) : (
      <Icon aria-hidden />
    )
  ) : null
  const content = (
    <>
      {iconPosition === 'left' && iconNode}
      <span>{children}</span>
      {iconPosition === 'right' && iconNode}
    </>
  )

  if (href) {
    return (
      <a className={className} href={href}>
        {content}
      </a>
    )
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  )
}
