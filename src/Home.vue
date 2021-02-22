<!--
 * @Description: 
 * @Autor: zzj
 * @Date: 2021-01-04 09:31:01
 * @LastEditors: zzj
 * @LastEditTime: 2021-02-19 10:14:59
-->
<template>
  <div>
    <my-addition></my-addition>
    <p>------------------------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>
<script>
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
export default {
  data() {
    return {};
  },
  components: {
    'my-addition': Addition,
    'my-subtraction': Subtraction
  }
};
</script>
