import { Theme as ReactNavigationTheme } from '@react-navigation/native';

interface Theme extends ReactNavigationTheme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
}

export interface ThemeState {
  theme: Theme;
}

export interface ThemeContextProps extends ThemeState {
  setLightTheme: () => void;
  setDarkTheme: () => void;
}

export type ThemeActions = { type: 'SET_LIGHT_THEME'; payload: Theme } | { type: 'SET_DARK_THEME'; payload: Theme };

export const LIGHT_THEME: Theme = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.4)',
  colors: {
    primary: '#5856D6',
    background: 'white',
    card: 'green',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};

export const DARK_THEME: Theme = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(255,255,255, 0.6)',
  colors: {
    primary: '#00A5E0',
    background: 'black',
    card: 'black',
    text: 'white',
    border: 'black',
    notification: 'teal',
  },
};
