/*
 * @Description:
 * @Autor: zzj
 * @Date: 2021-01-04 08:53:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-01-04 09:07:59
 */
import Vue from 'vue';
import Vuex from 'vuex';
// import storage from 'good-storage';//本地缓存插件
Vue.use(Vuex);
export default new Vuex.Store({
    state: { count: 0 },
});