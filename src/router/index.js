/*
 * @Description:
 * @Autor: zzj
 * @Date: 2021-01-04 08:53:53
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-07 14:49:52
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../Home.vue';
Vue.use(VueRouter);
const routes = [{
    path: "/",
    name: "Home",
    meta: {
        index: 0,
        title: "主页"
    },
    component: Home
}];
const router = new VueRouter({
    routes,
});
export default router
