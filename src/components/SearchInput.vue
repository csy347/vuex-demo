<template>
  <div>
    <input
      type="text"
      name=""
      id=""
      placeholder="搜索内容"
      v-model="searchContent"
    />
  </div>
</template>

<script>

export default {
  data () {
    return {
      searchContent: ''
    }
  },
  props: {},
  methods: {},
  mounted () {
    // console.log('搜索页' + this.$store.state.searchContent)
  }
}
</script>

<style>
</style>
