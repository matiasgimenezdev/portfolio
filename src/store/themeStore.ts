import { create } from 'zustand';
import { Theme } from '../types';

export const useThemeStore = create<Theme>((set) => ({
	theme: 'light',
	updateTheme: (newTheme: string) => set({ theme: newTheme }),
}));
