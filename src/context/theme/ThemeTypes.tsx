export interface ThemeState {
  theme: any; //TODO:
}

export interface ThemeContextProps extends ThemeState {
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
