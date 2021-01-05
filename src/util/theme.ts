import { createContext } from "react";

export const theme = {
  background: "#ffffff",
};

export type Theme = typeof theme;

export const ThemeContext = createContext(theme);
