import { create } from 'zustand';
import { Language } from '../types';

export const useLanguageStorage = create<Language>((set) => ({
	language: 'english',
	updateLanguage: (newLanguage: string) => set({ language: newLanguage }),
}));
