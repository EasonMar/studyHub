# Counting Sort
# Counting sort is a sorting technique based on keys between a specific range. 
# It works by counting the number of objects having distinct key values (kind of hashing). 
# Then doing some arithmetic to calculate the position of each object in the output sequence.

'''
Let us understand it with the help of an example.

For simplicity, consider the data in the range 0 to 9. 
Input data: 1, 4, 1, 2, 7, 5, 2
  1) Take a count array to store the count of each unique object.
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  2  0  1  1  0  1  0  0

  2) Modify the count array such that each element at each index 
  stores the sum of previous counts. 
  Index:     0  1  2  3  4  5  6  7  8  9
  Count:     0  2  4  4  5  6  6  7  7  7

The modified count array indicates the position of each object in the output sequence.
 
  3) Output each object from the input sequence followed by decreasing its count by 1. --- 正向遍历不是稳定的排序, 因为数据是从后往前填充的
  Process the input data: 1, 4, 1, 2, 7, 5, 2. 
  Position of 1 is 2.
  Put data 1 at index 2 in output. 
  Decrease count by 1 to place next data 1 at an index 1 smaller than this index.
'''


# 假设有 8 个考生，分数在 0 到 5 分之间。
# 这 8 个考生的成绩我们放在一个数组 A[8] 中，它们分别是：2，5，3，0，2，3，0，3。
A = [2, 5, 3, 0, 2, 3, 0, 3]

# 使用大小为 6 的数组 C[6] 表示桶，其中下标对应分数。C[6] 内存储对应分数的考生个数
C = [0 for _ in range(max(A)+1)]
for i in A:
  C[i] += 1
print(C)

# Modify the count array such that each element at each index stores the sum of previous counts
# 对 C[6] 数组的元素进行顺序求和
for i in range(len(C)-1):
  C[i+1] += C[i]
print(C)

# 核心思路 - 从后到前依次扫描数组 A  --- 从后往前遍历能保证是稳定的排序, 因为数据是从后往前填充的
'''
比如，当扫描到 3 时，我们可以从数组 C 中取出下标为 3 的值 7，
也就是说，到目前为止，包括自己在内，分数小于等于 3 的考生有 7 个，
也就是说 3 是数组 R 中的第 7 个元素（也就是数组 R 中下标为 6 的位置）。
当 3 放入到数组 R 中后，小于等于 3 的元素就只剩下了 6 个了，所以相应的 C[3] 要减 1，变成 6。
'''

# reversed函数会生成一份倒序列表的拷贝，不会改变原列表
r = [0 for _ in range(len(A))]

for i in reversed(A): 
    index = C[i] - 1
    r[index] = i
    C[i] -= 1
    
A = r[:]

print(A)