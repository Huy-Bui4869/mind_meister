"use client";
import Image from "next/image";
import { useTheme } from "./ProviderContext";

const ToggalTheme = () => {
  const { theme, handleDarkMode } = useTheme();

  return (
    <button
      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"
      onClick={handleDarkMode}
    >
      <Image src="./sun.svg" width={14} height={14} />
      <span>{theme === "dark" ? "Dark" : "Light"} Mode</span>
    </button>
  );
};

export default ToggalTheme;
