/**
 * [defineReactive：激活vueData]
 *  obj [vue实例]
 *  key [vueData key]
 *  val [vueData value]
 */
function defineReactive(obj, key, val) {
    // Dep：dependence，每个data属性都会创建一个dep进行管理 --- 发布订阅模式
    var dep = new Dep();

    // 核心：data里面所有的成员，都使用get和set来订阅它的"读"、"写"操作
    Object.defineProperty(obj, key, {
        get: function() {
            // 添加「订阅者watcher」到主题对象Dep --- Dep.target放的就是watcher实例(详见Watcher.js)
            // 这步不理解 - Dep.target不是会清空吗
            if (Dep.target) {
                // JS的浏览器单线程特性，保证这个全局变量在同一时间内，只会有同一个监听器使用 --- ？
                dep.addSub(Dep.target);
            }
            return val;
        },
        set: function(newVal) {
            if (newVal === val) return;
            val = newVal;
            // 作为发布者发出通知
            dep.notify();
        }
    })
}

/**
 * 订阅vue data里面成员的读、写操作
 * vueData [Vue的data属性]
 * vm      [Vue实例]
 */
function observe(vueData, vm) {
    // 核心：data里面所有的成员属性,都经defineReactive处理一遍
    Object.keys(vueData).forEach(function(key) {
        defineReactive(vm, key, vueData[key]);
    })
}