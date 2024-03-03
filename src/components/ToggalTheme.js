"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ProviderContext";

const ToggalTheme = () => {
  const { theme, handleDarkMode } = useTheme();

  return (
    <button
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      onClick={handleDarkMode}
    >
      <Image src="./sun.svg" width={14} height={14} />
      <span>{theme === "dark" ? "Dark" : "Light"} Mode</span>
    </button>
  );
};

const ToggalTheme2 = () => {
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

    if (
      localTheme === "dark" ||
      (!("prefered-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // if (localTheme) {
    //   setTheme(localTheme);
    //   if (localTheme === "dark") {
    //     document.documentElement.classList.add("dark");
    //   }
    // } else {
    //   setTheme("light");
    // }
    // if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //   setTheme("dark");
    //   document.documentElement.classList.add("dark");
    // }

    console.log("chế độ sáng tối", theme);
  }, []);

  return (
    <button
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
      onClick={handleDarkMode}
    >
      <Image src="./sun.svg" width={14} height={14} />
      <span>{theme === "dark" ? "Dark" : "Light"} Mode</span>
    </button>
  );
};

export default ToggalTheme;
