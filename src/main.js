import Vue from 'vue';
import store from '@/store';
import App from '@/App.vue';
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import components from '@/components/UI';
import TosterError from '@/components/UI/TosterError';

Vue.config.productionTip = false;

Vue.use(TosterError, { duration: 2500 });

const app = new Vue({
  store,
  vuetify,
  router,
  render: (h) => h(App),
});

components.forEach((component) => {
  Vue.component(component.name, component);
});

app.$mount('#app');
