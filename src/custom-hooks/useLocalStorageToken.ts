import { useState } from 'react'

export const useLocalStorageToken = (key:string) => {

  const [token, setToken] = useState<string | null>(localStorage.getItem(key))

  const setLocalStorage = (newToken: string) => {
    localStorage.setItem(key, newToken)
    setToken(newToken)
  }

  const removeLocalStorageToken = () => {
    localStorage.removeItem(key)
    setToken(null)
  }

  return [token, setLocalStorage, removeLocalStorageToken]
}
