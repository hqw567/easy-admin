<template>
	<div>
		<el-card class="box-card">
			<div style="border: 1px solid #ccc">
				<Toolbar
					style="border-bottom: 1px solid #ccc"
					:editor="editor"
					:defaultConfig="toolbarConfig"
					:mode="mode"
				/>
				<Editor
					style="height: 500px; overflow-y: hidden"
					v-model="html"
					:defaultConfig="editorConfig"
					:mode="mode"
					@onCreated="onCreated"
				/>
			</div>
		</el-card>
	</div>
</template>

<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css'
export default Vue.extend({
	components: { Editor, Toolbar },
	data() {
		return {
			editor: null,
			html: '<p>Hello</p>',
			toolbarConfig: {},
			editorConfig: { placeholder: '请输入内容...' },
			mode: 'default', // or 'simple'
		}
	},
	methods: {
		onCreated(editor) {
			this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
		},
	},
	mounted() {
		// 模拟 ajax 请求，异步渲染编辑器
		setTimeout(() => {
			this.html = '<p>Hello 这里是Easy-Admin!</p><p>现在展示的是wangeditor</p>'
		}, 1500)
	},
	beforeDestroy() {
		const editor = this.editor
		if (editor == null) return
		editor.destroy() // 组件销毁时，及时销毁编辑器
	},
})
</script>

<style lang="scss" scoped></style>
