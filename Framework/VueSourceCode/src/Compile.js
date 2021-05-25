/**
 * Compile对象：HTML解析
 * @param node [HTML节点]
 * @param vm   [Vue实例]
 */
function Compile(node, vm) {
    if (node) {
        this.$frag = this.nodeToFragment(node, vm);
        return this.$frag; 
        // 返回处理过后的节点, 最后再塞回到页面内
    }
}
Compile.prototype = {
    nodeToFragment: function(node, vm) {
        var self = this;
        var frag = document.createDocumentFragment();
        var child;

        // Tips:解析node的子节点...
        while (child = node.firstChild) {
            self.compileElement(child, vm);

            // Tips: append()方法：会将child从原来的地方拿过来这里, 故node就少了一个元素
            frag.append(child); 
            // 将所有子节点添加到fragment中
        }

        return frag;
    },
    compileElement: function(node, vm) {
        var reg = /\{\{(.*)\}\}/;

        // 节点类型为元素
        if (node.nodeType === 1) {
            var attr = node.attributes;
            
            // 解析属性
            for (var i = 0; i < attr.length; i++) {
                if (attr[i].nodeName == 'v-model') {
                    var name = attr[i].nodeValue; // 获取v-model绑定的属性名

                    // 这里绑了个input事件！！所有的驱动源头在这里！
                    node.addEventListener('input', function(e) {
                        // 给相应的data属性赋值，进而触发该属性的set方法
                        vm[name] = e.target.value;
                    });
                    
                    // node.value = vm[name]; // 将data的值赋给该node
                    new Watcher(vm, node, name, 'value'); // 创建监听/订阅
                }
            }
        }

        // 节点类型为text
        if (node.nodeType === 3) {
            if (reg.test(node.nodeValue)) {
                var name = RegExp.$1; // 获取前面reg.test中匹配到的字符串
                name = name.trim();
                // node.nodeValue = vm[name]; // 将data的值赋给该node
                new Watcher(vm, node, name, 'nodeValue'); // 创建监听/订阅
            }
        }
    }
}