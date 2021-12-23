import { createApp } from 'vue'
import App from './App'
import router from './router'
import './permission'

createApp(App).use(router).mount('#app')
