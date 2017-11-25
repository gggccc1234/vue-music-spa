import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// Vue.config.productionTip = false
import fastclick from 'fastclick'   // 解决移动端click事件有300ms延时
import VueLazyLoad from 'vue-lazyload'  // 图片懒加载的插件

import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')  // 设置图片被加载前显示默认图片
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)   // 也可用template
})
