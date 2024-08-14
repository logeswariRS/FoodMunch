import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import vuetify from './plugins/vuetify';
import Axios from 'axios';


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  Axios,
  store,
  render: h => h(App)
}).$mount('#app');
