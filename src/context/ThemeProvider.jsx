import { useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from './ThemeContext';

export const ThemeProvider = ({ children }) => {
  // Sauvegarde de la préférence du thème dans le localStorage pour améliorer l'expérience utilisateur
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark'); // Par défaut, on utilise le thème clair
  const toggleTheme = () => {
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
    setIsDark(!isDark);
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};