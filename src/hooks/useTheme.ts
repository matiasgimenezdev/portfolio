import { useThemeStore } from '../store';

export function useTheme() {
	return {
		theme: useThemeStore((state) => state.theme),
		updateTheme: useThemeStore((state) => state.updateTheme),
	};
}
