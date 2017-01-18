<template>
  <div id="app">
    <application></application>
  </div>
</template>

<script>
import Application from './views/Application'
export default {
  name: 'app',
  components: {
    Application
  },
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
