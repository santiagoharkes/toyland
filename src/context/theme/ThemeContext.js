import React, { createContext, useReducer, useContext } from "react";
import { ThemeReducer } from "./ThemeReducer";

const ThemeContext = createContext({});

const storage = localStorage.getItem("themeContext")
  ? localStorage.getItem("themeContext")
  : "light";

export const darkTheme = {
  background: "#fff",
  backgroundSecondary: "#f8f7fe",
  backgroundTransparent: "#ffffffbd",

  text: "#2b2b2b",
  textSecondary: "#bebad2",

  violet: "#503e9d",
  violetMedium: "#8b7bd0",
  violetLight: "#eeecf6",

  yellow: "#f7d354",

  orange: "#f46533",
  orangeMedium: "##ffe5bc",
  orangeLight: "#fef7ec",
};

export const lightTheme = darkTheme;

const initialState = {
  theme: storage,
  colors: storage === "dark" ? darkTheme : lightTheme,
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = (payload) => {
    dispatch({ type: "CHANGE_THEME", payload });
  };

  const themeState = {
    ...state,
  };

  const themeActions = {
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={{ themeState, themeActions }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
