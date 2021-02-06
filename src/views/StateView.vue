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

export default {
  components: { SearchInput, SearchItem },
  data () {
    return {
      content: ''
    }
  },
  props: {},
  mounted () {
    // // state
    // console.log(this.$store.state.searchContent)

    // // getter
    // console.log(this.$store.getters.getSearchContent)

    // // mutation
    // // 通过this.$store.commit()方法修改state的searchContent参数
    // // 在payload中传递参数
    // this.$store.commit('changeSearchContent', '123')
    // console.log(this.$store.state.searchContent)

    // // action
    // this.$store.dispatch('changeSearchContentByAction', {
    //   searchContent: '321'
    // })
    // setTimeout(() => {
    //   console.log(this.$store.state.searchContent)
    // }, 5000)

    // state
    console.log(this.$store.state.searchInputStore.searchContent)

    // getter
    console.log(this.$store.getters['searchInputStore/getSearchContent'])

    // mutation
    // 通过this.$store.commit()方法修改state的searchContent参数
    // 在payload中传递参数
    this.$store.commit('searchInputStore/changeSearchContent', '123')
    // console.log(this.$store.state.searchContent)

    // action
    this.$store.dispatch('searchInputStore/changeSearchContentByAction', {
      searchContent: '321'
    })
    setTimeout(() => {
      // console.log(this.$store.state.searchContent)
    }, 5000)
  }

}
</script>

<style>
</style>
