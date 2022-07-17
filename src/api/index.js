/**
 * 请求的方法
 */
import base from './base'
import axios from './request'

const api = {
	/**
	 * 登录接口
	 */
	getLogin(params) {
		//params={username:'',password:''}
		return axios.post(base.login, params)
	},
	getHitokoto() {
		return axios.get(base.hitokoto)
	},
}

export default api
