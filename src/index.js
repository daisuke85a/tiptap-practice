import Vue from 'vue'
import Example from './components/example.vue'
import App from './components/App/App.vue'

const app = new Vue({
	el: "#app",
	components:{
        Example,
        App,
	},
	data: {
		message: 'Hello World'
	}
})