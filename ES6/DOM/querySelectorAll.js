/**
 * NodeList对象的一大特点是它返回的内容是动态的（live）,也就是说我们上面代码获取nodeLists是类似于“指针”的东西,
 * 所以在下面代码中我们在获取了nodeLists之后再向node中插入一个创建的span标签后,发现获取到了nodeLists.length变为10了,
 * 但是querySelectorAll这个接口返回的nodeList对象比较特殊,它是个静态（static）的对象。而且是元素(Element)的集合。
 */
var node = document.getElementById('node'),
    nodeLists = node.childNodes,
    queryNodes = node.querySelectorAll('span');
    
node.appendChild(document.createElement('span'));
console.log(nodeLists.length)  // 输出为10
console.log(queryNodes.length)  //输出为3