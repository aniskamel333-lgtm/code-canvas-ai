import { create } from 'zustand';
import { Language, translations } from '../lib/translations';

interface TranslationStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
}

export const useTranslation = create<TranslationStore>((set, get) => ({
  language: 'ar',
  setLanguage: (lang) => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    set({ language: lang });
  },
  t: (path: string) => {
    const { language } = get();
    const keys = path.split('.');
    let result: any = translations[language];
    
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    
    return result;
  }
}));