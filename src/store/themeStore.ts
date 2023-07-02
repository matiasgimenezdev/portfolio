import { create } from 'zustand';
import { Theme } from '../types';

export const useThemeStore = create<Theme>((set) => ({
	//? Get last value from local storage?
	theme: 'light',
	updateTheme: (newTheme: string) => set({ theme: newTheme }),
}));
