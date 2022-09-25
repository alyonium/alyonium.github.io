import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueKonva from 'vue-konva';
import { backendUrl } from '@/resources';
import App from './App';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.use(VueKonva);
Vue.use(VueI18n);
Vue.config.productionTip = false;

Vue.prototype.$backendUrl = backendUrl;

let userLang = window.navigator.language || window.navigator.userLanguage;

if (localStorage.getItem('locale')) {
  userLang = localStorage.getItem('locale');
} else if (userLang.includes('ru')) {
  localStorage.setItem('locale', 'ru');
} else {
  localStorage.setItem('locale', 'en');
}

const i18n = new VueI18n({
  locale: localStorage.getItem('locale'),
  pluralizationRules: {
    ru(choice, choicesLength) {
      if (choice === 0) {
        return 0;
      }

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      if (choicesLength < 4) {
        return (!teen && endsWithOne) ? 1 : 2;
      }
      if (!teen && endsWithOne) {
        return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return (choicesLength < 4) ? 2 : 3;
    },
  },
});

new Vue({
  router,
  vuetify,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
