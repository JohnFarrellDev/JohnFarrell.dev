import { useState } from 'react'
import { UseLocalStorage } from '../../../Utilities/UseLocalStorage'
import { Game } from './Game'

export const DescendingInsanity = () => {
  const {
    value: level,
    setValueLocalStorageNoRerender: setLevel,
    refetch,
  } = UseLocalStorage('descending-insanity-level', 1)

  const numberOfSlots = level + 4

  const [slots, setSlots] = useState<(number | null)[]>(Array(numberOfSlots).fill(null))

  return <Game slots={slots} setSlots={setSlots} refetch={refetch} level={level} setLevel={setLevel} gameType="level" />
}
