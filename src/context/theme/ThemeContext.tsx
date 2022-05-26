import React, { createContext, useEffect, useReducer } from 'react';
import { ThemeState, ThemeContextProps, LIGHT_THEME, DARK_THEME } from './ThemeTypes';
import { themeReducer } from './ThemeReducer';
import { useColorScheme } from 'react-native';

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const colorScheme = useColorScheme();
  const themeInitialState: ThemeState = {
    theme: colorScheme === 'dark' ? DARK_THEME : LIGHT_THEME,
  };

  const [state, dispatch] = useReducer(themeReducer, themeInitialState);

  const setLightTheme = () => dispatch({ type: 'SET_LIGHT_THEME', payload: LIGHT_THEME });

  const setDarkTheme = () => dispatch({ type: 'SET_DARK_THEME', payload: DARK_THEME });

  useEffect(() => {
    if ((colorScheme === 'dark' && state.theme.dark) || (colorScheme !== 'dark' && !state.theme.dark)) {
      return;
    }
    colorScheme === 'dark' ? setDarkTheme() : setLightTheme();
  }, [colorScheme]);

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
