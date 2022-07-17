<template>
	<div>
		<el-container>
			<el-header>
				<div class="shouqi" @click="isClickCllapse">
					<svg class="icon" aria-hidden="true">
						<use :xlink:href="isCicon"></use>
					</svg>
				</div>
				<div class="tuoxian">
					<el-dropdown>
						<span class="el-dropdown-link">
							<el-avatar
								src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
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
}
</script>

<style lang="scss" scoped>
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
