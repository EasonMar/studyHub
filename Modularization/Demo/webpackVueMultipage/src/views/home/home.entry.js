import Vue from 'vue'
import App from './App'

// 能不能把App集成到这个文件中？？
// 猜测不能，或者不科学：如果可以的话，为什么vue-cli中要搞main.js、App.vue两个文件

new Vue({
  el: "#app",
  render: h => h(App)
})

