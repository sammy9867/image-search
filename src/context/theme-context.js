import React, { useEffect, createContext, useContext, useState } from 'react';
import { addItemToStorage, getItemFromStorage } from '../util/localStorage';

const initialState = true;

export const ThemeContext = createContext();

export const  ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setIsLightTheme ] = useState(() => {
    const persisted = getItemFromStorage("theme");
        return persisted != null
        ? persisted
        : initialState;
  });

  useEffect(() => {
    addItemToStorage("theme", isLightTheme);
}, [isLightTheme]);

  return (
    <ThemeContext.Provider value={{isLightTheme, setIsLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);