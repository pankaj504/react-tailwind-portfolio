import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
// context
export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Runs only once (initial value)
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className={cn(
          "fixed top-5 right-16 sm:right-5 z-50 p-2 rounded-full transition-colors duration-300",
          "focus:outline-hidden cursor-pointer"
        )}
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
      </button>
    </>
  );
};
