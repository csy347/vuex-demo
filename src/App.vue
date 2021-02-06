<template>
  <div id="app">
    <h1>{{ name }}</h1>
    <button @click="modifyNameAction">修改名字</button>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      name: 'moduleA/detail'
    })
  },
  methods: {
    // ...mapActions(['callAction']),
    ...mapActions({
      call: 'moduleA/callAction'
    }),

    modifyNameAction () {
      this.call()
    }
  }
}
</script>
