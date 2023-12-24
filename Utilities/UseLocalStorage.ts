import { useEffect, useState } from 'react'

type Keys = 'twenty-number-challenge-high-score'

interface MapKeyToValue {
  'twenty-number-challenge-high-score': number
}

export function UseLocalStorage<T extends Keys>(key: T, initialValue: MapKeyToValue[T]) {
  const [value, setValue] = useState<MapKeyToValue[T]>(initialValue)
  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(true)

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setValue(JSON.parse(item))
      }
      if (!item) {
        setValue(initialValue)
        window.localStorage.setItem(key, JSON.stringify(initialValue))
      }
    } catch (error) {
      setIsLocalStorageAvailable(false)
    }
  }, [key, setValue, initialValue])

  const setValueLocalStorage = (value: MapKeyToValue[T]) => {
    try {
      setValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  }

  const setValueLocalStorageNoRerender = (value: MapKeyToValue[T]) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {}
  }

  const refetch = () => {
    try {
      const item = window.localStorage.getItem(key)
      if (item) {
        setValue(JSON.parse(item))
      }
    } catch (error) {}
  }

  return { value, setValueLocalStorage, setValueLocalStorageNoRerender, isLocalStorageAvailable, refetch }
}
