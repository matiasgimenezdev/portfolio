import { useThemeStorage } from '../storage';

export function useTheme() {
	return {
		theme: useThemeStorage((state) => state.theme),
		updateTheme: useThemeStorage((state) => state.updateTheme),
	};
}
