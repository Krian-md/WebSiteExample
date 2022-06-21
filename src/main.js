import Vue from 'vue'
import store from '@/store'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import router from '@/router'
import components from '@/components/UI'

Vue.config.productionTip = false

const app = new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
});

components.forEach(component => {
  Vue.component(component.name, component);
});

app.$mount('#app')
