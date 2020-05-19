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
console.log('test 3');
console.log('test');
console.log('test 3');

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
