import { useEffect, useState } from 'react'
import { UseLocalStorage } from '../../../Utilities/UseLocalStorage'
import { DescendingNumberGame } from './DescendingNumberGame'

export const GameWithLevels = () => {
  const {
    value: level,
    setValueLocalStorageNoRerender: setLevel,
    refetch,
  } = UseLocalStorage('descending-insanity-level', 1)

  const [hydration, setHydration] = useState(false)

  useEffect(() => {
    setHydration(true)
  }, [])

  if (!hydration) return null

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
