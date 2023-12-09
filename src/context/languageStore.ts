import { create } from 'zustand';
import { Language } from '../types';

export const useLanguageStore = create<Language>((set) => ({
	language: 'english',
	updateLanguage: (newLanguage: string) => set({ language: newLanguage }),
}));
