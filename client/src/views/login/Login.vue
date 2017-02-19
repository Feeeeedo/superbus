<template>
<div class="app-login">
		<el-form 
			:model="loginForm" 
			:rules="loginRules" 
			ref="loginForm"
			:label-position="'right'" 
			label-width="60px">
			<el-form-item label="账号" prop="name">
			  <el-input v-model="loginForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
			  <el-input v-model="loginForm.password"></el-input>
			</el-form-item>
			<div class="button-box">
				<el-button type="primary" :loading="isLogining" @click="login">登录</el-button>
			</div>
		</el-form>
</div>
</template>
<script>
export default {
	name: 'app-login',
	components: {},
	data () {
		return {
			isLogining: false,
			loginForm: {
				name: '',
				password: ''
			},
			loginRules: {
				name: [
					{ required: true, message: '请填写登录账号', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请填写登录密码', trigger: 'blur' }
				]
			}
		}
	},
	methods: {
		login () {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					this.isLogining = true
					this.$router.push('/home/document')
				}
			})
		}
	}
}
</script>
<style lang="scss">
@import '../../css/constants.scss';
.app-login {
	position: absolute;
	width: 400px;
	height: 230px;
	margin-left: -200px;
	left: 50%;
	margin-top: -115px;
	top: 50%;
	border-radius: 5px;
	padding: 20px;
	padding-right: 30px;
	border: 1px solid #bbb;
}
.el-form .el-form-item label {
	color: $textColor;
}
.button-box {
	width: 100%;
	padding: 0 0 0 10px;
	button {
		width: 100%;
		cursor: pointer;
	}
}
</style>
