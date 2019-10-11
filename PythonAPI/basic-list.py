# -*- coding: utf-8 -*-  
import copy

## ---- 列表 - 在js里这货叫数组
## ---- 列表是一组可以修改的序列，可以存放任何数据类型。
print(type([])) # <type 'list'> 列表用 [] 表示; ---- 注: python3 中输出为<class 'list'>

## ---- 定义列表
l = [1,'a',{},[],True]
print(l) # [1,'a',{},[],True]


## ---- 切片
## ---- 由于列表是序列的性质(js里把这种性质叫迭代器-iterator)，所以支持切片。
print([1,2,3][0])
print([1,2,3][-1]) # 逆向切片
print([1,2,3][0:2]) # 切出子列表，这个性质比js的方便
print([1,[1,2,3]][1][1]) #列表嵌套


## ---- All slice operations return a new list containing the requested elements. 
## ---- This means that the following slice returns a new (shallow-浅的) copy of the list:
squares = [1, 4, 9, 16, 25]
newSquares = squares[:]  
print(newSquares)# [1, 4, 9, 16, 25]

## ---- Lists also supports operations like concatenation - 串联 - concat
print(squares + [36, 49, 64, 81, 100])

## ---- 这个挺强大的 - 有点解构赋值的意思
## ---- Assignment to slices is also possible, and this can even change the size of the list or clear it entirely
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
print(letters) # ['a', 'b', 'c', 'd', 'e', 'f', 'g']

letters[2:5] = ['C', 'D', 'E'] ## ---- replace some values
print(letters) # ['a', 'b', 'C', 'D', 'E', 'f', 'g']

letters[2:5] = [] ## ---- now remove them
print(letters) # ['a', 'b', 'f', 'g']

letters[:] = [] ## ---- clear the list by replacing all the elements with an empty list
print(letters) # []




## ---- 列表操作：比较常用的一些 ---- ##

## ---- 长度 - len
print('[1,2,3]的长度是%d' % len([1,2,3]))

## ---- 连接 - join
print(''.join(['a','b','c'])) # 当你需要把列表变成字符串的时候 
## ---- 与js数组的join方法类似，只不过 目标数组 和 jointer 的位置调换过来了

## ---- 末尾插入 - append
l = [1,2]
l.append(3)
print(l)

## ---- 插入指定位置 - insert
l = [1,2,3]
l.insert(2, 'a')
print(l)

## ---- 获取并删除 - pop
l = [1,2,3]
ll = l.pop(0) # 这里指定了弹出第一位, 如果不指定位置默认弹出最后一位
print(l)
print(ll)

## ---- 位置 - index
print('1在[1,2,3]的第%d位' % ([1,2,3].index(1)+1))

## ---- 数字排序 - sort; 注意区分 内建函数 sorted(target, cmp)
l = [1,3,2]
l.sort()
print(l)

## ---- 列表合并 - extend
l = [1,2]
l.extend([3])
print(l)


## ---- 可变性质：跟字符串不同的是，我们针对列表的绝大部分操作，都是直接修改列表的值，而不是返回一个新值。

## ---- 内存空间：id()用于查找内存空间的地址。

## ---- 变量赋值只是空间地址的引用
l= [1,2,3]
ll = l
print(id(l))
print(id(ll))

## ---- 修改ll 等于 修改l
ll[0] = 'hello'
print(l)

## ---- 拷贝 | copy 是标准库模块，需要导入，关于标准库，请看后面相关章节
## ---- 通过拷贝，l 和 ll 就是两块独立的空间，互不影响
ll = copy.copy(l) ## 浅层复制
print(id(l),id(ll))

## ---- First Steps Towards Programming
a, b = 0, 1  ### 可以这样赋值...
while b < 10:
    print (b)
    a, b = b, a+b
