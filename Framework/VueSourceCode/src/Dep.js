// 感觉是一个管理工具，但是具体是？
// 有点类似于JS-SDK中的Event
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub);
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        })
    }
}