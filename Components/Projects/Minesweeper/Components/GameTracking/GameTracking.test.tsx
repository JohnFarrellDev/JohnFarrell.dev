import { render, screen } from '@testing-library/react'
import { FaceType, GameTracking } from './GameTracking'

describe('game tracking', () => {
  it.each`
    expectedFace | isPlaying | isWinner | isDead   | isHoldingDown | faceType
    ${'😐'}      | ${false}  | ${false} | ${false} | ${false}      | ${FaceType.Human}
    ${'🐱'}      | ${false}  | ${false} | ${false} | ${false}      | ${FaceType.Cat}
    ${'🙂'}      | ${true}   | ${false} | ${false} | ${false}      | ${FaceType.Human}
    ${'😺'}      | ${true}   | ${false} | ${false} | ${false}      | ${FaceType.Cat}
    ${'🥳'}      | ${true}   | ${true}  | ${false} | ${false}      | ${FaceType.Human}
    ${'😸'}      | ${true}   | ${true}  | ${false} | ${false}      | ${FaceType.Cat}
    ${'😭'}      | ${true}   | ${false} | ${true}  | ${false}      | ${FaceType.Human}
    ${'😿'}      | ${true}   | ${false} | ${true}  | ${false}      | ${FaceType.Cat}
    ${'😲'}      | ${true}   | ${false} | ${false} | ${true}       | ${FaceType.Human}
    ${'🙀'}      | ${true}   | ${false} | ${false} | ${true}       | ${FaceType.Cat}
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
          totalBombs={0}
          flagsPlaced={0}
        />
      )

      expect(screen.getByText(expectedFace)).toBeInTheDocument()
    }
  )

  it.each`
    totalBombs | flagsPlaced | expectedFlagIndication
    ${0}       | ${0} | ${0}
    ${5}       | ${5} | ${0}
    ${5}       | ${0} | ${5}
    ${5}       | ${6} | ${-1}
  `(
    'it should display the total numbers ($totalBombs) of bombs and indicate the flags placed ($flagsPlaced)',
    ({
      totalBombs,
      flagsPlaced,
      expectedFlagIndication
    }: {
      totalBombs: number
      flagsPlaced: number
      expectedFlagIndication: number
    }) => {
      render(
        <GameTracking
          isPlaying={true}
          isWinner={false}
          isDead={false}
          isHoldingDown={false}
          faceType={FaceType.Human}
          switchFaceType={jest.fn()}
          totalBombs={totalBombs}
          flagsPlaced={flagsPlaced}
        />
      )

      expect(
        screen.getByText(`💣 ${expectedFlagIndication}/${totalBombs}`)
      ).toBeInTheDocument()
    }
  )
})
