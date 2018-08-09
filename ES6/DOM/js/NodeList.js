// NodeList是一个节点的集合(既可以包含元素和其他节点)
// 在DOM中,节点的类型总共有12种,通过判断节点的nodeType来判断节点的类型
var node = document.getElementById('node'),
    nodeLists = node.childNodes;

console.log(nodeLists.length); //输出为9
console.log(nodeLists);