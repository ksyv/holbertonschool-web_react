// src/context/ThemeContext.jsx

import React, { createContext, useState, useContext, useEffect } from 'react';
import { themes } from '../themes';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(() => {
    return localStorage.getItem('appTheme') || 'cyberpunk';
  });

  useEffect(() => {
    localStorage.setItem('appTheme', themeName);
  }, [themeName]);

  const value = {
    themeName, // On exporte la clé (ex: 'cyberpunk')
    theme: themes[themeName], // On exporte l'objet de thème
    setThemeName,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}