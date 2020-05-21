/**
 * @license
 * Copyright NAME. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

//
// ────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R O U T E R   M O D U L E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
// npm packages
import Vue from 'vue';
// app imports
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
//
// ────────────────────────────────────────────────────────────── IMPORT ENDS ─────
//

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

/**
 * @description - A first class function to encapsulate routes config
 * @param  {Array} {routes}
 */
const router = new VueRouter({
  routes
});

export default router;
// ────────────────────────────────────────────────────────────────────────────────
