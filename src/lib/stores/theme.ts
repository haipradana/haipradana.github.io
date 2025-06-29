import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

// Create a writable store with 'light' as the default
const createThemeStore = () => {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    // Initialize theme from localStorage or default to light
    init: () => {
      if (browser) {
        const stored = localStorage.getItem('theme') as Theme;
        if (stored === 'dark' || stored === 'light') {
          set(stored);
          updateHtmlClass(stored);
        } else {
          // Default to light mode
          set('light');
          updateHtmlClass('light');
          localStorage.setItem('theme', 'light');
        }
      }
    },
    // Toggle between light and dark
    toggle: () => {
      update(currentTheme => {
        const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          updateHtmlClass(newTheme);
        }
        return newTheme;
      });
    },
    // Set specific theme
    setTheme: (theme: Theme) => {
      set(theme);
      if (browser) {
        localStorage.setItem('theme', theme);
        updateHtmlClass(theme);
      }
    }
  };
};

// Helper function to update HTML class
const updateHtmlClass = (theme: Theme) => {
  if (browser) {
    const html = document.documentElement;
    if (theme === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }
};

export const theme = createThemeStore();