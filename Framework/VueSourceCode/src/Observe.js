/**
 * [defineReactive：激活vueData]
 *  obj [vue实例]
 *  key [vueData key]
 *  val [vueData value]
 */
function defineReactive(obj, key, val) {
    // Dep：dependence，每个data属性都会创建一个dep进行管理
    var dep = new Dep();

    // 核心：data里面所有的成员，都使用get和set来订阅它的"读"、"写"操作
    // 后面对vueData里面的成员进行"读、写操作"时，再触发getter、setter
    Object.defineProperty(obj, key, {
        get: function() {
            // 添加订阅者watcher到主题对象Dep
            if (Dep.target) {
                // JS的浏览器单线程特性，保证这个全局变量在同一时间内，只会有同一个监听器使用
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