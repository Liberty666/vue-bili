<!--
 * @Description: 
 * @Autor: zzj
 * @Date: 2021-02-07 14:51:35
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-22 09:19:00
-->
<template>
  <div>
    <!-- <h3>当前最新的count值为：{{ count }}</h3> -->
    <h3>{{ showNum }}</h3>
    <button @click="handlerSub">-1</button>
    <button @click="subN(3)">-N</button>
    <button @click="handler3">-1 Async</button>
    <button @click="subAsync">-1 Async 简写</button>
    <button @click="subNAsync(5)">-N Async</button>
  </div>
</template>
<script>
// 第二种调用方式
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(['sub', 'subN']), //映射mutations
    ...mapActions(['subAsync', 'subNAsync']), //映射actions
    handlerSub() {
      this.sub();
    },
    handler3() {
      this.subAsync(); //调用mapActions映射出来的actions函数
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  }
};
</script>
