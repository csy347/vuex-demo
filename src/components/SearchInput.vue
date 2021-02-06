<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      placeholder="请输入关键字"
      @input="sendEvent"
      v-model="searchContent"
    />
  </div>
</template>

<script>
import searchEvent from '../event/SearchEvent'

export default {
  data () {
    return {
      searchContent: ''
    }
  },
  props: {},
  methods: {
    sendEvent () { // 定义sendEvent方法，在input中监听onInput，并回调该方法
      /**
       * 通过导入的searchEvent调用$emit方法去发送数据消息。
       * 第一个参数为事件名，到时候我们要通过该事件名去接收数
       * 第二个参数为数据值，如果只有一个参数，我们可以直接传递该参数
       * 如果有两个及以上的参数，我们可以通过对象的形式去传递。
       */
      searchEvent.$emit('search', this.searchContent)

      // searchEvent.$emit('search', {
      //   content: this.searchContent,
      //   valTwo: 'valTwo'
      // })
    }
  }
}
</script>

<style>
</style>
