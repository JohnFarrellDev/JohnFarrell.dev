import styles from './Title.module.css'
import { Underline } from '../Underline/Underline'

interface TitleProps {
  title: string
  extraStyles?: string
}

export const Title = ({ title, extraStyles }: TitleProps) => {
  return (
    <div className={`${styles.sectionTitle} ${extraStyles ? extraStyles : ''}`}>
      <h2>{title}</h2>
      <Underline extraStyles={styles.underline} />
    </div>
  )
}
