<template>
	<div class="Layout">
		<HeAside :isCllapse="isCllapse" />
		<HeContent
			style="flex: 1"
			:isCllapse="isCllapse"
			@isClickCllapse="isClickCllapse"
		/>
	</div>
</template>

<script>
import HeAside from './HeAside.vue'
import HeContent from './HeContent.vue'
export default {
	components: {
		HeAside,
		HeContent,
	},
	data() {
		return {
			isCllapse: false,
		}
	},
	methods: {
		isClickCllapse() {
			this.isCllapse = !this.isCllapse
		},
	},
}
</script>

<style lang="scss">
.box-card-temperature {
	height: 400px;
	margin-bottom: 10px;
	.el-card__body {
		transform: translate(0px, -40px);
		width: 100%;
		height: 120%;
	}
}
.user-agent {
	margin-top: 10px;
}
.notice {
	.el-step__head {
		transform: translate(0, 9px);
	}
	.is-finish {
		color: #f4c18e;
		border-color: #f4c18e;
		font-weight: 900;
	}
	.is-text {
		font-size: 0;
		width: 10px;
		height: 10px;
		top: -11px;
		left: 6.5px;
	}
}
.box-card-view {
	position: relative;
	.el-card__body {
		padding: 0;
		height: 110%;
		transform: translate(15px, -38px);
	}
}
.plate {
	.el-card__body {
		height: 100%;
	}
}
.Layout {
	display: flex;
}
.el-header {
	background-color: #fff;
	color: #333;
	line-height: 60px;
	height: 60px;
	box-shadow: 1px 0 4px 5px rgba($color: #000000, $alpha: 0.1);
	z-index: 4;
}
.el-aside {
	background-color: #2e2f34;
	color: #fff;
	z-index: 5;
	box-shadow: 0px 0 10px 5px rgba($color: #000000, $alpha: 0.2);
}
.el-menu {
	background-color: #2e2f34;
	.el-menu-item,
	.el-submenu__title {
		margin: 8px;
		border-radius: 5px;
		&:hover,
		&:focus {
			background-color: #f4c18e;
		}
	}
}
</style>
