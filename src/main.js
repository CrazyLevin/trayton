import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/border.css' // 边框样式
import 'styles/initial.css' // reset样式
import 'styles/common.css' // sass公共样式
import 'styles/varibles.css' // sass变量样式
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
