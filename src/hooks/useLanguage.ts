import { useLanguageStorage } from '../storage';

export function useLanguage() {
	const language = useLanguageStorage((state) => state.language);
	const updateLanguage = useLanguageStorage((state) => state.updateLanguage);

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
