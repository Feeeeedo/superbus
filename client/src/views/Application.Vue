<template>
	<div class="application">
		<app-header></app-header>
		<app-main></app-main>
		<app-footer></app-footer>
	</div>
</template>

<script>
import AppHeader from './header/AppHeader'
import AppMain from './main/AppMain'
import AppFooter from './footer/AppFooter'
export default {
  name: 'application',
  components: {
		AppHeader,
		AppMain,
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
.application {
	width: 1100px;
	height: 650px;
	margin: 0 auto;
	box-shadow: 0px 0px 1px 1px #ccc;
	position: relative;
	.app-header {
		height: 50px;
		background-color: $themeColor;
	}
	.app-main {
		height: 550px;
	}
	.app-footer {
		height: 50px;
		position: absolute;
		bottom: 0px;
		left: 0px;
	}
}
</style>
