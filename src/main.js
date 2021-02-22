/*
 * @Description:
 * @Autor: zzj
 * @Date: 2020-12-31 14:59:08
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-19 10:21:05
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app');
