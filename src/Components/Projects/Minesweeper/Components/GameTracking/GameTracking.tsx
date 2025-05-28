import { Bomb } from '../SVGs/Bomb';
import { CatCryingFace } from '../SVGs/CatCryingFace';
import { CatHeartFace } from '../SVGs/CatHeartFace';
import { CatNeutralFace } from '../SVGs/CatNeutralFace';
import { CatScaredFace } from '../SVGs/CatScaredFace';
import { CatSmilingFace } from '../SVGs/CatSmilingFace';
import { HumanCryingFace } from '../SVGs/HumanCryingFace';
import { HumanNeutralFace } from '../SVGs/HumanNeutralFace';
import { HumanPartyFace } from '../SVGs/HumanPartyFace';
import { HumanScaredFace } from '../SVGs/HumanScaredFace';
import { HumanSmilingFace } from '../SVGs/HumanSmilingFace';

export enum FaceType {
  Human,
  Cat,
}

interface GameTrackingI {
  isDead: boolean;
  isWinner: boolean;
  isPlaying: boolean;
  isHoldingDown: boolean;
  faceType: FaceType;
  switchFaceType: () => void;
  flagsPlaced: number;
  totalBombs: number;
}

const faces = [
  [
    <HumanNeutralFace key="human-neutral-face" className="w-[50px]" />,
    <CatNeutralFace key="cat-neutral-face" className="w-[50px]" />,
  ],
  [
    <HumanPartyFace key="human-party-face" className="w-[50px]" />,
    <CatHeartFace key="cat-heart-face" className="w-[50px]" />,
  ],
  [
    <HumanCryingFace key="human-crying-face" className="w-[50px]" />,
    <CatCryingFace key="cat-crying-face" className="w-[50px]" />,
  ],
  [
    <HumanSmilingFace key="human-smiling-face" className="w-[50px]" />,
    <CatSmilingFace key="cat-smiling-face" className="w-[50px]" />,
  ],
  [
    <HumanScaredFace key="human-scared-face" className="w-[50px]" />,
    <CatScaredFace key="cat-scared" className="w-[50px]" />,
  ],
];

export function GameTracking({
  isDead,
  isWinner,
  isPlaying,
  isHoldingDown,
  faceType,
  flagsPlaced,
  totalBombs,
  switchFaceType,
}: GameTrackingI) {
  return (
    <div className="mx-auto flex max-w-[500px] justify-around">
      <div>
        <Bomb /> <p className="select-none text-2xl text-red-500">{`${totalBombs - flagsPlaced}/${totalBombs}`}</p>
      </div>
      <div>
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
      </div>
    </div>
  );
}
