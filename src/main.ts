import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import SvgIcon from './components/SvgIcon.vue'
import './assets/iconfont/iconfont.js'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)
app.use(router)

app.mount('#app')
