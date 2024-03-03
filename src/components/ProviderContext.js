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
      window.localStorage.setItem("prefered-theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("prefered-theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("prefered-theme");
    console.log("useEffect");

    if (
      localTheme === "dark" ||
      (!("prefered-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      // setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      // setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  //   useLayoutEffect(() => {
  //     console.log("useLayoutEffect");
  //   }, []);

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
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
