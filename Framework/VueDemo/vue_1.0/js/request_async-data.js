// 这里跟请求没有关系，只是获取异步数据
var VueAsyncData = require('vue-async-data');
var Vue = require('./vue_1.0');
console.log(Vue);
Vue.use(VueAsyncData);
new Vue({
    el: '#app',
    data: {
        list: []
    },
    asyncData: function (resolve, reject) {
        // load data and call resolve(data)
        // or call reject(reason) if something goes wrong
        setTimeout(function () {
            // this will call `vm.$set('msg', 'hi')` for you
            resolve({
                list: [
                    {
                        name: '李逍遥',
                        gender: '男'
                    },
                    {
                        name: '赵灵儿',
                        gender: '女'
                    }]
            })
        }, 2000)
    }
})
