# Python program for implementation of Radix Sort 

# A function to do counting sort of arr[] according to 
# the digit represented by exp.  - exp 决定了当前比较的位数: 个位、十位还是?
def countingSort(arr, exp1): 

	n = len(arr) 

	# The output array elements that will have sorted arr  - 又学到一招初始化列表的方法
	output = [0] * (n) 

	# initialize count array as 0 - 对于个位数字的排序, 最多只有 0-9 十个数, 所以初始化 长度为10 的列表
	count = [0] * (10) 

	# Store count of occurrences in count[] 
	for i in range(0, n): 
		# index = (arr[i]/exp1) # Noticed in python3 that divide two integers will get a float
		# index = int(arr[i]/exp1) # change float to integer
		index = (arr[i]//exp1) # Or Use // (floor division) instead of / (true division)
		count[ (index)%10 ] += 1

	# Change count[i] so that count[i] now contains actual 
	# position of this digit in output array - 做顺序求和
	for i in range(1,10): 
		count[i] += count[i-1] 

	# Build the output array 
	i = n-1
	while i>=0: 
		# index = (arr[i]/exp1) # Noticed in python3 that divide two integers will get a float
		# index = int(arr[i]/exp1) # change float to integer
		index = (arr[i]//exp1) # Or Use // (floor division) instead of / (true division)
		output[ count[ (index)%10 ] - 1] = arr[i] 
		count[ (index)%10 ] -= 1
		i -= 1

	# Copying the output array to arr[], 
	# so that arr now contains sorted numbers 
	i = 0
	for i in range(0,len(arr)): 
		arr[i] = output[i] 

# Method to do Radix Sort 
def radixSort(arr): 

	# Find the maximum number to know number of digits - 找到最大数，才知道最多有多少位数
	max1 = max(arr) 

	# Do counting sort for every digit. Note that instead 
	# of passing digit number, exp is passed. exp is 10^i 
	# where i is current digit number 
	exp = 1
	while max1/exp > 0: # 如果还没超过最大位数, 继续循环
		countingSort(arr,exp) 
		exp *= 10

# Driver code to test above 
arr = [ 170, 45, 75, 90, 802, 24, 2, 66] 
radixSort(arr) 


print(arr) 

# This code is contributed by Mohit Kumra 
