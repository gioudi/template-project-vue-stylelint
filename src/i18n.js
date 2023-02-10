import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    example: 'Hello',
  },
  es: {
    example: 'Hola',
  },
};

const i18n = new VueI18n({ locale: 'en', fallbackLocale: 'es', messages });

export default i18n;
