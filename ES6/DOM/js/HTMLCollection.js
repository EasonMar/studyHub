/**
 * HTMLCollection是元素集合,它和NodeList很像,有length属性来表示HTMLCollection对象的长度,也可以通过elements.item()传入元素索引来访问。
 * 当时它还有一个nameItem()方法,可以返回集合中name属性和id属性值得元素。
 * HTMLDocument 接口的许多属性都是 HTMLCollection 对象,它提供了访问诸如表单、图像和链接等文档元素的便捷方式,
 * 比如document.images和document.forms的属性都是HTMLCollection对象。
 * 
 * HTMLCollection的集合和NodeList对象一样也是动态的,他们获取的都是节点或元素集合的一个引用。
 */

console.log(document.images.namedItem('image1')) //<img src="test.png" id="image1">


/**
 * HTMLCollection和NodeList 实时性
 * 前面都说到了它们连个对象都不是历史文档状态的一个静态快照,而是实时性的,这个是一个非常令人惊讶的特性,
 * 它们能随着文档的改变而改变,这个是很值得我们注意的,我们在平常使用一些DOM 接口来返回一些DOM集合的时候,常常会忽视掉这些。
 * 
 * HTMLCollection和NodeList的实时性非常有用,
 * 但是,我们有时要迭代一个NodeList或HTMLCollection对象的时候,我们通常会选择生成当前对象的一个快照或静态副本：
 */
Array.prototype.slice.call(NodeListORHTMLCollection, 0); // 其实就是拷贝一份节点放到数组中！