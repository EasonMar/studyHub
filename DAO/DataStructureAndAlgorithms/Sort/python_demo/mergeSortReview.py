# 归并排序递归逻辑 - 关键
def merge_sort(arr, start, end):
    if start >= end:
        return
    
    # 将列表划分为前后两个部分
    mid = int(start + (end - start) / 2)
    
    # 对前后两个部分进行排序
    merge_sort(arr, start, mid)
    merge_sort(arr, mid+1, end)

    # 当无法再往下进行划分时, 归纳合并(合并+排序)当前的两个部分
    # merge(arr, start, mid, end)
    mergeViaIndex(arr, start, mid, end)

# 归纳合并函数 - 关键吃透
def merge(arr, start, mid, end):
    tmp = [] # 临时列表

    # 截取 start ~ mid 部分
    L = arr[start : mid + 1]
    # 截取 mid + 1 ~ end 部分
    R = arr[mid + 1 : end + 1]

    # 比较 L 和 R 元素的大小, 并插入 tmp
    i, j = 0, 0
    while i < len(L) and j < len(R):
        if L[i] < R[j]:
            tmp.append(L[i])
            i += 1
        else:
            tmp.append(R[j])
            j += 1

    # 判断有元素未加入tmp的是哪个部分
    remain = L
    index = i
    if i >= len(L):
        remain = R
        # index = j
    
    # 将剩余的元素 追加到 tmp 中
    # while index < len(remain):
    #     tmp.append(remain[index])
    #     index += 1
    
    # 使用列表的拓展方法: list.extend 
    # tmp.extend(remain[index:])
    
    # 还有更简洁的列表合并方式: list1 + list2, 爽歪歪啊
    tmp += remain[index:]
    
    # 将tmp中已排序的值更新到arr中
    arr[start : end + 1] = tmp

# 归纳合并函数 - 第二种思路: 比较不通过切片, 而是直接通过指针操作来进行
def mergeViaIndex(arr, start, mid, end):
    tmp = [] # 临时列表

    # 确定前后两个部分的起始指针
    i, j = start, mid + 1

    # 比较前后两部分元素的大小, 并插入 tmp
    while i <= mid and j <= end:
        if arr[i] < arr[j]:
            tmp.append(arr[i])
            i+=1
        else:
            tmp.append(arr[j])
            j+=1
    
    # 判断有元素未加入tmp的是哪个部分
    _s, _e = i, mid
    if i > mid:
        _s, _e = j, end
    
    # 切片 + 列表合并 = 将剩余的元素 追加到 tmp 中
    tmp += arr[_s : _e + 1]

    # 将tmp中已排序的值更新到arr中
    arr[start : end + 1] = tmp

# 封装merge_sort参数初始化
def merge_sort_func(arr, n):
    merge_sort(arr, 0, n - 1)

a = [8, 7, 6, 9, 5, 35, 10, 12, 11]
merge_sort_func(a, len(a))
print(a)

# 归并排序是一种稳定的排序算法
# 归并排序不是原地的排序算法: 因为归并排序的合并函数，在合并两个有序数组为一个有序数组时，需要借助额外的存储空间。