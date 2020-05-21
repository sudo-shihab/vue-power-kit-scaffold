/*
 
                                                                                                                  
 .s    s.  .s    s.  .s5SSSs.      .s5SSSs.  .s5SSSs.  .s s.  s.  .s5SSSs.  .s5SSSs.      .s    s.  s.  .s5SSSSs. 
       SS.       SS.       SS.           SS.       SS.    SS. SS.       SS.       SS.           SS. SS.    SSS    
 sS    S%S sS    S%S sS    `:;     sS    S%S sS    S%S sS S%S S%S sS    `:; sS    S%S     sS    S%S S%S    S%S    
 SS    S%S SS    S%S SSSs.         SS .sS::' SS    S%S SS S%S S%S SSSs.     SS .sS;:'     SSSSs.S:' S%S    S%S    
  SS   S%S SS    S%S SS            SS        SS    S%S SS S%S S%S SS        SS    ;,      SS  "SS.  S%S    S%S    
  SS   `:; SS    `:; SS            SS        SS    `:; SS `:; `:; SS        SS    `:;     SS    `:; `:;    `:;    
   SS  ;,. SS    ;,. SS    ;,.     SS        SS    ;,. SS ;,. ;,. SS    ;,. SS    ;,.     SS    ;,. ;,.    ;,.    
    `:;;:' `:;;;;;:' `:;;;;;:'     `:        `:;;;;;:' `:;;:'`::' `:;;;;;:' `:    ;:'     :;    ;:' ;:'    ;:'    
                                                                                                                  
 
*/

/**
 * @license
 * Copyright NAME. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

//
// ────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: M A I N   J S   F I L E   -   E N T R Y   F I L E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

// npm packages
import Vue from 'vue';

// app imports
import App from './App.vue';
import router from './router';
import store from './store';
//
// ────────────────────────────────────────────────────────────── IMPORT ENDS ─────
//

//
// ─── SCRIPT LOGIC ───────────────────────────────────────────────────────────────
//

// config for prod wrt to vue cli
Vue.config.productionTip = false;

// intialize vue instance
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
//
// ──────────────────────────────────────────────────────── SCRIPT LOGIC ENDS ─────
//

// ────────────────────────────────────────────────────────────────────────────────
