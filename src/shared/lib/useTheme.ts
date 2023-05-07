import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../../app/providers/ThemeProvider/config/ThemeContext";

export interface IUseTheme {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme() {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT
    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {theme, toggleTheme}
}