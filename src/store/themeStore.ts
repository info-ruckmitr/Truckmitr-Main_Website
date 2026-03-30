import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'royal-blue' | 'lava-red' | 'tricolor'
interface ThemeStore {
  theme: Theme
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'tricolor',
      toggleTheme: () =>
        set((s) => ({
          theme:
            s.theme === 'tricolor' ? 'royal-blue' : s.theme === 'royal-blue' ? 'lava-red' : 'tricolor',
        })),
    }),
    { name: 'truckmitr-theme' },
  ),
)
