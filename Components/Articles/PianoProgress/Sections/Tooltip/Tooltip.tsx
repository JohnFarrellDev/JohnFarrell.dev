import styles from './Tooltip.module.css'

interface InfoTooltipProps {
  text: string
}

export const Tooltip = ({ text }: InfoTooltipProps) => {
  return (
    <span className={styles.tooltipContainer}>
      <span className={styles.tooltipIcon}>i</span>
      <span className={styles.tooltipText}>{text}</span>
    </span>
  )
}
