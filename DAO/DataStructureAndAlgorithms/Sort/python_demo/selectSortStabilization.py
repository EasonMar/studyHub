# 选择排序
# - 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间
# - 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾
# 
# Stabilization
# - 选择排序原来的算法是不稳定的
# - 这里通过平移操作替换交换操作，达到稳定化
# - 这样做就已经不是典型的选择排序了

def select_sort(arr):
    sortedCount = 0 # 当前已排序元素数sortedCount

    # 当已排序元素个数达到 n - 1 个, 就保证了顺序已经排好了
    while sortedCount < len(arr) - 1:
        j = sortedCount # 已排序区间尾部指针

        # 找到未排序区域内最小元素的位置
        for i in range(sortedCount, len(arr)):
            if arr[j] > arr[i]:
                j = i
        # 如果未排序区域内最小元素不在最左边, 则可以平移并且把最小元素插入已排序区间的末尾
        if j > sortedCount:
            tmp = arr[j]
            # 如此一来就移除了交换带来的不稳定性
            while j > sortedCount:
                arr[j] = arr[j-1] # 一定注意要从右边开始平移
                j -= 1 # 指针左移
            arr[sortedCount] = tmp
        sortedCount += 1
    
    print(arr)

a = [2, 6, 14, 1, 4, 5, 7, 8, 9, 0, 10, 13]
select_sort(a)