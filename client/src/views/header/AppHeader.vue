<template>
	<div class="app-header">
		<div class="logo-nav">
			<!-- <div class="logo"></div> -->
			<div class="author"><p>Feeeeedo</p></div>
			<div class="title"><p>魔法盒</p></div>
		</div>
		<div class="tabs-nav">

		</div>
		<div class="func-nav">
			<div class="func-item avatar-item">
				<el-popover
					ref="userPopover"
					placement="bottom"
					width="120"
					popper-class="no-padding"
					trigger="hover">
					<div class="login-box">
						<div class="setting-info">
							<span class="info" v-on:click="handleResultClick($event)">用户信息</span>
							<span class="setting">设置</span>
						</div>
						<div class="logout-box">
							<span class="logout">注销</span>
						</div>
					</div>
				</el-popover>
				<div class="avatar" v-popover:userPopover>
					<img src="../../assets/img/avatar.png"/>
				</div>

			</div>
			<div class="func-item ad-item" v-on:click="handleResultClick">
				<div class="ad">
					<strong>Feeeeedo</strong>
				</div>
			</div>
			<el-popover
				ref="searchPopover"
				placement="bottom"
				width="250"
				trigger="focus">
				<div class="seach-result-box">
					<ul>
						<li v-on:click="handleResultClick('xxxx')">
							<el-tooltip effect="dark" content="Top Center xxx" placement="top">
								<span class="custom-tag primary">接口</span><span class="content">xxxx</span>
							</el-tooltip>
						</li>
						<li><span class="custom-tag primary">接口</span><span class="content">xxxx</span></li>
						<li><span class="custom-tag primary">接口</span><span class="content">xxxx</span></li>
						<li><span class="custom-tag primary">接口</span><span class="content">xxxx</span></li>
					</ul>
				</div>
			</el-popover>
			<div class="search-box">
				<el-input 
					v-popover:searchPopover
					v-model="searchValue"
					size="small"
					placeholder="查找接口|应用|公告"
					icon="search">
				</el-input>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  name: 'app-header',
  components: {},
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

<style lang="scss" scope>
	@import '../../css/constants.scss';

	.app-header {
		display: flex;
		height: 100%;
		background-color: $themeColor;
		>div{
			height: 100%;
		}
		.logo-nav {
			flex: 2;
			display: flex;
			>div {
				height: 100%;
			}
			.logo {
				width: 100px;
			}
			.author {
				width: 140px;
				p {
					height: 100%;
					line-height: 40px;
					text-align: right;
					font-size: 21px;
					font-weight: 600;
					color: $textWhite;
				}
			}
			.title {
				width: 60px;
				p {
					height: 100%;
					line-height: 45px;
					text-align: center;
					color: $textWhite;
					font-size: 12px;
				}
			}
		}
		.tabs-nav {
			flex: 3;
		}
		.func-nav {
			flex: 4;
			>div {
				height: 100%;
			}
			.search-box {
				float: right;
				margin-right: 40px;
				width: 220px;
				padding: 10px 0px;
				position: relative;
				.el-select .el-input {
					width: 75px;
				}
				.seach-result-box {
					position: absolute;
					width: 220px;
					top: 50px;
					box-shadow: 0px 0px 2px 2px #bbb;
					ul {
						width: 100%;
						li {
							width: 100%;
							line-height: 30px;
							border-bottom: 4px solid blue;
							.content {
								display: inline-block;
							}
						}
					}
				}
			}
			.func-item {
				float: right;
				.func-icon {
					width: 100%;
					height: 100%;
					background-size: 70% 70%;
					background-repeat: no-repeat;
					background-position: center;
					text-align: center;
					display: inline-block;
				}
			}
			.avatar-item {
				width: 50px;
				height: 50px;
				margin-right: 10px;
				position: relative;
				.avatar {
					width: 100%;
					height: 100%;
					padding: 7px;
					img {
						border-radius: 4px;
						width: 100%;
						height: 100%;
						cursor: pointer;
						box-shadow: 0px 0px 1px 1px #ccc6c6;
					}				
				}
				.login-box {
					position: absolute;
					top: 50px;
					right: -10px;
					width: 140px;
					box-shadow: 0 0 1px 1px #ccc6c6;
				}
			}
			.ad-item {
				margin-right: 10px;
				.ad {
					strong {
						line-height: 50px;
    				color: $textWhite;
					}
				}
			}
			.func-item:hover .func-icon{
				background-size: 80% 80%;
			}
			.func-item:hover .func-close {
				background-size: 55% 55%;
			}
		}
	}
	.seach-result-box {
		background-color: #fff;
		ul {
			width: 100%;
			li {
				width: 100%;
				padding: 4px 1px;
				padding-left: 2px;
				border-bottom: 1px solid #e7e8eb;
				.content {
					padding: 4px 5px;
					color: #a8a9ad;
				}
				cursor: pointer;
			}
			li:hover {
				background-color: #e6e3e3;
			}
		}
	}
	.login-box {
		.setting-info {
			height: 30px;
			display: flex;
			border-bottom: 1px solid #ccc6c6;
			>span {
				display: inline-block;
				background-color: #fff;
				cursor: pointer;
				text-align: center;
				line-height: 30px;
				font-size: 13px;
			}
			.setting {
				flex: 1;
			}
			.info {
				flex: 1;
				border-right: 1px solid #ccc6c6;
			}
		}
		.logout-box {
			height: 30px;
			span {
				font-size: 13px;
				text-align: center;
				line-height: 30px;
				display: inline-block;
				width: 100%;
				cursor: pointer;
				height: 30px;
				background-color: #fff;
			}
		}
	}
	.login-box span:hover{
		background-color: #e6e3e3;
	}

</style>
