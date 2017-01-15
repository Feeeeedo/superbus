<template>
	<div class="app-header">
		<div class="logo-nav">
			<!-- <div class="logo"></div> -->
			<div class="author"><p>Feeeeedo</p></div>
			<div class="title"><p>魔法盒</p></div>
		</div>
		<div class="search-nav">

		</div>
		<div class="func-nav">
			<div class="func-item">
				<i class="func-icon func-close"></i>
			</div>
			<div class="func-item">
				<i class="func-icon func-max"></i>
			</div>
			<div class="func-item">
				<i class="func-icon func-min"></i>
			</div>
			<div class="func-item">
				<i class="func-icon func-setting"></i>
			</div>
			<div class="func-item">
				<i class="func-icon func-skin"></i>
			</div>
			<div class="func-item">
				<i class="func-icon func-user"></i>
			</div>
			<div class="search-box">
				<input type="text" placeholder="搜索应用或者接口" />
				<i class="search-icon"></i>
				<div class="seach-result-box">
					<div class="result-box-block">
						<p class="type-title">应用</p>
						<p class="no-result">未搜索到相关应用</p>
					</div>
					<div class="result-box-block">
						<p class="type-title">接口</p>
						<p class="no-result">未搜索到相关接口</p>
					</div>
					<div class="result-box-block">
						<p class="type-title">公告</p>
						<p class="no-result">未搜索到相关公告</p>
					</div>
				</div>
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
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">
	.app-header {
		display: flex;
		height: 100%;
		>div{
			height: 100%;
		}
		.logo-nav {
			flex: 1;
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
					color: #fff;
				}
			}
			.title {
				width: 60px;
				p {
					height: 100%;
					line-height: 45px;
					text-align: center;
					color: #fff;
					font-size: 12px;
				}
			}
		}
		.func-nav {
			flex: 1;
			>div {
				height: 100%;
			}
			.search-box {
				float: right;
				margin-right: 40px;
				width: 220px;
				padding: 12px 0px;
				position: relative;
				input {
					height: 100%;
					border-radius: 2px;
					outline: none;
					padding: 0 5px;
					color: #545252;
					width: 100%;
				}
				.search-icon {
					position: absolute;
					right: 0px;
					top: 14px;
					background-image: url('../../assets/iconfonts/search.svg');
					background-size: 95% 95%;
					background-repeat: no-repeat;
					background-position: center;
					width: 26px;
					height: 26px;
					text-align: center;
					display: inline-block;
				}
				.seach-result-box {
					position: absolute;
					width: 220px;
					top: 50px;
					box-shadow: 0px 0px 2px 2px #bbb;
					background-color: #fff;
					.result-box-block {
						width: 100%;
						p.type-title {
							height: 25px;
							line-height: 25px;
							font-size: 14px;
							padding-left: 10px;
							color: #545252;
							background-color: #f1eded;
						}
						.no-result {
							height: 40px;
							font-size: 13px;
							line-height: 40px;
							color: #929090;
							text-align: center;
						}
					}
				}
				.seach-result-box::after {
					content:""; 
					display:block; 
					width:0; 
					height:0; 
					position:absolute; 
					left:105px; 
					top:-20px; 
					border-left:10px solid transparent; 
					border-right:10px solid transparent; 
					border-top:10px solid transparent; 
					border-bottom:10px solid #FFF;
				}
			}
			.func-item {
				float: right;
				width: 30px;
				height: 50px;
				cursor: pointer;
				.func-icon {
					width: 100%;
					height: 100%;
					background-size: 70% 70%;
					background-repeat: no-repeat;
					background-position: center;
					text-align: center;
					display: inline-block;
				}
				.func-setting {
					background-image: url('../..//assets/iconfonts/setting.svg');
				}
				.func-user {
					background-image: url('../..//assets/iconfonts/user.svg');
				}
				.func-close {
					background-image: url('../..//assets/iconfonts/close.svg');
					background-size:50% 50%;
				}
				.func-min {
					background-image: url('../..//assets/iconfonts/min.svg');
					padding: 5px 0;
				}
				.func-max {
					background-image: url('../..//assets/iconfonts/max.svg');
				}
				.func-skin {
					background-image: url('../..//assets/iconfonts/skin.svg');
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
</style>
