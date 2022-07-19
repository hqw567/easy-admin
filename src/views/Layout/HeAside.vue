<template>
	<div>
		<el-container style="height: 100vh">
			<el-aside :style="{ width: isCllapse ? 'auto' : '250px' }">
				<h1 id="logo">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-keai"></use>
					</svg>
					<span v-show="!isCllapse">Easy-Admin</span>
				</h1>
				<el-menu
					router
					:collapse="isCllapse"
					:collapse-transition="false"
					:default-active="activePath"
					class="el-menu-vertical"
					@open="handleOpen"
					@close="handleClose"
					text-color="#fff"
					active-text-color="#fff"
				>
					<el-menu-item index="/">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span slot="title">首页</span>
					</el-menu-item>
					<el-submenu index="/components">
						<template slot="title">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-keai"></use>
							</svg>
							<span>组件</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="/components/form">表单</el-menu-item>
							<el-menu-item index="/components/table">表格</el-menu-item>
							<el-menu-item index="/components/editor">
								富文本编辑器
							</el-menu-item>
						</el-menu-item-group>
						<el-submenu index="1-4">
							<template slot="title">选项4</template>
							<el-menu-item index="1-4-1">选项1</el-menu-item>
						</el-submenu>
					</el-submenu>
					<el-menu-item index="2">
						<template>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-keai"></use>
							</svg>
						</template>
						<span slot="title">错误页</span>
					</el-menu-item>
					<el-menu-item index="4">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span slot="title">关于</span>
					</el-menu-item>
				</el-menu>
			</el-aside>
		</el-container>
	</div>
</template>

<script>
export default {
	props: ['isCllapse'],
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath)
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath)
		},
	},
	computed: {
		activePath() {
			return this.$route.path
		},
	},
	created() {},
}
</script>

<style lang="scss">
.el-menu-item,
.el-submenu__title {
	& > span {
		margin-left: 5px;
	}
}
.el-menu {
	border-right: 0;
}
.el-menu-item {
	color: #fff;
}
.el-menu-item.is-active {
	color: #fff;
	background-color: #f4c18e;
}
#logo {
	font-size: 26px;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	.icon {
		width: 40px;
		height: 40px;
	}
}
.el-menu.el-menu-vertical,
.el-menu.el-menu--inline {
	.icon {
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
}
</style>
