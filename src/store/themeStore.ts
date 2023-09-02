import { create } from 'zustand';
import { Theme } from '../types';

let theme: string = localStorage.getItem('preferedTheme') ?? '';

if (!theme) {
	const darkModeMediaQuery = window.matchMedia(
		'(prefers-color-scheme: dark)'
	);
	theme = darkModeMediaQuery.matches ? 'dark' : 'light';
}

export const useThemeStore = create<Theme>((set) => ({
	theme: theme,
	updateTheme: (newTheme: string) => set({ theme: newTheme }),
}));

console.log();
