<template>
	<div class="app">
		<div class="header"><app-header></app-header></div>
		<router-view class="router-document-manage"></router-view>
		<div class="footer"><app-footer></app-footer></div>
	</div>
</template>

<script>
import AppHeader from './header/AppHeader'
import AppFooter from './footer/AppFooter'
export default {
  name: 'application',
  components: {
		AppHeader,
		AppFooter
  },
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">

@import '../css/constants.scss';
.app {
	position: relative;
	min-width: 1000px;
	.header {
		height: 50px;
		border-bottom: 1px solid #d9dadc;
	}
	.footer {
		height: 50px;
		position: absolute;
		bottom: 0px;
		left: 0px;
	}
}
</style>
