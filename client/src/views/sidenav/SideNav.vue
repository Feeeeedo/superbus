<template>
	<div class="side-nav">
		<div class="menu-box">
			<dl class="menu no-extra">
				<dt class="menu-title"><i class="icon-menu list"></i>API自助平台</dt>
				<dl class="menu-item selected"><a href="">平台信息</a></dl>
				<dl class="menu-item"><a href="">API协议</a></dl>
				<dl class="menu-item"><a href="">API协议</a></dl>
			</dl>
			<dl class="menu no-extra">
				<dt class="menu-title"><i class="icon-menu list"></i>应用和接口</dt>
				<dl class="menu-item"><a href="">已上架应用</a></dl>
				<dl class="menu-item"><a href="">已上架应用</a></dl>
				<dl class="menu-item"><a href="">已上架接口</a></dl>
			</dl>
			<dl class="menu no-extra">
				<dt class="menu-title"><i class="icon-menu list"></i>管理</dt>
				<dl class="menu-item"><a href="">应用管理</a></dl>
				<dl class="menu-item"><a href="">接口管理</a></dl>
				<dl class="menu-item"><a href="">已上架应用</a></dl>
				<dl class="menu-item"><a href="">已上架接口</a></dl>
			</dl>
			<dl class="menu no-extra">
				<dt class="menu-title"><i class="icon-menu list"></i>统计</dt>
				<dl class="menu-item"><a href="">系統公告</a></dl>
				<dl class="menu-item"><a href="">系統公告</a></dl>
				<dl class="menu-item"><a href="">已上架应用</a></dl>
				<dl class="menu-item"><a href="">已上架应用</a></dl>
				<dl class="menu-item"><a href="">已上架接口</a></dl>
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
@import '../../css/constants.scss';
.side-nav {
	border-right: 1px solid #e7e7eb;
	.menu-box {
		.no-extra {
			border-top-width: 0;
			margin-top: 13px;
		}
		.menu {
			padding-bottom: 6px;
			margin-to: 6px;
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
			.menu-item {
				line-height: 34px;
				a {
					font-size: 14px;
					display: block;
					padding: 0 0 0 58px;
					width: auto;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					word-wrap: normal;
					color: #222;
				}
			}
			.menu-item:hover {
				background-color: #dde0ec;
			}
			.menu-item.selected{
				background-color: $themeColor;
			}
			.menu-item.selected a {
				color: #fff;
			}
		}
	}
}
</style>
