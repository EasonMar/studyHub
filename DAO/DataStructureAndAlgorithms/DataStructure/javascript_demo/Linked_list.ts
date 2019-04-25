+function () {
    // LRU 缓存淘汰算法实现

    // 应该要针对链表的哨兵/头结点 单独设置一个类。
    // 但是在Typescript中这样做会遇到很多类型不确定报错的问题！！

    // 单向结点
    class Node {
        // 联合类型（Union Types）：表示取值可以为多种类型中的一种
        // 有时候需要将一个联合类型的变量指定为一个更加具体的类型，就要用到 "类型断言"
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

        // 在链表尾部添加结点
        append(_data: string): void {
            console.log('append ' + _data);
            let newNode = new Node(_data);
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }

        // 在链表头部添加结点
        unshift(_data: string): void {
            console.log('unshift ' + _data);
            let theHead = this.head;
            let newNode = new Node(_data);
            newNode.next = theHead.next;
            theHead.next = newNode;
        }

        // 删除尾部结点
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

        // 将某结点移动道头部
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
                console.log('没有找到此结点！');
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
        display(): Array<string> { // 得在程序里保证temp不为null；更好的方式是用 类型断言
            let cur = this.head;
            let temp = [];
            while (cur.next != null) {
                cur = cur.next; // 先移动一格，因为表头是没有数据的
                // temp.push(cur.data);

                // cur.data && temp.push(cur.data); // 保证temp内的元素不为null

                temp.push(<string>cur.data); // 断言cur.data不为null
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

    function Linked_list_test() {
        let a = new Linked_list(10)
        a.pop()
        a.append('111')
        a.append('222')
        a.append('333')
        a.display()
        a.pop()
        a.display()
        a.unshift('555')
        a.display()
        a.unshift('666')
        a.display()
        a.length()
        a.moveToTop('111')
        a.display()

        let b = new Linked_list(5)
        b.cache('111')
        b.display()
        b.cache('222')
        b.display()
        b.cache('333')
        b.display()
        b.cache('111')
        b.display()
        b.cache('444')
        b.display()
        b.cache('555')
        b.display()
        b.cache('333')
        b.display()
        b.cache('666')
        b.display();
    }


    // 双向结点
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

        // 在链表尾部添加结点
        append(_data: string): void {
            console.log(`append DuNode ${_data}`);
            let theNew = new DuNode(_data);
            let cur = this.head;
            while (cur.next != null) {
                cur = cur.next;
            }
            cur.next = theNew;

            // 处理prev - next 默认为 null
            theNew.prev = cur;
        }

        // 在链表头部添加结点
        unshift(_data: string): void {
            console.log(`unshift DuNode ${_data}`);
            let theNew = new DuNode(_data);
            let theHead = this.head;
            let orginFirst = this.head.next;

            // 处理next
            theNew.next = theHead.next;
            theHead.next = theNew;

            // 处理prev
            theNew.prev = theHead;
            if (orginFirst != null) {
                orginFirst.prev = theNew;
            }
        }

        // 删除尾部结点
        pop(): void {
            console.log('do popping');
            let cur = this.head;

            // 找到最后一个结点
            while (cur.next != null) {
                cur = cur.next;
            }
            // 证明链表内存在结点，即 cur 不是 哨兵 this.head
            if (cur.prev) {
                // 断绝所有联系
                cur.prev.next = null
                cur.prev = null
            }
        }

        // 将某结点移动道头部
        moveToTop(_data: string): void {
            let cur = this.head; // 如果跳过哨兵，过程又会有不一样的地方
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
                this.moveNodeToTop(cur); // 这样功能更细分
                console.log(`move ${_data} to the top`);
            } else {
                console.log('没有找到此结点！');
            }
        }
        // 跳过哨兵看看会有什么不同
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

            // 如果找到了 - 可以断言 cur 不为 null
            if (found) {
                let found_node = <DuNode>cur;
                let after_node = found_node.next;
                let before_node = found_node.prev;

                // 哨兵交接
                this.head.next = found_node;
                found_node.prev = this.head;

                // 如果cur不是尾结点, 则要处理其后结点的 prev
                if (after_node) {
                    after_node.prev = before_node;
                }

                // 如果cur不是首结点, 则要处理其前结点的 next
                if (before_node) {
                    before_node.next = after_node;
                }

                // 如果找到了node，可以断言orginFirst不为null，首结点交接
                (<DuNode>orginFirst).prev = found_node;
                found_node.next = orginFirst;

                console.log(`move ${_data} to the top`);
            } else {
                console.log('没有找到此结点！');
            }
        }

        // 传入结点, 并将结点放到首位
        moveNodeToTop(the_node: DuNode): void {
            let orginFirst = this.head.next;
            let beforeNode = the_node.prev;
            let afterNode = the_node.next;

            this.head.next = the_node; // 将"哨兵"的 next指向 the_node
            the_node.prev = this.head; // 将 the_node 的 prev指向 "哨兵"

            if (afterNode) {
                afterNode.prev = beforeNode // 将 afterNode 的 prev指向 the_node原先的 prev
            }

            if (beforeNode) {
                beforeNode.next = afterNode; // 将 beforeNode 的 next指向 the_node 原先的 next
            }

            // 如果找到了the_node，可以断言orginFirst不为null，首结点交接
            (<DuNode>orginFirst).prev = the_node; // 将之前"首结点"的prev指向the_node
            the_node.next = orginFirst  // 将the_node的next指向之前的"首结点"
        }

        // 查找链表中是否存在某数据
        find(_data: string): DuNode | null {
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
            let found_node = this.find(_data);
            if (found_node) {
                this.moveNodeToTop(found_node);
            } else if (this.length() == this.maxlen) {
                this.pop();
                this.unshift(_data);
            } else {
                this.unshift(_data);
            }
        }
    }

    function DuLinkedList_test() {
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
    }

    // DuLinkedList_test();

    // 判断字符串是否为回文字符串
    // Given a singly linked list, determine if it is a palindrome.
    class Linked_list_palindrome extends Linked_list {
        constructor(_maxlen: number) {
            super(_maxlen)
        }

        // 找到链表中点
        findcenter() {

            /* let pointer: Node | null = null; // 慢指针
            let fast_pointer: Node | null = null; // 快指针
            let first_step: Node | null;
            // 先确定链表长度，必须大于等于2才有回文的可能 -- 不一定，得看定义，好像长度为1也可以？
            // 然后看链表长度是奇数还是偶数 - 奇数如何、偶数又如何
            if (this.length() >= 2) {
                pointer = <Node>this.head.next;
                // if(pointer){ // 用Typescript经常可能会要求写这种弱智条件！！ -- 可以用断言解决
                fast_pointer = pointer.next;
                // }
                while (fast_pointer != null) {
                    first_step = fast_pointer.next; // "快指针的第一步"
                    // 如果"快指针的第一步"不为null，第二步为null，则说明此链表为奇数结点链表
                    if (first_step) {
                        fast_pointer = first_step.next
                        // if(pointer){ // 用Typescript经常可能会要求写这种弱智条件！！ -- 可以用断言解决
                        pointer = <Node>pointer.next; // 如果在"快指针的第一步"不为null时才推进慢指针，则在偶数结点链表时，此中点为下位中点
                        // }
                    } else {
                        // 如果"快指针的第一步"即为null，说明此链表为偶数结点链表
                        fast_pointer = null;
                    }
                }
                console.log(`中间结点为: ${pointer.data}`);
            } else {
                console.log('长度不够')
            } */

            // 优化：减少变量 和 过程
            let slow : Node | null = null; 
            let fast : Node | null = null;
            let head = this.head;
            if(head.next == null){
                console.log(`链表无数据`)
                return true;
            }
            slow = head.next;
            // fast = head.next; // 在偶数结点链表时，取下位中点
            fast = head.next.next; // 在偶数结点链表时，取上位中点
            while(fast != null && fast.next != null){
                fast = fast.next.next;
                slow = (<Node>slow).next;
            }

            console.log(`中间结点为: ${(<Node>slow).data}`)
        }

        // 单链表反序 - 把后者的指针指向当前 --- 非常考验对"指针"的理解和掌握
        // 传入的结点之后的结点反序，默认传入哨兵
        // 双向链表反向应该比较容易
        reverse(head:Node = this.head) {
            /* let last: Node | null = null; // 上一个结点
            let cur = head.next; // 当前结点
            let iteror = head.next; // 下一个结点（记录遍历顺序）
            while (iteror != null) {
                cur = iteror; // 保存当前结点（cur指向新的结点）
                iteror = cur.next; // 储存下一个结点（这时候iteror指向了另一个结点）
                cur.next = last; // 改变cur.next指向
                last = cur; // 使用last指向当前结点（供下一轮使用）
            }
            head.next = cur; // 哨兵/传入结点 指向最后的"当前结点" */

            // 优化：可以减少一个变量
            let prev: Node | null = null;
            let cur = head.next;
            while(cur != null){
                let next : Node | null = cur.next; // 记录正常顺序中的下一结点
                cur.next = prev;    // 改变当前结点的next指向
                prev = cur; // 代表"上一个结点"的指针 指向 当前结点 (其上cur就是"当前结点的指针")
                cur = next; // "当前结点的指针" 指向 正常顺序中的下一结点
            }
        }

        // 创建长度为n的链表
        create(num: number) {
            for (let i = 1; i <= num; i++) {
                this.append('' + i);
            }
        }
    }

    function palindrome_test() {
        let a = new Linked_list_palindrome(5);
        a.create(6);
        a.findcenter();
        a.display();
        a.reverse();
        a.display();
    }
    palindrome_test();
}();
