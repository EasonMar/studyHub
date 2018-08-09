// 节点创建API主要包括 createElement、createTextNode、cloneNode 和 createDocumentFragment 四个方法

/**
 * createElement - 创建元素
 * 通过 createElement 创建的元素并不属于 document 对象,它只是创建出来,并未添加到html文档中,
 * 要调用 appendChild 或 insertBefore 等方法将其添加到HTML文档中
 */
var elem = document.createElement("div");
elem.id = 'test';
elem.style = 'color: red';
elem.innerHTML = '我是新创建的节点';
document.body.appendChild(elem);

/**
 * createTextNode - 创建文本节点
 */
var node = document.createTextNode("我是文本节点");
document.body.appendChild(node);

/**
 * cloneNode - 克隆一个节点： 
 * node.cloneNode(true/false) ,它接收一个bool参数,用来表示是否复制子元素。
 * 克隆节点并不会克隆事件,除非事件是用 <div onclick="test()"></div> 这种方式绑定的,
 * 用 addEventListener 和 node.onclick=xxx; 方式绑定的都不会复制。
 */
var from = document.getElementById("test");
var clone = from.cloneNode(true);
clone.id = "test2";
document.body.appendChild(clone);

/**
 * createDocumentFragment
 * 本方法用来创建一个 DocumentFragment ,也就是文档碎片
 * 它表示一种轻量级的文档,主要是用来存储临时节点,大量操作DOM时用它可以大大提升性能。
 */

// 假设现有一题目,要求给ul添加10000个li
// 1. 我们先用最简单的拼接字符串的方式来实现：
(function() {
    var start = Date.now();
    var str = '';
    for (var i = 0; i < 10000; i++) {
        str += '<li>第' + i + '个子节点</li>';
    }
    document.getElementById('ul').innerHTML = str;
    console.log('耗时：' + (Date.now() - start) + '毫秒'); // 44毫秒
})();
// 2. 用逐个append的方式,不用说,这种方式效率肯定低：
(function() {
    var start = Date.now();
    var str = '',
        li;
    var ul = document.getElementById('ul');
    for (var i = 0; i < 10000; i++) {
        li = document.createElement('li');
        li.textContent = '第' + i + '个子节点';
        ul.appendChild(li);
    }
    console.log('耗时：' + (Date.now() - start) + '毫秒'); // 82毫秒
})();
// 3. 最后再试试文档碎片的方法,可以预见的是,这种方式肯定比第2种好很多,但是应该没有第1种快：
(function() {
    var start = Date.now();
    var str = '',
        li;
    var ul = document.getElementById('ul');
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 10000; i++) {
        li = document.createElement('li');
        li.textContent = '第' + i + '个子节点';
        fragment.appendChild(li);
    }
    ul.appendChild(fragment);
    console.log('耗时：' + (Date.now() - start) + '毫秒'); // 63毫秒
})();