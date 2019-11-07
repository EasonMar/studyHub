# 基数排序（Radix sort）

'''
假设要比较两个手机号码 a，b 的大小，如果在前面几位中，a 手机号码已经比 b 手机号码大了，那后面的几位就不用看了
借助稳定排序算法，这里有一个巧妙的实现思路:
- 先按照最后一位来排序手机号码，然后，再按照倒数第二位重新排序，以此类推，最后按照第一位重新排序。
- 经过 11 次排序之后，手机号码就都有序了

基数排序对要排序的数据是有要求的，需要可以分割出独立的“位”来比较，而且位之间有递进的关系，如果 a 数据的高位比 b 数据大，那剩下的低位就不用比较了。
除此之外，每一位的数据范围不能太大，要可以用线性排序算法来排序，否则，基数排序的时间复杂度就无法做到 O(n) 了
'''

telNo = [15989288415, 19802021385, 13927861366, 13602916135, 15920549917, 13719745898]

def radix_sort(arr):

    # 从后往前对 n - 1 位进行稳定排序
    for i in range(10, 0, -1):
        
        # 使用稳定化后的选择排序
        sortedCount = 0
        while sortedCount < len(arr) - 1:
            j = sortedCount # 已排序区间尾部指针
            # 遍历未排序元素, 找到最小元素的位置
            for k in range(sortedCount, len(arr)):
                if str(arr[k])[i] < str(arr[j])[i]: # 数值不能位访问, 要转换为字符串
                    j = k
            
            # 如果未排序区域内最小元素不在最左边, 则可以平移并且把最小元素插入已排序区间的末尾
            if j > sortedCount:
                tmp = arr[j]
                while j > sortedCount:
                    arr[j] = arr[j-1] # 一定注意要从右边开始平移
                    j -= 1 # 指针左移
                telNo[sortedCount] = tmp
            sortedCount += 1
    print(arr)

radix_sort(telNo)

# 稳定的, 非原地
# Time Complexity: O(dn), d是维度