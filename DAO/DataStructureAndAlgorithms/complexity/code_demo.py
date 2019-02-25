# # 大O复杂度表示法引入 1
# # C语言实现
# int cal(int n) {
#    int sum = 0;
#    int i = 1;
#    for (; i <= n; ++i) {
#      sum = sum + i;
#    }
#    return sum;
# }
# # Python实现
# def cal(n):
# 	sum = 0
# 	for i in range(1, n):
# 		sum = sum + i
# 	return sum


# ------------------------------------------------------
# # 大O复杂度表示法引入 2
# # C语言实现
# int cal(int n) {
# 	int sum = 0;
# 	int i = 1;
# 	int j = 1;
# 	for (; i <= n; ++i) {
# 		j = 1;
# 		for (; j <= n; ++j) {
# 			sum = sum +  i * j;
# 		}
# 	}
# }
# # Python实现
# def cal(n):
# 	sum = 0
# 	for i in range(1, n):
# 		for j in range(1, n):
# 			# print('i is %d, j is %d, i*j=%d'%(i,j,i*j))
# 			sum = sum + i * j
# 			# print('now sum is %d'%sum)
# 	return sum


# ------------------------------------------------------
# # 加法法则
# # C语言实现
# int cal(int n) {
# 	int sum_1 = 0;
# 	int p = 1;
# 	for (; p < 100; ++p) {
# 		sum_1 = sum_1 + p;
# 	}
#
# 	int sum_2 = 0;
# 	int q = 1;
# 	for (; q < n; ++q) {
# 		sum_2 = sum_2 + q;
# 	}
#
# 	int sum_3 = 0;
# 	int i = 1;
# 	int j = 1;
# 	for (; i <= n; ++i) {
# 		j = 1; 
# 		for (; j <= n; ++j) {
# 		sum_3 = sum_3 +  i * j;
# 		}
# 	}
#
# 	return sum_1 + sum_2 + sum_3;
# }
# # Python实现
# def cal(n):
# 	sum_1 = 0
# 	for p in range(1, 100):
# 		sum_1 = sum_1 + p
#
# 	sum_2 = 0
# 	for q in range(1, n):
# 		sum_2 = sum_2 + q
#	
# 	sum_3 = 0
# 	for i in range(1, n):
# 		for j in range(1, n):
# 			# print('i * j =', i * j)
# 			sum_3 = sum_3 + i * j
# 	# print('sum_1 = %d, sum_2 = %d, sum_3 = %d'%(sum_1,sum_2,sum_3))
# 	return sum_1 + sum_2 + sum_3

# ------------------------------------------------------
# # C语言实现
# # 乘法法则
# int cal(int n) {
# 	int ret = 0; 
# 	int i = 1;
# 	for (; i < n; ++i) {
# 		ret = ret + f(i);
# 	} 
# } 
#
# int f(int n) {
# 	int sum = 0;
# 	int i = 1;
# 	for (; i < n; ++i) {
# 		sum = sum + i;
# 	} 
# 	return sum;
# }
# # Python实现
# def cal(n):
# 	ret = 0
# 	for i in range(1, n):
# 		print('i = %d, f(i) = %d'%(i,f(i)))
# 		ret = ret + f(i)
# 	return ret
#
# def f(n):
# 	sum = 0
# 	for i in range(1, n):
# 		sum = sum + i
# 	return sum

# ------------------------------------------------------
# # C语言实现
# # logn复杂度
# i=1;
# while (i <= n)  {
# 	i = i * 2;
# }
# # Python实现
# def cal(n):
# 	i = 1
# 	while (i <= n ):
# 		i = i * 2
# 	return i

# ------------------------------------------------------
# # C语言实现
# # 最好、最坏、平均、均摊时间复杂度
# n 表示数组 array 的长度
# int find(int[] array, int n, int x) {
# 	int i = 0;
# 	int pos = -1;
# 	for (; i < n; ++i) {
# 		if (array[i] == x) {
# 			pos = i;
# 			break;
# 		}
# 	}
# 	return pos;
# }
# # Python实现
# def find(array, n, x):
# 	pos = -1
# 	for i in range(0, n):
# 		print('n 的范围', i)
# 		if array[i] == x:
# 			pos = i
# 			break
# 	return pos

# out = find([1,2,3,4], 4, 5)
# print('结果是', out)

# ------------------------------------------------------
# # C语言实现
# # 课后习题
# // 全局变量，大小为 10 的数组 array，长度 len，下标 i。
# int array[] = new int[10]; 
# int len = 10;
# int i = 0;
#
# // 往数组中添加一个元素
# void add(int element) {
# if (i >= len) { // 数组空间不够了
# 	// 重新申请一个 2 倍大小的数组空间
# 	int new_array[] = new int[len*2];
# 	// 把原来 array 数组中的数据依次 copy 到 new_array
# 	for (int j = 0; j < len; ++j) {
# 		new_array[j] = array[j];
# 	}
# 	// new_array 复制给 array，array 现在大小就是 2 倍 len 了
# 	array = new_array;
# 	len = 2 * len;
# }
# // 将 element 放到下标为 i 的位置，下标 i 加一
# array[i] = element;
# 	++i;
# }
# # Python实现: python貌似没有数组大小的限制