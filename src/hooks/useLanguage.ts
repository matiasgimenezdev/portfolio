import { useLanguageStore } from '../context';

export function useLanguage() {
	const language = useLanguageStore((state) => state.language);
	const updateLanguage = useLanguageStore((state) => state.updateLanguage);

	const handleLanguageSwitch = () => {
		if (language == 'english') {
			updateLanguage('spanish');
		} else {
			updateLanguage('english');
		}
	};
	return {
		language,
		handleLanguageSwitch,
	};
}
