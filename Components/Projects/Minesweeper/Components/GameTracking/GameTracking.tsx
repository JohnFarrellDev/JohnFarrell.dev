import styles from './GameTracking.module.css'

export enum FaceType {
  Human,
  Cat,
}

interface GameTrackingI {
  isDead: boolean
  isWinner: boolean
  isPlaying: boolean
  isHoldingDown: boolean
  faceType: FaceType
  switchFaceType: () => void
  flagsPlaced: number
  totalBombs: number
}

const faces = [
  ['😐', '🐱'],
  ['🥳', '😸'],
  ['😭', '😿'],
  ['🙂', '😺'],
  ['😲', '🙀'],
]

export const GameTracking = ({
  isDead,
  isWinner,
  isPlaying,
  isHoldingDown,
  faceType,
  flagsPlaced,
  totalBombs,
  switchFaceType
}: GameTrackingI) => {
  return (
    <div className={styles.container}>
      <p>{`💣 ${totalBombs-flagsPlaced}/${totalBombs}`}</p>
      <p onClick={switchFaceType}>
        {!isPlaying
          ? faces[0][faceType]
          : isWinner
          ? faces[1][faceType]
          : isDead
          ? faces[2][faceType]
          : isHoldingDown
          ? faces[4][faceType]
          : faces[3][faceType]}
      </p>
      <p>⏰</p>
    </div>
  )
}
