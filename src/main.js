import api from '@/api/index'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/css/iconfont/iconfont'
import './assets/css/reset.css'
import './plugins/elementUi'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$api = api
new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
