import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/style/index.less'
import App from './App'
import router from './router'
import './permission'

createApp(App).use(Antd).use(router).mount('#app')
