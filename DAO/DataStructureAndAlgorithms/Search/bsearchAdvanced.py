## 给定的数组存在重复的元素
Arr = [2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 6, 7]

# 变体一：查找第一个值等于给定值的元素
def bsearchFirst(arr, len, tar):
    low = 0
    high = len - 1
    find = -1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == tar: # 这里只表示找到了, 不一定是第一个
            find = mid
            # high = int(low + (mid - low) / 2) 为啥这样有问题呢？ low=mid+1，high=mid-1。注意这里的 +1 和 -1，如果直接写成 low=mid 或者 high=mid，就可能会发生死循环。比如，当 high=3，low=3 时，如果 a[3] 不等于 value，就会导致死循环
            # high = int(low + (mid - low) / 2) - 1 # 继续找 --- 这里错了, 这里不该进行二分, 否则会错过很多数据
            high = mid - 1 # 这个才是正确的寻找姿势
        elif arr[mid] < tar:
            low = mid + 1
        else:
            high = mid - 1
    return find  # 找不到时

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
    find = -1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] == tar: # 这里只表示找到了, 不一定是最后一个
            find = mid
            low = mid + 1 # 继续找
        elif arr[mid] < tar:
            low = mid + 1
        else:
            high = mid - 1
    return find  # 找不到时

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
    find = -1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] >= tar:
            find = mid
            high = mid - 1 
        # elif arr[mid] < tar: 多余
        #     low = mid + 1
        # else:
        #     high = mid - 1
        else:
            low = mid + 1
    return find  # 找不到时

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
    find = -1
    while low <= high:
        mid = low + (high - low) // 2
        if arr[mid] <= tar: # 这里只表示找到了, 不一定是最后一个
            find = mid
            low = mid + 1 # 继续找
        # elif arr[mid] < tar: 多余了
        #     low = mid + 1
        else:
            high = mid - 1
    return find  # 找不到时

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