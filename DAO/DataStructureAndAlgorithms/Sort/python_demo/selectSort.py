# 选择排序
# - 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间
# - 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾

def select_sort(arr):
    count = 0 # 当前已排序元素数count

    # 当已排序元素小于列表长度时执行循环
    while count < len(arr):
        j = count # 已排序区间尾部指针

        # 找到未排序区域内最小元素的位置
        for i in range(count, len(arr)):
            if arr[j] > arr[i]:
                j = i
        # 如果未排序区域内最小元素不在最左边, 则可以平移并且把最小元素插入已排序区间的末尾
        if j > count:
            tmp = arr[j]
            while j > count:
                arr[j] = arr[j-1] # 一定注意要从右边开始平移
                j -= 1 # 指针左移
            arr[count] = tmp
        count += 1
    
    print(arr)

a = [2, 6, 14, 1, 4, 5, 7, 8, 9, 0, 10, 13]
select_sort(a)