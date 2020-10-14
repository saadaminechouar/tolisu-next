import { Locales } from "./locales";

import en from "./en.json";

export const messages = {
    [Locales.EN]: en,
};

// const lang = document.documentElement.getAttribute("lang");
// const locale = lang?.toUpperCase();
export const defaultLocale = Locales["EN"];
