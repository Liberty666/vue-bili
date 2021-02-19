/*
 * @Description: 
 * @Autor: zzj
 * @Date: 2020-12-31 14:59:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-04 09:10:08
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
