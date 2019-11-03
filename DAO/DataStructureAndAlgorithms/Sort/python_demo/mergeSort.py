# 归并排序的核心思想还是蛮简单的。如果要排序一个列表, 我们先把列表从中间分成前后两部分,
# 然后对前后两部分分别排序, 再将排好序的两部分归纳合并在一起, 这样整个列表就都有序了
# 注意：这个"合并"本身也具有排序的功能在内,才能保证合并之后整个列表是有序的
#      merge函数的算法和实现很经典！

# 递归函数
def merge_sort(arr, start, end):
    # 递归终止条件
    if start >= end:
        return

    # 取 start 到 end 之间的中间位置 mid
    mid = int(start + (end - start) / 2)

    # 分治递归 --- 不是尾递归, 可能会存在很深的调用栈...
    merge_sort(arr, start, mid)
    merge_sort(arr, mid + 1, end)

    # 将 arr[start...mid] 和 arr[mid+1...end] 合并为 arr[start...end]
    merge(arr, start, mid, end)

# merge函数 --- 关键吃透
# 将有序的 left_Array 和 right_Array 合并成一个整体有序的列表
def merge(arr, start, mid, end):
    temp = [] # 临时列表
    i = start # 前半列表指针
    j = mid + 1 # 后半列表指针

    while i <= mid and j <= end:
        if arr[i] < arr[j]:
            temp.append(arr[i])
            i+=1
        else:
            temp.append(arr[j])
            j+=1
    
    # 判断余下的数在哪里
    leftStart = i
    leftEnd = mid
    if j <= end:
        leftStart = j
        leftEnd = end

    # 将余下的数追加到temp中
    # while leftStart <= leftEnd:
    #     temp.append(arr[leftStart])
    #     leftStart += 1
        
    # 利用切片 + 列表合并 优化此步
    temp += arr[leftStart : leftEnd + 1]

    # 将temp中已排序的值更新到arr中
    arr[start : end+1] = temp[:]

a = [8,7,6,9,5]
merge_sort(a, 0, 4)
print(a)
