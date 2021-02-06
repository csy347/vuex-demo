<template>
  <div id="app">
    <!-- <h1>{{ name }}</h1> -->
    <!-- <button @click="modifyNameAction">修改名字</button> -->
    <router-view />
  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    // ...mapState(['name'])
  },
  methods: {
    // ...mapActions(['modifyName']),
    // modifyNameAction () {
    //   this.modifyName('李四')
    // }
  }
}
</script>
