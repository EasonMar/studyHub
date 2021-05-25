/**
 * 批处理构造函数
 * @constructor
 */
function Batcher() {
    this.reset();  // 初始化
}

/**
 * 批处理重置
 */
Batcher.prototype.reset = function() {
    this.has = {};
    this.queue = [];
    this.waiting = false;
};

/**
 * 将事件添加到队列中
 * @param job {Watcher} watcher事件
 *
 * Vue.js 默认异步更新 DOM。每当观察到数据变化时，Vue 就开始一个队列，将同一事件循环内所有的数据变化缓存起来。
 * 如果一个 watcher 被多次触发，只会推入一次到队列中。等到下一次事件循环，Vue 将清空队列，只进行必要的 DOM 更新。
 * 在内部异步队列优先使用 MutationObserver，如果不支持则使用 setTimeout(fn, 0)。
 */
Batcher.prototype.push = function(job) {
    if (!this.has[job.name]) {
        this.queue.push(job); // 排队
        this.has[job.name] = job; // 注册
        if (!this.waiting) { // 等待
            this.waiting = true;
            setTimeout(() => {
                var type = this.queue[0].type;
                console.log(type); // 这样打印出来看，执行顺序是符合常识的，先input#a，后text
                this.flush(); // 打了断点之后，为什么先执行node: text的flush，然后才执行node: input#a的？
                // 好像有时又是先执行后者？setTimeout的顺序那么而乱的吗？要了解setTimeout回调的执行机制！
            });
        }
    }
};

/**
 * 执行并清空事件队列
 */
Batcher.prototype.flush = function() {
    // queue里面装的都是watcher
    this.queue.forEach((job) => {
        job.cb();
    });
    this.reset(); // 做完一次之后,再次重置
};