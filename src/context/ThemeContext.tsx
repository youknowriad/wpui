import { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { Theme, themes, applyTheme, getThemeBySlug } from "../utils/themes";

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  setThemeBySlug: (slug: string) => void;
}

const DEFAULT_THEME = themes[0];
const THEME_STORAGE_KEY = "wpui-theme";

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: DEFAULT_THEME,
  setTheme: () => {},
  setThemeBySlug: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(DEFAULT_THEME);

  // On mount, check for saved theme preference
  useEffect(() => {
    const savedThemeSlug = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedThemeSlug) {
      const theme = getThemeBySlug(savedThemeSlug);
      if (theme) {
        setCurrentTheme(theme);
        applyTheme(theme);
      }
    } else {
      // Apply default theme
      applyTheme(DEFAULT_THEME);
    }
  }, []);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme.slug);
  };

  const setThemeBySlug = (slug: string) => {
    const theme = getThemeBySlug(slug);
    if (theme) {
      setTheme(theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, setThemeBySlug }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
