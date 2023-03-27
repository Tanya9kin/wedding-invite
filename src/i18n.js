import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import enTranslation from "./locales/en/translation.json";
import uaTranslation from "./locales/ua/translation.json";
import heTranslation from "./locales/he/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ua: {
    translation: uaTranslation,
  },
  he: {
    translation: heTranslation,
  },
};

export default i18n
  //   .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: true,
    load: "languageOnly",
    supportedLngs: ["en", "he", "ua"],
    fallbackLng: "en",
    detection: {
      order: ["htmlTag", "cookie", "path"],
      caches: ["cookie"],
    },
    // backend: {
    //   loadPath: "/locales/{{lng}}/translation.json",
    // },
    react: { useSuspense: false },
  });
