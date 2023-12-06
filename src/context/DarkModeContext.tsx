"use client";

import React, { createContext, useState, useEffect } from "react";

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  handleAccentColor: (color: string) => void;
}
interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps
);

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  const handleAccentColor = (color: string) => {
    updateAccentColor(color);
  };

  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    updateDarkMode(isDark);

    if (localStorage.accentColor) {
      document.documentElement.style.setProperty(
        "--color-accent",
        localStorage.accentColor
      );
    }
  }, []);

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode, handleAccentColor }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

function updateAccentColor(color: string) {
  localStorage.accentColor = color;
  document.documentElement.style.setProperty("--color-accent", color);
}
