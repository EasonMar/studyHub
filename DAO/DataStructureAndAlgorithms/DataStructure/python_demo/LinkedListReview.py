'''
写链表代码是最考验逻辑思维能力的。因为，链表代码到处都是指针的操作、边界条件的处理，稍有不慎就容易产生 Bug。
链表代码写得好坏，可以看出一个人写代码是否够细心，考虑问题是否全面，思维是否缜密
'''


# 结点类
class Node:
    # 构建函数, 实例数据初始化, 传入要储存的data, next默认为None, 后续通过手动修改
    def __init__(self, data=None):
        self.data = data
        self.next = None

# 链表类
class LinkedList:
    # 构建函数, 链表仅需要初始化一个头结点
    def __init__(self):
        # 初始化链表的头结点
        self.head = Node()


    # 追加新数据结点
    def append(self, data):
        # 从头结点开始访问链表
        cur = self.head

        # 找到最后一个结点
        while cur.next != None:
            cur = cur.next

        # 追加新结点(包含指定数据)
        cur.next = Node(data)


    # 返回链表长度
    def length(self):
        len = 0
        cur = self.head
        while cur.next != None:
            cur = cur.next
            len += 1
        return len


    # 展示链表数据
    def display(self):
        data = []
        cur = self.head
        while cur.next != None:
            cur = cur.next
            data.append(cur.data)
        print('Display the linked list: ', data)


    # 取得index结点的值, index stars from 0
    def get(self, index):
        # _index = 0
        # cur = self.head
        # while cur.next != None and _index < index:
        #     cur = cur.next
        #     _index += 1
        # if _index < index:
        #     print('The index %d is not exist' % index)
        # else:
        #     print(cur.data)
        

        # Best Practice
        # 边界处理
        # if index >= self.length() or index < 0:  # 这样多了一次 length 遍历, 可以不用这样判断
        if index < 0:
            print("ERROR: 'Get' Index out of range!")
            return None
        
        # 初始化
        cur_idx = 0
        cur_node = self.head # node(-1)
        while True:
            cur_node = cur_node.next # 使cur_node指向第一个数据node(0) 或 下一个数据node(cur_idx+1)
            
            # 在指针移动之后, 判断index是否已经超出范围
            if cur_node == None:
                print("ERROR: 'Get' Index %d out of range!" % index)
                return
            
            if cur_idx == index:
                print(cur_node.data)
                return cur_node.data

            cur_idx += 1


    # 设置指定节点的数据, index starts from 0
    def set(self, index, data):
        # if index >= self.length() or index < 0:   # 这样多了一次 length 遍历, 可以不用这样判断
        if index < 0:
            print("ERROR: 'Set' Index out of range!")
            return None
        
        # 初始化
        cur_idx = 0
        cur = self.head
        while True:
            cur = cur.next

            # 在指针移动之后, 判断index是否已经超出范围
            if cur == None:
                print("ERROR: 'Set' Index %d out of range!" % index)
                return

            if cur_idx == index:
                cur.data = data
                return

            cur_idx += 1


    # 删除 index 位置的结点(index starts from 0) --- 注意: 思路有点不一样, 不能惯性思维
    def erase(self, index):
        # # # 好多细节没处理好
        # if index < self.length() and index >=0:
        #     idx = 0
        #     cur = self.head.next # 这样初始化行不行
        #     prev = None
        #     # 其实这里不需要判断 cur 是否为 None, index 范围内 cur 绝对不是 None
        #     while (cur is not None) and idx < index:
        #         prev = cur # 记住当前结点
        #         cur = cur.next # 记住下一个结点 - 如果当前cur已经是最后一个结点, cur.next 就为 None
        #         idx += 1
        #     if idx < self.length() - 1: # 判断当前结点是不是最后一个
        #         # 万一没有进入while循环, 直接跳到这一步, 那prev就挂了
        #         prev.next = cur.next
        #     else:
        #         prev.next = None
        # else:
        #     # 给出的index不在合理范围内
        #     print('The given index is out of range')


        # Best Practice
        if index >= self.length() or index < 0:  # added 'index<0' post-video
            print("ERROR: 'Erase' Index out of range!")
            return
        cur_idx = 0 # 第一个结点的位置
        cur_node = self.head # cur_node首先指向表头 data[-1], 保证了 last_node滞后 cur_idx 一个位置
        while True:
            # 这个方法的难点在于 cur_node、cur_idx的初始化、循环逻辑的设计、前中后结点关系的把握

            # 结点指针层次: last_node(-1) cur_node(0) cur_node.next(1)
            
            # index < self.length 保证了 cur_node(0) 不为 None, 也就保证了cur_node.next(1)不报错
            #   如果是空链表, self.length = 0, 直接打印错误退出
            #   如果链表长度为1, last_node = head(data[-1]), cur_node = data[0], cur_node.next = None
            
            # 如果index是最后一个位置, 例:链表长度为2, index = 1
            #   此时循环的第二次: last_node = data[0]、cur_node = data[1]、cur_node.next = None

            # 进到while循环之后才开始真正的初始化
            last_node = cur_node # last_node作为循环内的临时变量即可
            cur_node = cur_node.next # 因为初始化的时候 cur_node 滞后一个位置, 所以 cur_node.next才是真正的 cur_node

            # 初始化完之后进行index判断
            if cur_idx == index:
                last_node.next = cur_node.next  # 不管 cur_idx是否为最后一个结点, 删除操作都是 last_node(-1).next = cur_node.next(1)
                return

            cur_idx += 1 # 判断为否的话, cur_idx + 1(下一个数据位置)进入下一个循环


    # 单链表反向
    def reverse(self):
        cur = self.head # 当前结点
        prev = cur # 记录上一节点（失败点prev初始化）
        next = self.head.next # 下一个结点（冗余的next）
        first = next # 记录一下第一个结点
        
        while next != None: #（while遍历条件选错了）
            next = cur.next # 先保存下一个结点, 避免后面改变cur.next时无法找到顺序下的下个结点
            cur.next = prev # 调转当前结点的next指针的指向
            prev = cur # prev指向当前结点, 作为下一轮的上一个结点
            cur =  next # cur指针指向下一个结点, 如此才能获得遍历累加(next和cur都是一样的, next是冗余的)
        
        if first != None:
            first.next = None
            self.head.next = prev
    # 单链表反向要完成的任务: 
    # 1. 完成链表的遍历; 
    # 2. 完成结点next指针的逆转(逆转前保存好下一个结点供遍历,需要有结点遍历指针累加,要能获得当前结点的上一个结点)
    # 3. 确保首结点的next指向None
    # 4. 确保头部的next指向之前的尾结点            
    def reverseBestPractice(self):
        prev = None # prev的初始化指向 None 比较合理（这样能确保之前的首结点的next指向None）, 再怎么理解, prev 一开始都应该是None
        current = self.head # 当前结点

        while(current is not None): # 用current作为遍历观察条件, 此时的current是上一轮的next
            next = current.next # 首先记录下一个结点, 在最后让current指向下一个结点, 如此才能推进循环; next作为局部变量即可, 只是做一个中间变量暂存next结点
            current.next = prev # 调转当前结点的next指针的指向（同时确保了之前的首结点的next指向None）
            prev = current # prev指向当前结点, 当前结点就是下一轮的'prev结点'
            current = next # cur指针指向下一个结点, 如此才能推进循环
        self.head = prev 


    # 找到链表的中心位置 --- 知道了length不就知道了中心吗 --- 要求在不进行length遍历的情况下找到中心节点
    # 快慢指针: 快指针能否走完2步、链表是奇数还是偶数
    # preMid: 默认为False, 表示链表为偶数结点时, 选中间后结点作为中间结点, 反之为中间前结点作为中间结点
    def findMid(self, preMid = False):
        print('find mid')
        fast = self.head
        slow = self.head
        while fast != None:
            prev = slow # 保存一下当前的slow
            slow = slow.next # while一进来slow就先走一步, 这样得到的中点, 在偶数情况下, 是后中点
            
            # 快指针刚好走到最后一个结点(走完了2步)
            if fast.next == None:
                if preMid == True:
                    print('链表长度为偶数, 中间前结点为: ', prev.data)
                    return prev.data
                else:
                    print('链表长度为偶数, 中间后结点为: ', slow.data)
                    return slow.data
            
            # 如果fast.next != None, fast.next.next == None, 说明fast没走完2步就走到了最后一个结点
            else:
                fast = fast.next.next

        # fast没走完2步退出while循环之后, 输出中间结点
        print('链表长度为奇数, 中间结点为: ', slow.data)
        return slow.data


    # 删除链表倒数第 n 个结点
    def eraseLastNth(self, n):
        '''
        Method one: Maintain two pointers – reference pointer and main pointer. 
        Initialize both reference and main pointers to head. 
        First, move reference pointer to n nodes from head. 
        Now move both pointers one by one until the reference pointer reaches the end. 
        Now the main pointer will point to nth node from the end. Return the main pointer.
        '''
        # 边界检查 --- 多进行了一次遍历, 浪费性能, 要求能在执行的同时确认边界
        # if n > self.length() or n <= 0:
        #     print("ERROR: 'Erase' Index out of range!")
        #     return
        if n <= 0:
            print("ERROR: 'Erase' Index invalid!")
            return
        mainPtr = self.head
        referPtr = self.head
        last = self.head
        count = 0
        while count < n:
            # 先进行移动和计数   
            referPtr = referPtr.next
            count += 1
             # 如果 reference pointer 往后移的过程中变为了None, 就说明 n 超出了合理范围
            if referPtr == None:
                print("ERROR: 'Erase' Index out of range!")
                return
        
        while referPtr != None:
            last = mainPtr
            mainPtr = mainPtr.next
            referPtr = referPtr.next

        print('The %dth node from the end is %d' % (n, mainPtr.data))
        print('Now we are going to erase it......')
        last.next = mainPtr.next 
    

    # 打印倒数第n个结点 --- 有问题的实现 --- 反面例子
    def printNthFromLast(self, n): 
        # 没有判断 n 的范围, 如果n <= 0, 程序报错

        main_ptr = self.head 
        ref_ptr = self.head  
      
        count = 0 
        if(self.head is not None): 
            while(count < n ): 
                # 先判断然后再移动指针, 这样在边界上会有问题
                if(ref_ptr is None): 
                    print ("% d is greater than the no. pf nodes in list" %(n)) 
                    return
   
                ref_ptr = ref_ptr.next
                count += 1
        print(ref_ptr)
        while(ref_ptr is not None): 
            main_ptr = main_ptr.next 
            ref_ptr = ref_ptr.next
  
        print ("Node no.% d from last is % d " %(n, main_ptr.data)) 


    # 链表中环的检测
    def checkLoop(self):
        None


l = LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(4)
l.append(5)
l.append(6)
l.display()
l.get(0)
l.get(1)
l.get(2)
l.get(3)
l.get(4)
l.get(5)
l.get(6)
l.get(7)
l.set(0, 7)
l.set(1, 6)
l.set(2, 5)
l.set(3, 4)
l.set(4, 3)
l.set(5, 2)
l.set(6, 1)
l.set(7, 0)
l.display()
# l.reverse()
# l.display()
# l.erase(0)
# l.display()
# l.set(0,100)
# l.display()
# l.findMid(True)
# l.findMid()
# l.display()
# l.printNthFromLast(0)
# l.display()