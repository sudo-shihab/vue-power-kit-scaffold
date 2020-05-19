//
// ─── NPM IMPORTS ────────────────────────────────────────────────────────────────
//
import Vue from 'vue';
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── APP IMPORTS ────────────────────────────────────────────────────────────────
//
import App from './App.vue';
import router from './router';
import store from './store';
// ────────────────────────────────────────────────────────────────────────────────

Vue.config.productionTip = false;
console.log('test');

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
