import { useState } from 'react';
import { LanguageContext } from './';

export function LanguageProvider({ children }) {
	const [language, setLanguage] = useState('spanish');

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}
