# 散列表用的是数组支持按照下标随机访问数据的特性，所以散列表其实就是数组的一种扩展，由数组演化而来。
# 可以说，如果没有数组，就没有散列表

'''
散列思想:
截取参赛编号的后两位作为数组下标，来存取选手信息数据。
当通过参赛编号查询选手信息的时候，我们用同样的方法，取参赛编号的后两位，作为数组下标，来读取数组中的数据

参赛选手的编号我们叫作键（key）或者关键字。我们用它来标识一个选手 --- key
我们把参赛编号转化为数组下标的映射方法就叫作散列函数（或“Hash 函数”“哈希函数”） ---  key 与 哈希值 之间的映射函数
而散列函数计算得到的值就叫作散列值（或“Hash 值”“哈希值”） ---  对应数组下标 (注意: 哈希值还不是最终数组内的值)

该如何构造散列函数呢？我总结了三点散列函数设计的基本要求：
    1. 散列函数计算得到的散列值是一个非负整数；
    2. 如果 key1 = key2，那 hash(key1) == hash(key2)；
    3. 如果 key1 ≠ key2，那 hash(key1) ≠ hash(key2)。
    第三点理解起来可能会有问题，我着重说一下。
    这个要求看起来合情合理，但是在真实的情况下，要想找到一个不同的 key 对应的散列值都不一样的散列函数，几乎是不可能的
    无法完全避免这种"散列冲突"
    常用的散列冲突解决方法有两类，开放寻址法（open addressing）和链表法（chaining）

散列表两个核心问题是散列函数设计和散列冲突解决
散列冲突有两种常用的解决方法，开放寻址法和链表法。散列函数设计的好坏决定了散列冲突的概率，也就决定散列表的性能。
'''

'''
Python 中的字典、Javascript 中的对象, 都是底层自动实现了的散列表
'''