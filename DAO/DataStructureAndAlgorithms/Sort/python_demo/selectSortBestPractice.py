# Python program for implementation of Selection Sort 
A = [64, 25, 12, 22, 11] 

# Traverse through(遍历) all array elements 
for i in range(len(A)): 
	
	# Find the minimum element in remaining(剩下的) unsorted array 
	min_idx = i 
	for j in range(i+1, len(A)): 
		if A[min_idx] > A[j]: 
			min_idx = j 
			
	# Swap the found minimum element with the first element --- key point
	# 交换的话, 就有机会不是稳定的排序了, 例如 A = [1,6,2,6,0] --> [0,6,2,6,1] --> [0,1,2,6,6], 最后两个6就交换位置了	 
	A[i], A[min_idx] = A[min_idx], A[i] 

# Driver code to test above 
print ("Sorted array: ", A)  
