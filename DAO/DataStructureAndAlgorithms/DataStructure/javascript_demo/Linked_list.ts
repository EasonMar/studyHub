+function () {
    // LRU 缓存淘汰算法实现

    // 节点类
    class Node {
        // 联合类型（Union Types）：表示取值可以为多种类型中的一种
        data: string | null;
        next: Node | null;
        constructor(_data: string | null = null) {
            this.data = _data;
            this.next = null;
        }
    }

    class Linked_list {
        head: Node;
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
    
    let a = new Linked_list(5)
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
