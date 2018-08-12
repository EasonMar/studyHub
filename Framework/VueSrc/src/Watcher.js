
/**
 * [Watcher description]
 * vm   [vue实例]
 * node [html节点]
 * name [v-model绑定的属性名]
 * type [html节点对应的属性名]
 */
function Watcher(vm, node, name, type) {
    Dep.target = this; // Dep.target放的就是watcher实例
    this.name = name;
    this.node = node;
    this.vm = vm;
    this.type = type;
    this.update();
    Dep.target = null;
}

Watcher.prototype = {
    update: function() {
        this.get(); // 触发getter

        // 批处理
        var batcher = new Batcher();
        batcher.push(this);
        
        // this.node[this.type] = this.value; // 订阅者执行相应操作
    },
    cb: function() {
        // 把watcher下的value塞到html节点对应的属性中去
        this.node[this.type] = this.value; // 订阅者执行相应操作
    },
    // 获取vueData的属性值，放到watcher下的value里
    get: function() {
        this.value = this.vm[this.name]; //触发相应属性的get
    }
}