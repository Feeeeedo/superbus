<template>
	<div class="app-main">
		<side-nav></side-nav>
		<main-nav></main-nav>
	</div>
</template>
<script>
import MainNav from '../mainnav/MainNav'
import SideNav from '../sidenav/SideNav'

export default {
  name: 'app-main',
  components: {
		MainNav,
		SideNav
  },
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">
.app-main {
	overflow-y: scroll;
	background-color: #fff;
	display: flex;
	max-width: 1200px;
	margin: 0 auto;
	.main-nav {
		height: 100%;
		flex: 1;
	}
	.side-nav {
		width: 230px;
		height: 100%;
	}
}
</style>
