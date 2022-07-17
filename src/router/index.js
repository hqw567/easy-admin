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
			},
			{
				path: '/form',
				component: () => import('@/views/Form'),
			},
			{
				path: '/table',
				component: () => import('@/views/Table'),
			},
			{
				path: '/editor',
				component: () => import('@/views/Editor'),
			},
		],
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
