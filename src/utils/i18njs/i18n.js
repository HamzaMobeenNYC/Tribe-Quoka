import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../locale/en/translation.json";
import ar from "../../locale/ar/translation.json";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
});

export default i18n;