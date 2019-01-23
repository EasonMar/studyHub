import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // vue会找到index.html中的 #app 元素，然后用 App组件 替换掉它，渲染到浏览器中 
  // 了解清楚 render 函数的作用 - 这里 h参数 实际上传入的是 createElement 
  render: h => h(App)
})
