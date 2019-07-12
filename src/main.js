// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
// import axios from 'axios'
import clipboard from 'clipboard'
//注册到vue原型上
Vue.prototype.clipboard = clipboard

Vue.config.productionTip = false
// 全局引用mint-ui
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
