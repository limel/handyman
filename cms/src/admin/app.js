import ckeditor5Dll from "ckeditor5/build/ckeditor5-dll.js";
import ckeditor5MrkdownDll from "@ckeditor/ckeditor5-markdown-gfm/build/markdown-gfm.js";


const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    // 'id',
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],   
  translations: {
    en: {
      "Auth.form.welcome.title": "Welcome to Handyman",
      "Auth.form.welcome.subtitle": "Enter your username and password to enter",
      "app.components.LeftMenu.navbrand.title": "Handyman",
      "app.components.LeftMenu.navbrand.workplace": "Admin panel",
    },
  },

  theme: {
    colors: {
      primary700: "#FEF9CC",
      primary600: "#FEF9CC",
      alternative700: "#FEF9CC",
    }
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
