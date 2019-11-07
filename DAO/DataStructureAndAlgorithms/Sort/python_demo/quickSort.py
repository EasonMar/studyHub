# 递归逻辑 - 关键
def quick_sort(arr, start, end):
    if start >= end: # 如果排序区间小于1, 则退出
        return

    div_point = partition(arr, start, end)
    quick_sort(arr, start, div_point - 1)
    quick_sort(arr, div_point + 1, end)


# 分区函数 --- 关键吃透
# 遍历 start 到 end 之间的数据, 将小于 pivot 的元素放到左区间, 将大于 pivot 的元素放到右区间, pivot 放中间
def partition(arr, start, end):
    pivot = arr[end]  # 选最后一个元素作为分隔数

    i = start # 指向最左边的比 pivot 大的元素, 并等候与右区间的比 pivot 小的元素交换位置

    # 遍历 start ~ (end - 1) 之间的元素, 完成大小分区任务
    for j in range(start, end):
        if arr[j] < pivot:
            # python交换 list 两个元素的位置, Python赋值的特性
            arr[j], arr[i] = arr[i], arr[j]
            i += 1

    # 交换 i end 元素的位置, 完成 分区函数 的全部任务目标
    arr[i], arr[end] = arr[end], arr[i]
    return i


# 封装quick_sort的参数初始化: arr:要排序的列表对象; n: 列表对象的length
def quick_sort_func(arr, n):
    quick_sort(arr, 0, n-1)

a = [6, 11, 13, 3, 1, 9, 8, 12, 17, 98, 25]
quick_sort_func(a, len(a))
print(a)

# 快速排序是一种原地、不稳定的排序算法
# 稳定性的概念是说，如果待排序的序列中存在值相等的元素，经过排序之后，相等元素之间原有的先后顺序不变。

# Time Complexity: O(nlogn)