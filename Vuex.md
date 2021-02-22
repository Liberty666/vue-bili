**Vuex**

##### 一、使用 vuex 统一管理状态的好处

1.能够再 vuex 中集中管理共享的数据，易于开发和后期维护

2.能够高效的实现组件之间的数据共享，提高开发效率

3.存在 vuex 中的数据都是响应式的，能够实时保持数据与页面的同步

##### store 的使用：

1.安装 vuex

2.导入 vuex 并使用（Vue.use(Vuex))

3.new 一个 vuex 的实例对象，并暴露出去 

```
export default new Vuex.Store({
    state:{

    },mutations:{

    },actions:{

    }
});
```

4.将创建出来的 store 实例对象挂在到 vue 实例中（根组件）

访问 State 中数据的两种方式：

1.this.\$store.state.属性

2.从 vuex 中按需导入 mapState 函数

```
import { mapState } from 'vuex'
```

将当前组件需要的全局数据映射为当前组件的 computed 计算属性(count 为 store 中的属性)

```
computed:{
...mapState(['count'])
}
```



#### Mutation

通过 Mutation 变更 Store 中的数据
vuex 中不能直接修改 store 中的数据，只能通过 mutation 变更 store 中的数据

***mutations中不能写异步代码，会造成追踪不到数据***

**触发mutations的两种方式：**

1.通过 this.\$store.commit("add");调用 vuex 中 mutations 中的函数

2.在组件中

```
//1.从vuex中按需导入mapMutations函数
import { mapMutations } from 'vuex';
```

通过刚才导入的mapMutations函数，将需要的mutations函数，映射为当前组件的methods方法：

```
//2.将指定的mutations函数，映射为当前组件的mehtods函数
methods:{
	...mapMutations(['add','addN']);
	this.add();//调用
	this.addN(3);//传参
}
```

**可以在触发 mutations 时传递参数：**
定义 Mutation

```
const store = new Vuex.Store({
  state:{
​    count:0
  },
  mutations:{
​    addN(state,step){
​      state.count +=step;
​    }
  }
})
```

触发 mutation

```
methods:{
    handleAdd(){
    	//在调用commit函数，触发mutations时携带参数
    	this.$store.commit('addN',3);
    }
}
```

#### Action

**1.Action用于处理异步任务**

如果通过异步操作变更数据，必须通过Action，而不能使用Mutation，但是再Action中还是要通过触发Mutation的方式间接改变数据。

```
export default new Vuex.Store({
	state: { count: '0' },
	mutations: {
	//mutations中不能写异步代码，会造成追踪不到数据
        add(state) {
          state.count++;
        }
	},
   	actions: {
   		addAsync(context) {
          //通过形参context调用触发commit
          setTimeout(() => {
            context.commit('add'); //通过commit异步调用mutations中的函数
          }, 1000);
        }
   	}
});
```

触发Action

```
methods:{
	handler3() {
   //触发actions的第一种方式
   this.$store.dispatch('addAsync');//异步count自增加1
  }
}
```

**2.触发actions异步任务时携带参数：**

```
mutations: {
    //mutations中不能写异步代码，会造成追踪不到数据
    addN(state,step) {
      state.count+=step;
    }
},
actions: {
    addAsync(context，step) {
      setTimeout(() => {
        context.commit('addN',step);//调用mutations中的函数addN
      }, 1000);
    }
}
```

触发Action

```
methods:{
	handler3() {
   this.$store.dispatch('addAsync',5);//传递参数
  }
}
```

**触发Actions的两种方式：**

1.通过dispatch触发actions中的函数

```
//触发actions的第一种方式
this.$store.dispatch('addAsync');
```

2.在组件中

```
//1.从vuex中按需导入mapActions函数
import { mapActions } from 'vuex';
```

通过刚才导入的mapActions函数，将需要的actions函数，映射为当前组件的methods方法：

```
//2.将指定的actions函数，映射为当前组件的methods函数
methods:{
	...mapActions(['addAsync','addNAsync']);
	this.addAsync();
}
```

##### Vuex核心概念

**Getter**

Getter用于对store中的数据进行**加工处理或形成新的数据**。

1.getter可以对store中已有的数据加工处理之后形成新的数据，类似Vue的计算属性。

2.Store中数据发生变化，Getter的数据也会跟着变化。

```
//定义Getter
export default new Vuex.Store({
  state: { count: 0 },
  getters:{
  	showNum:state=>{
  		return '当前最新的数量值是【'+state.count+'】'
  	}
  }
  });
```

使用getters的**第一种方式：**

```
this.$store.getters.showNum
```

**第二种方式：**

```
import { mapGetters } from 'vuex';
computed:{
	...mapGetters(['showNum'])
}
```







**总结：**

1.(1)commit作用：触发某个mutations；(2)mapMutations映射mutations中的函数为当前组件的函数

2.(1)dispatch作用：触发某个actions；(2)mapActions映射actions中的函数为当前组件的函数

3.(1)getters作用：触发某个getters；(2)mapGetters映射getters中的函数为当前组件的计算属性