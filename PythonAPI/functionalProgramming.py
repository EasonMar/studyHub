import functools,time,math

### 高阶函数
def highOrderFunc():
    # - map
    def format_name(s):
        return s[0].upper()+s[1:].lower()
        # return s.lower().capitalize() # 这样也可以
    print(map(format_name, ['adam', 'LISA', 'barT']))
    print(list(map(format_name, ['adam', 'LISA', 'barT'])))

    # - reduce
    def prod(x, y):
        return x*y
    print(functools.reduce(prod, [2, 4, 5, 7, 12])) # python3 reduce 在 functools 中

    # - filter
    def is_sqr(x):
        a = math.sqrt(x)
        b = int(a)
        return a == b
    print(filter(is_sqr, range(1, 101)))
    print(list(filter(is_sqr, range(1, 101))))

    # - sorted - python2\3区别非常大
    # def cmp_ignore_case2(s1, s2):
    #     if s1.lower() < s2.lower():
    #         return -1
    #     elif s1.lower() > s2.lower():
    #         return 1
    #     return 0
    # print(sorted(['bob', 'about', 'Zoo', 'Credit'], cmp_ignore_case2))

    def cmp_ignore_case3(s1, s2):
        if s1.lower() < s2.lower():
            return -1
        elif s1.lower() > s2.lower():
            return 1
        return 0
    print(sorted(['bob', 'about', 'Zoo', 'Credit'], key=functools.cmp_to_key(cmp_ignore_case3)))
highOrderFunc()



### 匿名函数
## 在Python中，对匿名函数提供了'有限'支持
def anonymousFunc():
    # python3中 map\filter 输出是一个list的内存地址
    print(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9]))
    print(filter(lambda s: s and len(s.strip()) > 0, ['test', None, '', 'str', '  ', 'END']))
    # 这样看此内存地址的内容
    print(list(map(lambda x: x * x, [1, 2, 3, 4, 5, 6, 7, 8, 9])))
    print(list(filter(lambda s: s and len(s.strip()) > 0, ['test', None, '', 'str', '  ', 'END'])))
anonymousFunc()


### decorator - 装饰器
## Python的 decorator 本质上就是一个高阶函数，它接收一个函数作为参数，然后，返回一个新函数

def decWithoutParam():
   # ---------- 无参数decorator ----------
    def performance(f):
        def fn(*arg, **kw):
            begin = time.time()
            result = f(*arg, **kw)
            end = time.time()
            print('call %s() in %fs' % (f.__name__, (end-begin)))
            return result
        return fn

    @performance
    def factorial(n):
        return functools.reduce(lambda x,y: x*y, range(1, n+1))
    
    print(factorial(10))
    # -------------------------------------
decWithoutParam()

def decWithParam():
    # ---------- 带参数decorator ----------
    def performance(unit):  # 多了一层用以接收参数
        def perf_decorator(f):
            def wrapper(*args, **kw):
                t1 = time.time()
                r = f(*args, **kw)
                t2 = time.time()
                t = (t2 - t1) * 1000 if unit=='ms' else (t2 - t1)
                print('call %s() in %f %s' % (f.__name__, t, unit))
                return r
            return wrapper
        return perf_decorator

    @performance('ms')
    def factorial(n):
        return functools.reduce(lambda x,y: x*y, range(1, n+1))
    print(factorial(10))
    # -------------------------------------
decWithParam()

def betterDec():
    # ---------- 完善decorator ----------
    def performance(unit):
        def perf_decorator(f):
            @functools.wraps(f) # 把原函数的所有必要属性都一个一个复制到新函数上
            def wrapper(*args, **kw):
                t1 = time.time()
                r = f(*args, **kw)
                t2 = time.time()
                t = (t2 - t1) * 1000 if unit=='ms' else (t2 - t1)
                print('call %s() in %f %s' % (f.__name__, t, unit))
                return r
            return wrapper
        return perf_decorator

    @performance('ms')
    def factorial(n):
        return functools.reduce(lambda x,y: x*y, range(1, n+1))
    print(factorial.__name__)
    # -------------------------------------
betterDec()


### 偏函数
def partial():
    # -------------------------------------
    def c(s1, s2):
        if s1.lower() < s2.lower():
            return -1
        elif s1.lower() > s2.lower():
            return 1
        return 0
    sorted_ignore_case = functools.partial(sorted, key=functools.cmp_to_key(c))
    # sorted_ignore_case = functools.partial(sorted, cmp=c) # python2简单一点, sorted函数不同
    print (sorted_ignore_case(['bob', 'about', 'Zoo', 'Credit']))
    # -------------------------------------
partial()
