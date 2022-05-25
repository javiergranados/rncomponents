import { ThemeActions, ThemeState } from './ThemeTypes';

const themeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case 'SET_LIGHT_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    case 'SET_DARK_THEME':
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export { themeReducer };
