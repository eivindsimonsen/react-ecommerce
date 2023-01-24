import { useEffect, useState } from "react";

export default function useLocalStorageValue(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = window.localStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialValue;
        setStoredValue(value);
      } catch (error) {
        console.log(error);
      }
    }
  }, [key, initialValue]);

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
}
