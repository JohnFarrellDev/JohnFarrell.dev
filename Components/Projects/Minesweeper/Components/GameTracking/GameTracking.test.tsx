import { render, screen } from '@testing-library/react'
import { FaceType, GameTracking } from './GameTracking'

describe('game tracking', () => {
  it.each`
    expectedFace | isPlaying | isWinner | isDead   | isHoldingDown | faceType
    ${'😐'}      | ${false}  | ${false} | ${false} | ${false}      | ${FaceType.Human}
    ${'🐱'}      | ${false}  | ${false} | ${false} | ${false}      | ${FaceType.Cat}
    ${'🙂'}      | ${true}  | ${false} | ${false} | ${false}      | ${FaceType.Human}
    ${'😺'}      | ${true}  | ${false} | ${false} | ${false}      | ${FaceType.Cat}
    ${'🥳'}      | ${true}  | ${true} | ${false} | ${false}      | ${FaceType.Human}
    ${'😸'}      | ${true}  | ${true} | ${false} | ${false}      | ${FaceType.Cat}
    ${'😭'}      | ${true}  | ${false} | ${true} | ${false}      | ${FaceType.Human}
    ${'😿'}      | ${true}  | ${false} | ${true} | ${false}      | ${FaceType.Cat}
    ${'😲'}      | ${true}  | ${false} | ${false} | ${true}      | ${FaceType.Human}
    ${'🙀'}      | ${true}  | ${false} | ${false} | ${true}      | ${FaceType.Cat}
  `(
    'it should display $expectedFace when isPlaying is $isPlaying, isWinner is $isWinner, isDead is $isDead, isHoldingDown is $isHoldingDown and faceType is $faceType',
    ({
      expectedFace,
      isPlaying,
      isWinner,
      isDead,
      isHoldingDown,
      faceType,
    }: {
      expectedFace: string
      isPlaying: boolean
      isWinner: boolean
      isDead: boolean
      isHoldingDown: boolean
      faceType: FaceType
    }) => {
      render(
        <GameTracking
          isPlaying={isPlaying}
          isWinner={isWinner}
          isDead={isDead}
          isHoldingDown={isHoldingDown}
          faceType={faceType}
          switchFaceType={jest.fn()}
        />
      )

      expect(screen.getByText(expectedFace)).toBeInTheDocument()
    }
  )
})
