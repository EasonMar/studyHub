# -*- coding: utf-8 -*-  

# # # 字符串
# # 转义字符串
# print('a\nb') # \n 换行 | windows系统换行是 \r\n
# print('a\tb') # \t 制表符
# print('\\') # \ 本身也要转译
# print('\'\"') # 引号有时候也需要转译
# print('\'"') # 其实这里双引号不需要转义

# print(r'c:\n\t') # r=raw,输出原始字符串


# 格式化：格式化是常见的字符串拼装形式。使用格式'占位符1 占位符2' % (字符串1, 字符串2)
# 占位符
# %d 整数
# %f 浮点数：控制输出位数 %.nf，n为位数
# %x 十六进制
# %s 字符串 | 如果不想那么严谨，所有类型都能有 %s 表示
# print('hello %s' % 'word')
# print('%s %s' % ('hello', 'world'))
# name='小明'
# sex='男'
# age=18
# salary=199.22
# print('%s %s，今年%d岁，在某IT公司上班，月收入%.3f元' % (name, sex, age, salary))


# # 字符合并
# print('a' + 'b')


# 切片：切片是Python赋予序列的独特能力，我们前面说过，字符串是一组不可修改的序列。

# 序列
# 'abcde' \ '01234'

# # 按照这个序列索引取值的行为，就是切片。
# print('abcde'[0])
# print('abcde'[1:3]) # 这个性质比js的方便

# #不可变性质
# 'abc'[0] = 'b' # (不能直接修改字符串的值)  "TypeError: 'str' object does not support item assignment"


# # 字符串操作/方法：比较常用的一些。
# # 长度
# print(len('abc'))

# # 分解
# print('a,b,c'.split(',')) # 当你需要把字符串变成列表(js里的数组)的时候

# # 连接
# print(','.join('abc'))  # 与js不太一样，js里join是数组(python里面称列表)的方法：[1,2,3].join('X')  ==> "1X2X3"

# # 首字母大写
# print('abc'.capitalize())

# # 大写
# print('abc'.upper())

# # 小写
# print('ABC'.lower())

# # 大小写转换
# print('AbC'.swapcase())

# # 检测开头字符
# print('abc'.startswith('a'))

# # 检测结尾字符
# print('abc'.endswith('a'))

# # 字符首次出现的位置 （序列索引，从0开始）
# print('cc'.find('c'))

# # 字符最后出现的位置
# print('cc'.rfind('c'))

# # 次数
# print('cc'.count('c'))

# # 替换
# print('a'.replace('a','b',100)) # 把a替换成b，第三个参数100指：最多替换100个


# # 再说不可变：因为字符串是不可改变的，所有replace不能直接修改，只是返回一个新的值
# name = 'Joe'
# name2 = name.replace('oe', 'ason')
# print(name)
# print(name2)


# # 3 times 'un', followed by 'ium'
# print(3 * 'un' + 'ium')

# Two or more string literals next to each other are automatically concatenated
print('Py' 'thon')

# This feature is particularly useful when you want to break long strings:
# This only works with two literals though, not with variables or expressions
text = ('Put several strings within parentheses '
        'to have them joined together.')
print(text)