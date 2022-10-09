import { Bomb } from '../SVGs/Bomb'
import { CatCryingFace } from '../SVGs/CatCryingFace'
import { CatHeartFace } from '../SVGs/CatHeartFace'
import { CatNeutralFace } from '../SVGs/CatNeutralFace'
import { CatScaredFace } from '../SVGs/CatScaredFace'
import { CatSmilingFace } from '../SVGs/CatSmilingFace'
import { HumanCryingFace } from '../SVGs/HumanCryingFace'
import { HumanNeutralFace } from '../SVGs/HumanNeutralFace'
import { HumanPartyFace } from '../SVGs/HumanPartyFace'
import { HumanScaredFace } from '../SVGs/HumanScaredFace'
import { HumanSmilingFace } from '../SVGs/HumanSmilingFace'
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
  [<HumanNeutralFace key="human-neutral-face" />, <CatNeutralFace key="cat-neutral-face" />],
  [<HumanPartyFace key="human-party-face" />, <CatHeartFace key="cat-heart-face" />],
  [<HumanCryingFace key="human-crying-face" />, <CatCryingFace key="cat-crying-face" />],
  [<HumanSmilingFace key="human-smiling-face" />, <CatSmilingFace key="cat-smiling-face" />],
  [<HumanScaredFace key="human-scared-face" />, <CatScaredFace key="cat-scared" />],
]

export const GameTracking = ({
  isDead,
  isWinner,
  isPlaying,
  isHoldingDown,
  faceType,
  flagsPlaced,
  totalBombs,
  switchFaceType,
}: GameTrackingI) => {
  return (
    <div className={styles.container}>
      <div className={styles.svg}>
        <Bomb /> <p>{` ${totalBombs - flagsPlaced}/${totalBombs}`}</p>
      </div>
      <div>
        <p onClick={switchFaceType} className={styles.svg}>
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
      </div>
    </div>
  )
}
