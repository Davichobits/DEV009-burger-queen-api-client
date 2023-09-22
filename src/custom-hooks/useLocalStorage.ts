import { useState } from 'react'

export const useLocalStorage = (key:string) => {

  const [token, setToken] = useState<string | null>(localStorage.getItem(key))

  const setLocalStorage = (value: string) => {
    localStorage.setItem(key, value)
    setToken(value)
  }

  const removeLocalStorageToken = () => {
    localStorage.removeItem(key)
    setToken(null)
  }

  return [token, setLocalStorage, removeLocalStorageToken]
}
