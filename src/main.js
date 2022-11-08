import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
// 导入样式
import './assets/css/bootstrap.css'
import './index.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
