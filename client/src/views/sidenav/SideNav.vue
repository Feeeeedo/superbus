<template>
	<div class="side-nav">
		<div class="menu-box">
			<dl class="menu no-extra">
				<dl class="menu-title"></dl>
			</dl>
		</div>
	</div>
</template>
<script>
export default {
  name: 'side-nav',
  components: {},
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">
.menu-box {
	.menu {
		padding-bottom: 6px;
		border-top: 1px solid #e7e7eb;
		margin-to: 6px;
		.no-extra {
			border-top-width: 0;
			margin-top: 13px;
		}
		.menu-title {
			position: relative;
			padding: 0 30px 0;
			width: auto;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			word-wrap: normal;
			line-height: 34px;
			color: #8d8d8d;
			margin-bottom: 0;
			.icon-menu {
				width: 18px;
				height: 18px;
				vertical-align: middle;
				display: inline-block;
				margin-right: 10px;
				margin-top: -0.2em;
			}
			.icon-menu.list {
				background-image: url('../../assets/iconfonts/sidenav/list.svg');
				background-size: 95% 95%;
				background-repeat: no-repeat;
				background-position: center;
			}
		}
	}
}
</style>
