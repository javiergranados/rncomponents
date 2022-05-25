import React, { createContext, useReducer } from 'react';
import { ThemeState, ThemeContextProps, LIGHT_THEME, DARK_THEME } from './ThemeTypes';
import { themeReducer } from './ThemeReducer';

const themeInitialState: ThemeState = {
  theme: LIGHT_THEME,
};

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  const setLightTheme = () => dispatch({ type: 'SET_LIGHT_THEME', payload: LIGHT_THEME });

  const setDarkTheme = () => dispatch({ type: 'SET_DARK_THEME', payload: DARK_THEME });

  return (
    <ThemeContext.Provider
      value={{
        ...state,
        setLightTheme,
        setDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
