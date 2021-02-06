<template>
  <span class="item">{{ content }}</span>
</template>

<script>
import searchEvent from '../event/SearchEvent.js'

export default {
  data () {
    return {
      content: this.itemContent
    }
  },
  props: {
    itemContent: {
      type: String,
      required: true
    }
  },
  mounted () {
    /**
     * 在mounted接收数据消息，$on接收两个参数。
     * 第一个参数是消息事件名，应该与发送数据消息的第一个参数相同，否则接收不到数据消息
     * 第二个参数是一个函数，对数据消息事件做处理；该函数带一个参数，则是数据。
     */
    searchEvent.$on('search', (val) => {
      this.content = val
    })
  }
}
</script>

<style lang="scss">
.item {
  background-color: #f5f5f5;
  outline: 1px solid red;
  padding: 30px 5px;
  line-height: 20px;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
}
</style>
