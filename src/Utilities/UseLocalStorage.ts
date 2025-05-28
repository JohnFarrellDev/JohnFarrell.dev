import { useEffect, useState } from 'react';

type Keys = 'twenty-number-challenge-high-score' | 'descending-insanity-level';

interface MapKeyToValue {
  'twenty-number-challenge-high-score': number;
  'descending-insanity-level': number;
}

export function UseLocalStorage<T extends Keys, R>(
  key: T,
  initialValue: T extends keyof MapKeyToValue ? MapKeyToValue[T] : R
) {
  const [value, setValue] = useState<typeof initialValue>(initialValue);
  const [isLocalStorageAvailable, setIsLocalStorageAvailable] = useState(true);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
      if (!item) {
        setValue(initialValue);
        window.localStorage.setItem(key, JSON.stringify(initialValue));
      }
    } catch (error) {
      console.log(error);
      setIsLocalStorageAvailable(false);
    }
  }, [key, setValue, initialValue]);

  const setValueLocalStorage = (value: typeof initialValue) => {
    try {
      setValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const setValueLocalStorageNoRerender = (value: typeof initialValue) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const refetch = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { value, setValueLocalStorage, setValueLocalStorageNoRerender, isLocalStorageAvailable, refetch };
}
