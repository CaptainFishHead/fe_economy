import { createApp } from 'vue'
import App from './App.vue'
// vue-router
import router from './router'
// pinia
import pinia from "@/store/index";
import { MotionPlugin } from '@vueuse/motion'
import '@fortawesome/fontawesome-free/css/all.css'
import './styles/index.scss'
import './assets/fonts/fonts.css'; // 引入字体样式文件
import { initResponsive } from './utils/responsive'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import structuredClone from '@ungap/structured-clone'

// 如果全局未定义 structuredClone，则定义它
if (typeof window.structuredClone === 'undefined') {
  window.structuredClone = structuredClone
}
initResponsive()

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia);
app.use(router)
app.use(MotionPlugin)
app.mount('#app')

