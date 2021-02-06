<template>
  <span class="item">{{ content }}</span>
</template>

<script>

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
  mounted () { }
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
