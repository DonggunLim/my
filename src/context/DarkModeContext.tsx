import React, { createContext, useState, useEffect } from 'react';

interface DarkModeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}
interface DarkModeProviderProps {
  children: React.ReactNode;
}

export const DarkModeContext = createContext<DarkModeContextProps>(
  {} as DarkModeContextProps,
);

export default function DarkModeProvider({ children }: DarkModeProviderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    console.log(isDark);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function updateDarkMode(darkMode: boolean) {
  console.log(darkMode);
  if (darkMode) {
    console.log(document.documentElement);
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    console.log(document.documentElement);
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
