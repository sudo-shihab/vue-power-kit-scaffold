/*
 
                                                                               
  #    # #    # ######    #####   ####  #    # ###### #####     #    # # ##### 
  #    # #    # #         #    # #    # #    # #      #    #    #   #  #   #   
  #    # #    # #####     #    # #    # #    # #####  #    #    ####   #   #   
  #    # #    # #         #####  #    # # ## # #      #####     #  #   #   #   
   #  #  #    # #         #      #    # ##  ## #      #   #     #   #  #   #   
    ##    ####  ######    #       ####  #    # ###### #    #    #    # #   #   
                                                                               
 
*/

/**
 * @license
 * Copyright NAME. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

//
// ──────────────────────────────────────────────────────────── I ──────────
//   :::::: E N T R Y   F I L E   M O D U L E : :  :   :    :     :
// ──────────────────────────────────────────────────────────────────────
//

//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//
// NPM PACKAGES
import Vue from 'vue';

// APP PACAKGES
import App from './App.vue';
import router from './router';
import store from './store';
// ────────────────────────────────────────────────────────────────────────────────

//
// ─── SCRIPT LOGIC ───────────────────────────────────────────────────────────────
//

// CONFIG FOR PROD TIPS
Vue.config.productionTip = false;

// INTIALIZE VUE INSTANCE
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
// ────────────────────────────────────────────────────────────────────────────────
