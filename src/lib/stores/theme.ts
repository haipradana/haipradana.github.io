import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set, update } = writable<Theme>('light');

  return {
    subscribe,
    toggle: () => {
      if (browser) {
        update(currentTheme => {
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          
          // Clear any existing theme classes first
          document.documentElement.classList.remove('dark', 'light');
          
          if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.add('light');
          }
          
          localStorage.setItem('theme', newTheme);
          return newTheme;
        });
      }
    },
    init: () => {
      if (browser) {
        // Clear any existing classes first
        document.documentElement.classList.remove('dark', 'light');
        
        // Check for saved theme preference or prefer-color-scheme
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = savedTheme || (prefersDark ? 'dark' : 'light');
        
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.add('light');
        }
        
        set(theme);
        localStorage.setItem('theme', theme);
      }
    },
    setTheme: (theme: Theme) => {
      if (browser) {
        // Clear any existing theme classes first
        document.documentElement.classList.remove('dark', 'light');
        
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.add('light');
        }
        
        localStorage.setItem('theme', theme);
        set(theme);
      }
    }
  };
}

export const theme = createThemeStore();