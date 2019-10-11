# -*- coding: utf-8 -*-  

# # Defining Functions
def fib(n):    # write Fibonacci series up to n
    """Print a Fibonacci series up to n."""
    a, b = 0, 1
    while a < n:
        print (a),
        a, b = b, a+b
# Now call the function we just defined:
fib(1000)

# 有关函数定义更深入知识、函数变量作用域、函数重命名、函数的返回，请直接到官网文档中查找，这里不细述

