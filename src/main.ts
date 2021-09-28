import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import khakitron from './khakitron';

Vue.config.productionTip = false;

new Vue({
  khakitron,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
