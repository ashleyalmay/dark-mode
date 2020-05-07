import { useState } from "react";
    // set up state property
    // capture the values
    // if local data use that, else use initial data
    // update localStorage when needed
    // Don't forget to parse data from localStorage, and stringify new data getting stored

export const useLocalStorage = (key, initialValue) => {
    // To retrieve an item from localStorage, call localStorage.getItem('itemName')
    // If that item doesn't exist, it will return undefined
 const [storedValue, setStoredValue] = useState(() => {
    // Get from local storage by key
    const item = window.localStorage.getItem(key);
    // Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

const setValue = value => {
    // Save state
    setStoredValue(value);
    // Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
    // should work almost exactly like useState - except any value that is controlled by this hook will be saved and persisted to localStorage
    return [storedValue, setStoredValue];
};  

// ALWAYS BRING DOWN THE "SETS" ^^^^