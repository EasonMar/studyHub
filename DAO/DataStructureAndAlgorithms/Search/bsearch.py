# 简单情况: 二分法, 查找给定有序、无重复数据数组中,给定值的位置

Arr = [1, 2, 3, 4, 5, 6, 7]

# 循环
# arr: 给定数组, len: 数组长度, tar: 目标值
def bsearch(arr, len, tar):
    low = 0
    high = len - 1
    while low <= high:  # 结束条件要注意 low == high 时也可以进行, 这时候指针指向了同一个数, 而这个数还未遍历过
        mid = low + (high - low) // 2
        if arr[mid] == tar:
            return mid
        elif arr[mid] < tar:
            low = mid + 1
        else:
            high = mid - 1
    return -1  # 找不到时

target = int(input('input the target:'))
position = bsearch(Arr, len(Arr), target)
if position > -1:
    print('The target is in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')



# 递归函数
def bsearchViaRecursion(arr, low, high, tar):
    if low > high:
        return -1
    mid = low + (high - low) // 2
    if arr[mid] == tar:
        return mid
    elif arr[mid] < tar:
        return bsearchViaRecursion(arr, mid + 1, high, tar)
    else:
        return bsearchViaRecursion(arr, low, mid - 1, tar)
        
target = int(input('input the target again:'))
position = bsearchViaRecursion(Arr, 0, len(Arr)-1, target)
if position > -1:
    print('The target is in the %d position' % int(position+1))
else:
    print('Can\'t find the target!')


'''
二分查找应用场景的局限性
    二分查找依赖的是顺序表结构，简单点说就是数组
    二分查找针对的是有序数据 (所以前面先学排序)
    数据量太小不适合二分查找
    数据量太大也不适合二分查找
'''