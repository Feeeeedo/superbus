<template>
	<div class="application">
		<div class="header"><app-header></app-header></div>
		<div class="main"><app-main></app-main></div>
		<div class="footer"><app-footer></app-footer></div>
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
	position: relative;
	.header {
		height: 50px;
		border-bottom: 1px solid #d9dadc;
	}
	.main {
		padding: 36px 0 88px;
		background-color: #e7e8eb;
	}
	.footer {
		height: 50px;
		position: absolute;
		bottom: 0px;
		left: 0px;
	}
}
</style>
