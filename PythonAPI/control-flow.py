# -*- coding: utf-8 -*-  

# # if Statements
# x = int(raw_input("Please enter an integer: "))
# if x < 0:
#     x = 0
#     print 'Negative changed to zero'
# elif x == 0:
#     print 'Zero'
# elif x == 1:
#     print 'Single'
# else:
#     print 'More'


# # # for Statements --- 类似js的for in
# # The for statement in Python differs a bit from what you may be used to in C or Pascal. 
# # Rather than always iterating over an arithmetic progression of numbers (like in Pascal), 
# # or giving the user the ability to define both the iteration step and halting condition (as C), 
# # Python’s for statement iterates over the items of any sequence (a list or a string), 
# # in the order that they appear in the sequence. 
# # For example (no pun intended)：Measure some strings:
# words = ['cat', 'window', 'defenestrate']
# for w in words:
#     print w, len(w)

# # 如果您需要在循环内修改正在迭代的序列，建议您首先进行复制。
# # 迭代序列不会隐式生成副本。
# # 切片符号使得这一点特别方便：
# for w in words[:]:  # Loop over a slice copy of the entire list.
#     if len(w) > 6:  # 如果当前单词的长度大于6, 就把它插入到列表的首位去
#         words.insert(0, w)
# print(words)

# # 如果for in 的是 words 列表本身, 则可能会出现问题(序列死循环, 程序卡死) 
# words = ['cat', 'window', 'defenestrate']
# for w in words:  # Loop over a slice copy of the entire list.
#     print(w)
#     if len(w) > 6:
#         words.insert(0, w) 


# # # The range() Function --- 这个也蛮强大的
# # if you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. 
# # It generates lists containing arithmetic progressions:
# print(range(10))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# # The given end point is never part of the generated list; 
# # range(10) generates a list of 10 values, the legal indices for items of a sequence of length 10. 
# # It is possible to let the range start at another number, 
# # or to specify a different increment (even negative; sometimes this is called the ‘step’):
# print(range(5, 10)) # [5, 6, 7, 8, 9]
# print(range(0, 10, 3)) # [0, 3, 6, 9]
# print(range(-10, -100, -30)) # [-10, -40, -70]

# # To iterate over the indices of a sequence, you can combine range() and len() as follows:
# a = ['Mary', 'had', 'a', 'little', 'lamb']
# for i in range(len(a)):  # range(len(a))生成一个list, 'for i in sequence'是python for循环的语法
#     print i, a[i]

# # In most such cases, however, it is convenient to use the enumerate() function, see Looping Techniques



# # # break and continue Statements, and else Clauses on Loops
# # The break statement, like in C, breaks out of the innermost enclosing for or while loop.
# # Loop statements may have an else clause; 
# # it is executed when the loop terminates through exhaustion of the list (with for) or when the condition becomes false (with while), 
# # but not when the loop is terminated by a break statement. 
# # This is exemplified by the following loop, which searches for prime numbers(质数):
# for n in range(2, 10):
#     for x in range(2, n):   # 注意range funciton的右侧数字是开区间,不出现在生成的list内
#         if n % x == 0:      # n与子list里面每个元素求余
#             print n, 'equals', x, '*', n/x
#             break
#     # Look closely: the else clause belongs to the for loop, not the if statement
#     else:
#         # loop fell through without finding a factor
#         print n, 'is a prime number'
        
# # The continue statement, also borrowed from C, continues with the next iteration of the loop:
# for num in range(2, 10):
#     if num % 2 == 0:
#         print "Found an even number", num
#         continue
#     print "Found a number", num



# # # pass Statements
# # The pass statement does nothing. 
# # It can be used when a statement is required syntactically but the program requires no action. 
# # For example:
# while True:
#     pass  # Busy-wait for keyboard interrupt (Ctrl+C)

# # This is commonly used for creating minimal classes:
# class MyEmptyClass:
#     pass

# # Another place pass can be used is as a place-holder for a function or conditional body 
# # when you are working on new code, allowing you to keep thinking at a more abstract level. 
# # The pass is silently ignored:
# def initlog(*args):
#     pass   # Remember to implement this!
