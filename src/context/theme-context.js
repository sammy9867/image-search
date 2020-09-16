import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export const  ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setIsLightTheme ] = useState(true);

  return (
    <ThemeContext.Provider value={{isLightTheme, setIsLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);