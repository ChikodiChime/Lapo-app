import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SidebarTheme = '#CCDBEF' | '#FFFFFF' | '#002F6C';

interface SidebarState {
  backgroundColor: SidebarTheme;
  setBackgroundColor: (color: SidebarTheme) => void;
}

export const useSidebarStore = create<SidebarState>()(
  persist(
    (set) => ({
      backgroundColor: '#FFFFFF',
      setBackgroundColor: (color) => set({ backgroundColor: color }),
    }),
    {
      name: 'sidebar-storage',
    }
  )
);
