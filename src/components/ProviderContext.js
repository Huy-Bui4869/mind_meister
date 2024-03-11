"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  useLayoutEffect,
} from "react";

const ThemeContext = createContext();

const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState(null);

  const handleDarkMode = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("prefered-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.setItem("prefered-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("prefered-theme");
    // console.log("useEffect");

    if (
      localTheme === "dark" ||
      (!("prefered-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProviderContext;

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within a ThemeProviderContext");
  }
  return context;
}
