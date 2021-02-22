/*
 * @Description:
 * @Autor: zzj
 * @Date: 2021-01-04 08:53:46
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-22 09:13:27
 */
import Vue from 'vue';
import Vuex from 'vuex';
// import storage from 'good-storage';//本地缓存插件
Vue.use(Vuex);
export default new Vuex.Store({
  state: { count: 0 },
  mutations: {
    //只有mutations中定义的函数才有权力修改state中的数据；
    //mutations中不能写异步代码，会造成追踪不到数据；
    add(state) {
      state.count++; //变更状态（改变store中的count值）
    },
    addN(state, step) {
      state.count += step;
    },
    sub(state) {
      state.count--;
    },
    subN(state, step) {
      state.count -= step;
    }
  },
  actions: {
    addAsync(context) {
      //通过形参context调用触发commit
      setTimeout(() => {
        // 在actions中不能直接修改state中的数据
        context.commit('add'); //通过commit异步调用mutations中的函数
      }, 1000);
    },
    addNAsync(context, step) {
      //传参
      setTimeout(() => {
        context.commit('addN', step);
      }, 1000);
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub');
      }, 1000);
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step);
      }, 1000);
    }
  },
  getters: {
    showNum(state) {
      return '当前最新的数量【' + state.count + '】';
    }
  },
  modules: {}
});
