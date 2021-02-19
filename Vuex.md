Vuex

##### 一、使用vuex统一管理状态的好处

1.能够再vuex中集中管理共享的数据，易于开发和后期维护

2.能够高效的实现组件之间的数据共享，提高开发效率

3.存在vuex中的数据都是响应式的，能够实时保持数据与页面的同步

##### store的使用：

1.安装vuex

2.导入vuex  使用（Vue.use(Vuex))

3.new一个vuex的实例对象，并暴露出去 export default new Vuex.Store({

state:{

},mutations:{

},actions:{

}

});

4.将创建出来的store实例对象挂在到vue实例中（根组件）



访问State中数据的两种方式：

1.this.$store.state.属性

2.从vuex中按需导入mapState函数

import {mapState} from 'vuex'  

将当前组件需要的全局数据映射为当前组件的computed计算属性(count为store中的属性)

computed:{

​	...mapState(['count'])

}







通过Mutation变更Store中的数据





