/**
 * 入口文件
 */ 

import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
Vue.component('GlobalComponent',{
  props:['content'],
  template:`<h1>{{ content }}</h1>`
})

new Vue({
  el: '#app',
  // vue会找到index.html中的 #app 元素，然后用 App组件 替换掉它，渲染到浏览器中

  // 了解清楚 render 函数的作用 - 这里 h参数 实际上传入的是 createElement 
  // render: h => h(App)

  // 还有下面这种常见的渲染方式
  components:{ App },
  template:'<App/>'
})
