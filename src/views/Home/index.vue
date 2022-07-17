<template>
	<div>
		<el-row>
			<el-col :span="24">
				<el-card class="box-card">{{ hitokoto }}</el-card>
			</el-col>
		</el-row>
		<el-row :gutter="12" class="el-row-2">
			<el-col :span="10">
				<el-card class="box-card box-card-view">
					<div slot="header" class="clearfix">
						<span>访问量</span>
					</div>
					<div id="page-view" style="weight: 100%; height: 100%"></div>
				</el-card>
			</el-col>
			<el-col :span="14" class="plate">
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
				<el-card class="box-card">
					<div class="plate-box">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-keai"></use>
						</svg>
						<span>公告</span>
					</div>
				</el-card>
			</el-col>
		</el-row>

		<el-row :gutter="12">
			<el-col :span="10">
				<el-card class="box-card box-card-temperature">
					<div slot="header" class="clearfix">
						<span>还不给我降降温!</span>
					</div>
					<div id="temperature" style="height: 100%; weight: 100%"></div>
				</el-card>
				<el-card class="box-card">
					<div slot="header" class="clearfix">
						<span>Easy-Admin</span>
					</div>
					<div class="other">
						<div>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-keai"></use>
							</svg>
						</div>
						<div>Easy-Admin</div>
					</div>
				</el-card>
			</el-col>
			<el-col :span="14">
				<el-card class="box-card notice">
					<div slot="header" class="clearfix">
						<span>最近公告</span>
					</div>
					<div style="height: 400px">
						<el-steps direction="vertical" :active="1">
							<el-step title="生物趋利避害，生命自私无情。"></el-step>
							<el-step
								title="纵使黑云蔽日，我也要燃烧天空，带你找到回家的路。"
							></el-step>
							<el-step
								title="梦比现实更易侵蚀人的精神，刻意准备的梦是危险的。"
							></el-step>
							<el-step
								title="也许，我们会自由。"
								description="最近更新"
							></el-step>
							<el-step :title="hitokoto" description="最近更新"></el-step>
							<el-step
								title="尘归尘，土归土！"
								description="2022-6-6"
							></el-step>
						</el-steps>
					</div>
				</el-card>
				<el-card class="box-card user-agent">
					<div slot="header" class="clearfix">
						<span>User-Agent</span>
					</div>
					<div class="user-agent-tit">{{ userAgent }}</div>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="24" class="copyright">
				<el-card class="box-card">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-keai"></use>
					</svg>
					© 2022 He, Inc.
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import * as echarts from 'echarts'
export default {
	data() {
		return {
			hitokoto: '',
			userAgent: '',
		}
	},
	created() {
		this.$api.getHitokoto().then(res => {
			this.hitokoto = res.data.hitokoto
		})
		this.userAgent = navigator.userAgent
	},
	mounted() {
		this.pageView()
		this.temperature()
	},
	methods: {
		pageView() {
			let chartDom = document.getElementById('page-view')
			let myChart = echarts.init(chartDom)
			let option
			function pageViewRandom() {
				const random1 = +(Math.random() * 1000).toFixed(2)
				const random2 = +(Math.random() * 1500).toFixed(2)
				const random3 = +(Math.random() * 2000).toFixed(2)
				const random4 = +(Math.random() * 3000).toFixed(2)
				const random5 = +(Math.random() * 4000).toFixed(2)
				myChart.setOption({
					xAxis: {
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
					},
					yAxis: {
						type: 'value',
					},
					series: [
						{
							data: [random1, random2, random3, random4, random5],
							type: 'line',
							smooth: true,
						},
					],
				})
			}
			pageViewRandom()
			setInterval(pageViewRandom, 5000)
			option && myChart.setOption(option)
		},
		temperature() {
			let chartDom = document.getElementById('temperature')
			let myChart = echarts.init(chartDom)
			let option

			option = {
				series: [
					{
						type: 'gauge',
						center: ['50%', '60%'],
						startAngle: 200,
						endAngle: -20,
						min: 0,
						max: 100,
						splitNumber: 10,
						itemStyle: {
							color: '#FFAB91',
						},
						progress: {
							show: true,
							width: 30,
						},
						pointer: {
							show: false,
						},
						axisLine: {
							lineStyle: {
								width: 30,
							},
						},
						axisTick: {
							distance: -45,
							splitNumber: 5,
							lineStyle: {
								width: 2,
								color: '#999',
							},
						},
						splitLine: {
							distance: -52,
							length: 14,
							lineStyle: {
								width: 3,
								color: '#999',
							},
						},
						axisLabel: {
							distance: -20,
							color: '#999',
							fontSize: 20,
						},
						anchor: {
							show: false,
						},
						title: {
							show: false,
						},
						detail: {
							valueAnimation: true,
							width: '60%',
							lineHeight: 40,
							borderRadius: 8,
							offsetCenter: [0, '-15%'],
							fontSize: 40,
							fontWeight: 'bolder',
							formatter: '{value} °C',
							color: 'auto',
						},
						data: [
							{
								value: 20,
							},
						],
					},
					{
						type: 'gauge',
						center: ['50%', '60%'],
						startAngle: 200,
						endAngle: -20,
						min: 0,
						max: 100,
						itemStyle: {
							color: '#FD7347',
						},
						progress: {
							show: true,
							width: 8,
						},
						pointer: {
							show: false,
						},
						axisLine: {
							show: false,
						},
						axisTick: {
							show: false,
						},
						splitLine: {
							show: false,
						},
						axisLabel: {
							show: false,
						},
						detail: {
							show: false,
						},
						data: [
							{
								value: 20,
							},
						],
					},
				],
			}
			setInterval(function () {
				const random = +(Math.random() * 100).toFixed(2)
				myChart.setOption({
					series: [
						{
							data: [
								{
									value: random,
								},
							],
						},
						{
							data: [
								{
									value: random,
								},
							],
						},
					],
				})
			}, 2000)

			option && myChart.setOption(option)
		},
	},
}
</script>

<style lang="scss" scoped>
.copyright {
	text-align: center;
	.el-card {
		color: #c83a07;
		svg {
			width: 15px;
			height: 15px;
		}
	}
}
.other {
	div {
		margin: 0 auto;
		&:first-child {
			width: 90px;
			height: 90px;
			svg {
				width: 100%;
				height: 100%;
			}
		}
		&:last-child {
			text-align: center;
			font-size: 50px;
		}
	}
}
.el-col {
	height: 100%;
}
.el-row-2 {
	height: 200px;
	.el-card {
		height: 100%;
	}
}
.plate {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-content: space-between;
	.box-card {
		width: 23.5%;
		height: 47.5%;
	}
	.plate-box {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;
		display: flex;
		flex-direction: column;
	}
}
.el-row {
	margin-top: 12px;
	&:first-child {
		margin-top: 0;
	}
}
</style>
