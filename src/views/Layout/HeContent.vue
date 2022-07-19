<template>
	<div>
		<el-container>
			<el-header>
				<div class="header-left">
					<div class="shouqi" @click="isClickCllapse">
						<svg class="icon" aria-hidden="true">
							<use :xlink:href="isCicon"></use>
						</svg>
					</div>
					<el-breadcrumb separator-class="el-icon-arrow-right">
						<el-breadcrumb-item>首页</el-breadcrumb-item>
					</el-breadcrumb>
				</div>
				<div class="tuoxian">
					<el-dropdown>
						<span class="el-dropdown-link">
							<el-avatar
								style="margin-right: 5px"
								:src="`https://q1.qlogo.cn/g?b=qq&nk=${QQ}&s=640`"
							></el-avatar>
							<span>admin</span>
							<i class="el-icon-arrow-down el-icon--right"></i>
						</span>
						<el-dropdown-menu slot="dropdown">
							<el-dropdown-item>个人中心</el-dropdown-item>
							<el-dropdown-item divided>退出</el-dropdown-item>
						</el-dropdown-menu>
					</el-dropdown>
				</div>
			</el-header>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<script>
export default {
	props: ['isCllapse'],
	data() {
		return {
			QQ: '79099400',
		}
	},
	methods: {
		isClickCllapse() {
			this.$emit('isClickCllapse')
		},
	},
	computed: {
		isCicon() {
			return this.isCllapse
				? '#icon-zhankaicebianlan2x'
				: '#icon-shouqicebianlan2x'
		},
	},
	created() {
		console.log(this.$route, 'route')
	},
}
</script>

<style lang="scss" scoped>
.header-left {
	display: flex;
	align-items: center;
	.shouqi {
		margin-right: 30px;
	}
}
.el-container {
	height: 100vh;
	background-color: #f6f8f9;
}
.el-main {
	overflow: auto;
}
.el-header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.shouqi {
	cursor: pointer;
	line-height: 1;
	.icon {
		width: 25px;
		height: 25px;
	}
}
.tuoxian {
	height: 100%;
}
.el-dropdown-link {
	display: flex;
	align-items: center;
}
</style>
