import styles from './GameTracking.module.css'

enum FaceType {
  Human,
  Cat,
}

interface GameTrackingI {
  isDead: boolean
  isWinner: boolean
  isPlaying: boolean
  isHoldingDown: boolean
  faceType: FaceType
}

export const GameTracking = ({
  isDead,
  isWinner,
  isPlaying,
  isHoldingDown,
  faceType,
}: GameTrackingI) => {

    const faces= [['😐','🐱'],['🥳', '😸'],['😭', '😿'],['🙂','😺'],['😲','🙀']]

  return (
    <div className={styles.container}>
      {!isPlaying ? faces[0][faceType] : isWinner ? faces[1][faceType]
       : isDead ? faces[2][faceType] : isHoldingDown ? faces[4][faceType] : faces[3][faceType]}
    </div>
  )
}
