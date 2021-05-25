function Vue(options) {

    // 把data挂到Vue实例下面
    this.data = options.data;

    // 再另外存一次？
    var data = this.data;

    /**
     * 观察者
     * 参数：Vue Data, Vue实例
     */
    observe(data, this);

    var id = options.el;

    /**
     * 解析Dom
     * 参数：element, Vue实例
     * Tips: compile document.getElementById(id)元素 的子节点
     */
    var dom = new Compile(document.getElementById(id), this);

    // 编译完成后，将dom返回到app中
    document.getElementById(id).appendChild(dom);
}