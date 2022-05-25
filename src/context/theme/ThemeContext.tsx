import React, { createContext } from 'react';
import { ThemeContextProps } from './ThemeTypes';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const theme = {};

  const setDarkTheme = () => {
    console.log('setDarkTheme');
  };

  const setLightTheme = () => {
    console.log('setLightTheme');
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
