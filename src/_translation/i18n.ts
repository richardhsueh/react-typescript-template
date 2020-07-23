import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enMessage from './locales/en/translation.json';
import tcMessage from './locales/tc/translation.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: "en",
  ns: ['translation'],
  defaultNS: 'translation',
  debug: true,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: {
    en: { translation: enMessage },
    tc: { translation: tcMessage },
  },
  react: {
    wait: true,
    useSuspense: true,
  },
});

export default i18n;
