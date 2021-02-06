<template>
  <div>
    <search-input />
    <div>
      <search-item :itemContent="content" />
      <search-item itemContent="热门搜索2" />
      <search-item itemContent="热门搜索3" />
    </div>
    <div>{{ content }}</div>
  </div>
</template>

<script>
import SearchInput from '../components/SearchInput.vue'
import SearchItem from '../components/SearchItem.vue'
import searchEvent from '../event/SearchEvent.js'

export default {
  components: { SearchInput, SearchItem },
  data () {
    return {
      content: '输入结果'
    }
  },
  props: {},
  mounted () {
    /**
     * 在mounted接受数据消息，$on接受两个参数。
     * 第一个参数是消息事件名，应该与发送数据消息的第一个参数相同，否则接收不到数据消息
     * 第二个参数是一个函数，对数据消息事件做处理；该函数带一个参数，则是数据。
     */
    searchEvent.$on('search', (val) => {
      this.content = val

      // // 如果数据传递的是对象形式
      // this.content = val.content
    })
  }
}
</script>

<style>
</style>
