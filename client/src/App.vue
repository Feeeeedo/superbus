<template>
  <div id="app">
    <router-view class="view"></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
