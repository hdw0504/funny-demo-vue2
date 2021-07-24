import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 全局组件自动注册
import './components/autoRegister'

new Vue({
  render: h => h(App),
}).$mount('#app')
