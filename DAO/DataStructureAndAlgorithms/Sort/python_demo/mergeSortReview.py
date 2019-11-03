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
    temp = [] # 临时列表

    # 截取 start ~ mid 部分
    firstHalf = arr[start : mid + 1]
    # 截取 mid + 1 ~ end 部分
    secondHafl = arr[mid + 1 : end + 1]

    # 比较 firstHalf 和 secondHafl 元素的大小, 并插入 temp
    i, j = 0, 0
    while i < len(firstHalf) and j < len(secondHafl):
        if firstHalf[i] < secondHafl[j]:
            temp.append(firstHalf[i])
            i += 1
        else:
            temp.append(secondHafl[j])
            j += 1

    # 判断有元素未加入temp的是哪个部分
    leftHalf = firstHalf
    index = i
    if i >= len(firstHalf):
        leftHalf = secondHafl
        # index = j
    
    # 将剩余的元素 追加到 temp 中
    # while index < len(leftHalf):
    #     temp.append(leftHalf[index])
    #     index += 1
    
    # 使用列表的拓展方法: list.extend 
    # temp.extend(leftHalf[index:])
    
    # 还有更简洁的列表合并方式: list1 + list2, 爽歪歪啊
    temp += leftHalf[index:]
    
    # 将temp中已排序的值更新到arr中
    arr[start : end + 1] = temp

# 归纳合并函数 - 第二种思路: 比较不通过切片, 而是直接通过指针操作来进行
def mergeViaIndex(arr, start, mid, end):
    temp = [] # 临时列表

    # 确定前后两个部分的起始指针
    i, j = start, mid + 1

    # 比较前后两部分元素的大小, 并插入 temp
    while i <= mid and j <= end:
        if arr[i] < arr[j]:
            temp.append(arr[i])
            i+=1
        else:
            temp.append(arr[j])
            j+=1
    
    # 判断有元素未加入temp的是哪个部分
    _s, _e = i, mid
    if i > mid:
        _s, _e = j, end
    
    # 切片 + 列表合并 = 将剩余的元素 追加到 temp 中
    temp += arr[_s : _e + 1]

    # 将temp中已排序的值更新到arr中
    arr[start : end + 1] = temp

# 封装merge_sort参数初始化
def merge_sort_func(arr, n):
    merge_sort(arr, 0, n - 1)

a = [8, 7, 6, 9, 5, 35, 10, 12, 11]
merge_sort_func(a, len(a))
print(a)
