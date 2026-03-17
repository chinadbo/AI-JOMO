import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

/**
 * Theme Toggle Component
 * Implements dark/light theme toggle with localStorage persistence
 */
export default function ThemeToggle() {
  // Initialize state from DOM class set by inline script in BaseLayout
  const [isDark, setIsDark] = useState(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });
  const [mounted, setMounted] = useState(false);

  // Mark as mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync state with DOM after Astro page transitions
  useEffect(() => {
    const syncTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    // Listen for Astro's view transition completion
    document.addEventListener('astro:after-swap', syncTheme);

    // Also listen for storage changes (in case theme changes in another tab)
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'theme') {
        syncTheme();
      }
    };
    window.addEventListener('storage', handleStorage);

    return () => {
      document.removeEventListener('astro:after-swap', syncTheme);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  // Avoid hydration mismatch
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
