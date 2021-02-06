# vuex-demo

**State:**

1. `state`是一个数据存储的仓库，所有的数据源都会存放在这里，就类似组件中的`data`

2. 在store中的state数据，可以在任意组件中通过 `this.$store.state`访问到，做到数据和视图层的解耦

**Getter:**

1. `getter`主要用于在获取数据源时，对数据进行加工后返回。

2. 通过Vuex的Getter，我们可以在Store中对数据做统一加工处理，利于日后的项目维护。

**Mutation:**

1. 通过`Mutation`我们可以对数据仓库中的数据进行修改，我们可以在组建中通过调用`this.$store.commit()`方法去调用对应的`Mutation`去修改数据

2. `Mutation`中只能执行同步的方法，如果需要执行异步方法，我们要使用`Action`

**Action:**

> Action和Mutation类似，区别在于: 1. Action提交的是mutation，而不是直接变更后的状态。 2. Action可以包含任意异步操作

1. `Action`和`Mutation`类似，它只是能够处理异步的情况，最终通过`commit()`函数调用Mutation去修改数据

2. 通过`this.$store.dispatch()`去调用Action的方法

**辅助:**

...mapGetters、...mapMutation、...mapActions，主要是通过ES6的语法简化代码书写。

## Store 模块化

> 如果我们将所有的数据都写入一个Store的state中，这时候我们获取，修改数据。随着项目不断变大，我们这个Store中的state和Mutation、Getter、Action的数量和Store代码行数就会爆炸性的增长。使得我们的Store变得维护困难。
> 这个时候我们可以Store模块化，通过Module整合各个模块，然后将Store挂在根组件下

- namespaced: true

## 参考

- <https://juejin.cn/post/6844903624414330893>
- <https://juejin.cn/post/6844903630517043214>
- <https://www.jianshu.com/p/b79d1c332a20>

## 访问

localhost:8080/store
