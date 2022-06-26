import { darkTheme, lightTheme } from './ThemeContext';

export const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      localStorage.setItem(
        'themeContext',
        state.theme === 'light' ? 'dark' : 'light'
      );

      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
        colors: state.theme === 'light' ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};
