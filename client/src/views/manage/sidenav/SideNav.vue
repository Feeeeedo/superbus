<template>
	<div class="side-nav">
		<div class="menu-box">
			<dl v-for="(item, index) in SideNavArr" :class="{menu: true, 'no-extra': index === 0}">
				<dt class="menu-title">
					<i class="icon-menu list"></i>{{item.title}}
				</dt>
				<dd v-for="(itemIn, indexIn) in item.child" 
						:class="{'menu-item': true, selected: selectedName === itemIn.en}"
						@click="navigateTo(itemIn)">
					<a href="javascript:void(0);">{{itemIn.ch}}</a>
				</dd>
			</dl>
		</div>
	</div>
</template>
<script>
import { SideNavArr } from '../../../constants/sidenav'
// import _ from 'lodash'
/* eslint-disable */
export default {
  name: 'side-nav',
  components: {},
  data () {
    return {
      SideNavArr: SideNavArr,
      selectedName: 'abstract'
    }
  },
  watch: {
    '$route.fullPath': function (newVal) {
      this.SideNavArr.map((dl) => {
      	dl.child.map((dd) => {
      		if (this.$route.fullPath.indexOf(dd.path) >= 0) {
      			this.selectedName = dd.en
      		}
      	})
      })
    }
  },
  create () {
    console.log(this.$route)
  },
  mounted () {
  	this.SideNavArr.map((dl) => {
  		dl.child.map((dd) => {
  			if (this.$route.fullPath.indexOf(dd.path) >= 0) {
  				this.selectedName = dd.en
  			}
  		})
  	})
  },
  methods: {
  	navigateTo (item) {
  		this.$router.push(item.path)
  	}
  }
}
</script>

<style lang="scss">
@import '../../../css/constants.scss';
.side-nav {
	border-right: 1px solid #e7e7eb;
	.menu-box {
		.menu {
			padding-bottom: 6px;
			margin-to: 6px;
			border-top: 1px solid #e7e7eb;
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
					background-image: url('../../../assets/iconfonts/sidenav/list.svg');
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
				background-color: #e7e8eb;
			}
			.menu-item.selected{
				background-color: $themeColor;
			}
			.menu-item.selected a {
				color: #fff;
				text-decoration: none;
			}
		}
		.no-extra {
			border-top-width: 0;
			margin-top: 13px;
		}
	}
}
</style>
