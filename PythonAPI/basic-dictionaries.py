# -*- coding: utf-8 -*-  

## ---- 字典：字典是一个key=>value的无序集合，一个key只能对应一个value。
## ---- 对应js里面的object-对象

# print(type({})) # <type 'dict'> 字典用 {} 表示

## ---- 定义字典
# d = {'key': 'value'}
# print(d)

## ---- key 必须是不可变类型 | value 任意类型
# {1: 'a', 2: 2, 3: [], 4: {}}




# 字典操作：比较常用的一些。

# 取值
print({'k':'v'}['k'])

# 取值
print({}.get('a', 1)) # 取值错误自定义返回
# get(key[, default]) 
# Return the value for key if key is in the dictionary, else default. 
# If default is not given, it defaults to None, so that this method never raises a KeyError.

# 赋值
d = {}
d['k'] = 'v'

# 获取 key
d = {1:'a', 2:'b'}
dict_keys = d.keys()
print(list(dict_keys)) # 把获取到的 key 转换成一个列表

# 获取 value
print({1:'a',2:'b'}.values())

# 获取 key=>value
d = {1:'a', 2:'b'}.items()
print(d)

# 判断
print('a' in {'a', 1}) # 有a的key么？

# 获取并删除
d = {1:'a'}
print(d.pop(1))
print(d)

# 字典合并 (由于字典的key不可重复，合并之后，重复的key会被覆盖)
d = {1:1}
d.update({2:2})
print(d)

# 删除
d = {1:'a'}
del d[1]
print(d)

# 清空
d = {1:'a', 2: 'b'}
d.clear()
print(d)

## ---- 拷贝
# {}.copy({}) # 性质同列表篇