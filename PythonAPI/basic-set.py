# -*- coding: utf-8 -*-  

# # 集合：set是一个无序集合，没有重复的元素。
# # 基本用途包括成员资格测试(membership testing)和消除重复条目(eliminating duplicate entries)。
# # 集合对象还支持数学运算，如并集(union)、交集(intersection)、差分(difference)和对称差分(symmetric difference)

# # 可以使用大括号或set()函数创建集合。注意：要创建空集合，必须使用set（()，而不是{}；后者创建空字典
# print(type(set())) #  <type 'set'>

# basket = ['apple', 'orange', 'apple', 'pear', 'orange', 'banana']
# fruit = set(basket)  # create a set without duplicates
# print(fruit)

# print('orange' in fruit)  # fast membership testing
# print('crabgrass' in fruit)


# # 集合在数学中的应用 --- 就是数学中"集合"的概念嘛 --- 强大
# a = set('abracadabra')
# b = set('alacazam')
# print(a,b)    # unique letters in a：a、b两个集合
# print(a-b)  # letters in a but not in b：集合a与b的差/差分
# print(a|b)  # letters in either a or b：并集
# print(a&b)  # letters in both a and b：交集
# print(a^b)  # letters in a or b but not both：对称差分


# Similarly to list comprehensions, set comprehensions are also supported:
a = {x for x in 'abracadabra' if x not in 'abc'}
print(a)