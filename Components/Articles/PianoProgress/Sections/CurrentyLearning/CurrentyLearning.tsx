import styles from './CurrentyLearning.module.css'

const itemsBeingLearnt = [
  "Can Can, Bastien Piano For Adults Book 1, page 51",
  "Fantaisie Impromptu, Bastien Piano For Adults Book 1, page 52",
  "Minuet in G, Bastien Piano For Adults Book 1, page 55"
]

export const CurrentyLearning = () => {
  return (
    <div className={styles.notification}>
      <h2>Currently Learning:</h2>
      <ul>
        {
          itemsBeingLearnt.map((item, index) => {
            return <li key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}
