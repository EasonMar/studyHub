// 根据ID查找元素,大小写敏感,如果有多个结果,只返回第一个元素Element.
document.getElementById 

// 根据类名查找元素,多个类名用空格分隔,返回一个 HTMLCollection
// 注意兼容性为IE9+（含）.另外,不仅仅是document,其它元素也支持 getElementsByClassName 方法.
document.getElementsByClassName 

// 根据标签查找元素, * 表示查询所有标签,返回一个 HTMLCollection
document.getElementsByTagName 

// 根据元素的name属性查找,返回一个 NodeList
document.getElementsByName 

// 返回单个节点Node(这个节点是元素，元素是节点的一种),IE8+(含）,如果匹配到多个结果,只返回第一个. 
// 注意返回的结果是静态的！
document.querySelector 

// 返回一个 NodeList, IE8+(含）. 注意返回的结果是静态的！
document.querySelectorAll 

// 获取当前页面所有form,返回一个 HTMLCollection .
document.forms 