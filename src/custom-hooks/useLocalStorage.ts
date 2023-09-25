import { useState } from 'react';

interface LocalStorageAPI {
  token: string | null;
  setToken: (value: string | null) => void;
  removeToken: () => void;
}

export const useLocalStorage = (key: string): LocalStorageAPI => {
  const [token, setTokenState] = useState<string | null>(() => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      // Manejar errores de localStorage aquí
      console.error('Error al acceder a localStorage:', error);
      return null;
    }
  });

  const setToken = (value: string | null) => {
    try {
      if (value) {
        localStorage.setItem(key, value);
      } else {
        localStorage.removeItem(key);
      }
      setTokenState(value);
    } catch (error) {
      // Manejar errores de localStorage aquí
      console.error('Error al acceder a localStorage:', error);
    }
  };

  const removeToken = () => {
    try {
      localStorage.removeItem(key);
      setTokenState(null);
    } catch (error) {
      // Manejar errores de localStorage aquí
      console.error('Error al acceder a localStorage:', error);
    }
  };

  return { token, setToken, removeToken };
};
export default useLocalStorage;