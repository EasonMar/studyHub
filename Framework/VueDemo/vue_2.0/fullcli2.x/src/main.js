// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 组件 局部注册
  components: { App },
  // 填写 用于初始化渲染的 组件
  // vue会找到index.html中的 #app 元素，然后用 App组件 替换掉它，渲染到浏览器中 
  template: '<App/>'
})
