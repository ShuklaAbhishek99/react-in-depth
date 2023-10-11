import { createContext, useContext } from "react";

export const ThemecContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemecContext.Provider;

// this code should be in separate file for fast refresh
export default function useTheme() {
  return useContext(ThemecContext);
}
