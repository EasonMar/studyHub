+function () {
    // LRU 缓存淘汰算法实现

    // 应该要针对链表的哨兵/头节点 单独设置一个类。
    // 但是在Typescript中这样做会遇到很多类型不确定报错的问题！！

    // 单向节点
    class Node {
        // 联合类型（Union Types）：表示取值可以为多种类型中的一种
        data: string | null;
        next: Node | null;
        constructor(_data: string | null = null) {
            this.data = _data;
            this.next = null;
        }
    }

    // 单向链表
    class Linked_list {
        head: Node; // 带头链表：不知不觉就用了哨兵技巧
        maxlen: number;
        constructor(_maxlen: number) {
            this.head = new Node();
            this.maxlen = _maxlen;
        }

        // 在链表尾部添加节点
        append(_data: string): void {
            console.log('append ' + _data);
            let newNode = new Node(_data);
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }

        // 在链表头部添加节点
        unshift(_data: string): void {
            console.log('unshift ' + _data);
            let theHead = this.head;
            let newNode = new Node(_data);
            newNode.next = theHead.next;
            theHead.next = newNode;
        }

        // 删除尾部节点
        pop(): void {
            console.log('do popping');
            let cur = this.head;
            let last = this.head;
            while (cur.next != null) {
                last = cur;
                cur = cur.next;
            }
            last.next = null;
        }

        // 将某节点移动道头部
        moveToTop(_data: string): void {
            let cur = this.head;
            let last = this.head;
            let found = false;
            while (cur.next != null) {
                last = cur;
                cur = cur.next;
                if (cur.data == _data) {
                    found = true;
                    break;
                }
            }

            // 如果找到了
            if (found) {
                last.next = cur.next;
                cur.next = this.head.next;
                this.head.next = cur;
                console.log(`move ${_data} to the top`);
            } else {
                console.log('没有找到此节点！');
            }
        }

        // 查找链表中是否存在某数据
        exist(_data: string): boolean {
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
                if (cur.data == _data) {
                    return true;
                }
            }
            return false;
        }

        // 查询链表长度
        length(): number {
            let cur = this.head;
            let total = 0;
            while (cur.next != null) {
                cur = cur.next;
                total++;
            }
            // console.log(`当前链表长度为：${total}`); // 临时用作展示
            return total;
        }

        // 通过数组的方式展示
        // display(): Array<string | null> { // 这里要怎样才能使得 display的返回类型为 Array<string> 呢？
        display(): Array<string> { // 得在程序里保证temp不为null
            let cur = this.head;
            let temp = [];
            while (cur.next != null) {
                cur = cur.next; // 先移动一格，因为表头是没有数据的
                // temp.push(cur.data);
                cur.data && temp.push(cur.data); // 保证temp内的元素不为null
            }
            console.log(temp); // 临时用作展示
            return temp;
        }

        // 数据缓存
        cache(_data: string): void {
            // exist 和 moveToTop 两个地方都进行了 遍历查找，感觉很不爽！
            // 但是从功能分离对角度来说，这又是合理的...
            if (this.exist(_data)) {
                this.moveToTop(_data);
            } else if (this.length() == this.maxlen) {
                this.pop();
                this.unshift(_data);
            } else {
                this.unshift(_data);
            }
        }
    }

    // let a = new Linked_list(10)
    // a.pop()
    // a.append('111')
    // a.append('222')
    // a.append('333')
    // a.display()
    // a.pop()
    // a.display()
    // a.unshift('555')
    // a.display()
    // a.unshift('666')
    // a.display()
    // a.length()
    // a.moveToTop('111')
    // a.display()

    // let a = new Linked_list(5)
    // a.cache('111')
    // a.display()
    // a.cache('222')
    // a.display()
    // a.cache('333')
    // a.display()
    // a.cache('111')
    // a.display()
    // a.cache('444')
    // a.display()
    // a.cache('555')
    // a.display()
    // a.cache('333')
    // a.display()
    // a.cache('666')
    // a.display();


    // 双向节点
    class DuNode {
        data: string | null;
        next: DuNode | null;
        prev: DuNode | null;
        constructor(_data: string | null = null) {
            this.data = _data;
            this.next = null;
            this.prev = null;
        }
    }
    // 双向链表
    class DuLinkedList {
        head: DuNode;
        maxlen: number;
        constructor(_maxlen: number) {
            this.maxlen = _maxlen;
            this.head = new DuNode();
        }

        // 在链表尾部添加节点
        append(_data: string): void {
            console.log(`append DuNode ${_data}`);
            let theNew = new DuNode(_data);
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = theNew;

            // 处理prev - next 自带为 null
            theNew.prev = cur;
        }

        // 在链表头部添加节点
        unshift(_data: string): void {
            console.log(`unshift DuNode ${_data}`);
            let theNew = new DuNode(_data);
            let theHead = this.head;
            let theNext = this.head.next

            // 处理next
            theNew.next = theHead.next;
            theHead.next = theNew;

            // 处理prev
            theNew.prev = theHead;
            if (theNext != null) {
                theNext.prev = theNew;
            }
        }

        // 删除尾部节点
        pop(): void {
            console.log('do popping');
            let cur = this.head;

            // 找到最后一个节点
            while (cur.next != null) {
                cur = cur.next;
            }
            // 要加好多傻逼的条件啊 cur.prev ！= null
            // 用来证明 cur 不是头节点
            if (cur.prev) {
                // 断绝所有联系
                cur.prev.next = null
                cur.prev = null
            }
        }

        // 将某节点移动道头部
        moveToTop(_data: string): void {
            let cur = this.head; // 必须从哨兵开始，如果跳过哨兵，就得附加很多条件
            let orginFirst = this.head.next;
            let found = false;
            while (cur.next != null) {
                cur = cur.next;
                if (cur.data == _data) {
                    found = true;
                    break;
                }
            }

            // 如果找到了
            if (found) {
                /* this.head.next = cur;

                if(cur.next){
                    cur.next.prev = cur.prev
                }

                // 要加好多傻逼的条件啊 cur.prev ！= null
                if (cur.prev) {
                    cur.prev.next = cur.next; // 把原先cur位置给补上
                    cur.prev = this.head;
                }

                if (orginFirst) {
                    orginFirst.prev = cur; // 处理之前首节点的 prev
                    cur.next = orginFirst; // 如果 orginFirst 不为 null 才进行 cur.next 指向
                } */
                this.moveNodeToTop(cur); // 这样功能更细分

                console.log(`move ${_data} to the top`);
            } else {
                console.log('没有找到此节点！');
            }
        }
        // 跳过哨兵看看会多了哪些条件
        moveToTopDemo(_data: string): void {
            let cur = this.head.next;
            let orginFirst = this.head.next;
            let found = false;
            while (cur != null) {
                if (cur.data == _data) {
                    found = true;
                    break;
                }
                cur = cur.next;
            }

            // 如果找到了 - 要证明 cur != null - 跳过哨兵多了这个条件
            if (found && cur) {
                // 处理next
                this.head.next = cur;

                if(cur.next){
                    cur.next.prev = cur.prev
                }

                // 要加好多傻逼的条件啊 cur.prev ！= null
                if (cur.prev) {
                    cur.prev.next = cur.next;
                    cur.prev = this.head;
                }

                if (orginFirst) {
                    orginFirst.prev = cur;
                    cur.next = orginFirst;
                }

                console.log(`move ${_data} to the top`);
            } else {
                console.log('没有找到此节点！');
            }
        }

        // 传入节点, 并将节点放到首位
        moveNodeToTop(node: DuNode): void {
            let orginFirst = this.head.next;
            let beforeNode = node.prev;
            let afterNode = node.next;

            this.head.next = node; // 将"哨兵"的next指向node
            
            if(afterNode){
                afterNode.prev = node.prev // 将afterNode的prev指向node的prev
            }

            if(beforeNode){
                beforeNode.next = node.next; // 将beforeNode的next指向node的next
                node.prev = this.head;      // 将node的prev指向"哨兵"
            }

            if(orginFirst){
                orginFirst.prev = node; // 将之前"首节点"的prev指向node
                node.next = orginFirst  // 将node的next指向之前的"首节点"
            }
        }

        // 查找链表中是否存在某数据
        find(_data: string): DuNode | null{
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
                if (cur.data == _data) {
                    return cur;
                }
            }
            return null;
        }

        // 查询链表长度
        length(): number {
            let cur = this.head;
            let total = 0;
            while (cur.next != null) {
                cur = cur.next;
                total++;
            }
            return total;
        }

        // 通过数组的方式展示
        display(): Array<string> {
            let cur = this.head;
            let temp = [];
            while (cur.next != null) {
                cur = cur.next; // 先移动一格，因为表头是没有数据的
                temp.push(cur); // 保证temp内的元素不为null
            }
            console.log(temp); // 临时用作展示
            return [temp.toString()];
        }

        // 数据缓存
        cache(_data: string): void {
            console.log(`cache control ${_data}`);
            let findNode = this.find(_data);
            if (findNode) {
                this.moveNodeToTop(findNode);
            } else if (this.length() == this.maxlen) {
                this.pop();
                this.unshift(_data);
            } else {
                this.unshift(_data);
            }
        }
    }

    let a = new DuLinkedList(5)
    a.cache('111')
    a.display()
    a.cache('222')
    a.display()
    a.cache('333')
    a.display()
    a.cache('111')
    a.display()
    a.cache('444')
    a.display()
    a.cache('555')
    a.display()
    a.cache('333')
    a.display()
    a.cache('666')
    a.display()
}()
