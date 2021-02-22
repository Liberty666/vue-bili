<!--
 * @Description: 
 * @Autor: zzj
 * @Date: 2021-02-07 14:51:07
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-22 09:15:31
-->
<template>
  <div>
    <!-- 第一种调用方式this.$store.state.count -->
    <!-- <h3>当前最新的count值为：{{ $store.state.count }}</h3> -->
    <h3>{{ $store.getters.showNum }}</h3>
    <button @click="handlerAdd">+1</button>
    <button @click="handler2">+N</button>
    <button @click="handler3">+1 Asycn</button>
    <button @click="handler4">+N Async</button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handlerAdd() {
      // this.$store.state.count++; //不合法的
      this.$store.commit('add'); //触发mutations的第一种方法（调用store中的add函数）
    },
    handler2() {
      this.$store.commit('addN', 3); //commit的作用就是调用某个mutation函数
    },
    handler3() {
      //触发actions的第一种方式
      this.$store.dispatch('addAsync'); // 异步count自增加一
    },
    handler4() {
      this.$store.dispatch('addNAsync', 5);
    }
  }
};
</script>
