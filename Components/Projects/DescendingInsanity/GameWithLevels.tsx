import { UseLocalStorage } from '../../../Utilities/UseLocalStorage'
import { DescendingNumberGame } from './DescendingNumberGame'

export const DescendingInsanity = () => {
  const {
    value: level,
    setValueLocalStorageNoRerender: setLevel,
    refetch,
  } = UseLocalStorage('descending-insanity-level', 1)

  const numberOfSlots = level + 4

  return (
    <DescendingNumberGame
      numberOfSlots={numberOfSlots}
      refetch={refetch}
      level={level}
      setLevel={setLevel}
      gameType="level"
    />
  )
}