import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
      return 'dark'; // Dark theme default as requested
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');

    if (theme === 'dark') {
      root.classList.add('dark');
      if (colorSchemeMeta) colorSchemeMeta.setAttribute('content', 'dark');
      try {
        localStorage.setItem('theme', 'dark');
      } catch (e) {
        console.error(e);
      }
    } else {
      root.classList.remove('dark');
      if (colorSchemeMeta) colorSchemeMeta.setAttribute('content', 'light');
      try {
        localStorage.setItem('theme', 'light');
      } catch (e) {
        console.error(e);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme, isDark: theme === 'dark' };
}
