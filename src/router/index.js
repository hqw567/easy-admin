import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '',
		component: () => import('@/views/Layout'),
		meta: {
			isLogin: true,
			
		},
		children: [
			{
				path: '/',
				component: () => import('@/views/Home'),
				name: 'home',
				meta: {
					title: '首页',
					showInbreadcrumb:true
				},
			},
			{
				name: 'components',
				path: '/components',
				redirect: '/components/form',
				component: () => import('@/views/components'),
				meta: {
					title: '组件',
					 showInbreadcrumb:true
				},
				children: [
					{
						path: 'form',
						component: () => import('@/views/components/Form'),
						name: 'form',
						meta: {
							title: '表单',
							showInbreadcrumb:true
						},
					},
					{
						path: 'table',
						component: () => import('@/views/components/Table'),
						name: 'table',
						meta: {
							title: '表格',
							showInbreadcrumb:true
						},
					},
					{
						path: 'editor',
						component: () => import('@/views/components/Editor'),
						name: 'editor',
						meta: {
							title: '编辑器',
							showInbreadcrumb:true
						},
					},
				],
			},
		],
	},
	{
		path: '*',
		redirect: '/',
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
