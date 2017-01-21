<template>
	<div class="main-nav">
		<router-view class="view"></router-view>
	</div>
</template>
<script>
export default {
  name: 'main-nav',
  components: {},
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">
.main-content {
}
</style>
