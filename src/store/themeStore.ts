import { create } from 'zustand';
import { Theme } from '../types';

const theme = localStorage.getItem('preferedTheme');

export const useThemeStore = create<Theme>((set) => ({
	theme: theme ? theme : 'light',
	updateTheme: (newTheme: string) => set({ theme: newTheme }),
}));
