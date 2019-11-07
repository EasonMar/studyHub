## 给定的数组存在重复的元素
Arr = [2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7]

# 变体一：查找第一个值等于给定值的元素
def bsearchFirst(arr, len, tar):
    low = 0
    high = len - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == tar: 
            # 多一步判断可以少一些循环
            # 如果mid已经是第一位、或者mid-1的值不等于给定值, 则可以判断当前的mid就是所要找的位置
            if mid == 0 or arr[mid - 1] != tar:
                return mid
            else:
                high = mid - 1 
        elif arr[mid] < tar:
            low = mid + 1
        else:
            high = mid - 1
    return -1

target = int(input('input the target and search for the first one:'))
position = bsearchFirst(Arr, len(Arr), target)
if position > -1:
    print('The first target appear in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')



# 变体二：查找最后一个值等于给定值的元素
def bsearchLast(arr, len, tar):
    low = 0
    high = len - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == tar:
            # 多一步判断可以少一些循环
            # 如果mid已经是最后一位、或者mid+1的值不等于给定值, 则可以判断当前的mid就是所要找的位置
            if mid == len - 1 or arr[mid + 1] != tar:
                return mid
            else:
                low = mid + 1
        elif arr[mid] < tar:
            low = mid + 1
        else:
            high = mid - 1
    return -1

target = int(input('input the target and search for the last one:'))
position = bsearchLast(Arr, len(Arr), target)
if position > -1:
    print('The last target appear in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')



# 变体三：查找第一个大于等于给定值的元素
def bsearchFirstGTE(arr, len, tar):
    low = 0
    high = len - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] >= tar:
            # 多一步判断可以少一些循环
            # 如果mid已经是第一位、或者mid-1的值已经小于给定值了, 则可以判断当前的mid就是所要找的位置
            if mid == 0 or arr[mid - 1] < tar:
                return mid
            else:
                high = mid - 1 
        else:
            low = mid + 1
    return -1

target = int(input('input the target and search for the first target larger then or equal one:'))
position = bsearchFirst(Arr, len(Arr), target)
if position > -1:
    print('The first target larger then or equal value appear in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')



# 变体四：查找最后一个小于等于给定值的元素
def bsearchLastLTE(arr, len, tar):
    low = 0
    high = len - 1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] <= tar:
            # 多一步判断可以少一些循环
            # 如果mid已经是最后一位、或者mid+1的值大于给定值, 则可以判断当前的mid就是所要找的位置
            if mid == len - 1 or arr[mid + 1] > tar:
                return mid
            else:
                low = mid + 1
        else:
            high = mid - 1
    return -1

target = int(input('input the target and search for the last target less then or equal one:'))
position = bsearchLast(Arr, len(Arr), target)
if position > -1:
    print('The last target less then or equal value target appear in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')

'''
二分查找应用场景的局限性
    二分查找依赖的是顺序表结构，简单点说就是数组
    二分查找针对的是有序数据 (所以前面先学排序)
    数据量太小不适合二分查找
    数据量太大也不适合二分查找
'''