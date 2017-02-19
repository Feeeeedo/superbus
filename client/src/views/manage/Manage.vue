<template>
	<div class="manage">
    <div class="manage-main">
      <side-nav></side-nav>
      <main-nav></main-nav>
    </div>
	</div>
</template>
<script>
import MainNav from './mainnav/MainNav'
import SideNav from './sidenav/SideNav'
export default {
  name: 'manage',
  components: {
    MainNav,
    SideNav
  },
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc'],
      searchValue: ''
    }
  },
  methods: {
    handleResultClick (arg) {
      console.log(arg)
    }
  }
}
</script>
<style lang="scss">

@import '../../css/constants.scss';
.manage {
  padding: 36px 0 88px;
  background-color: #e7e8eb;
  .manage-main {
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
}
</style>
