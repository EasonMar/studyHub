# Python program for counting sort 

# The main function that sort the given string arr[] in 
# alphabetical order 
def countSort(arr): 

	# The output character array that will have sorted arr 
	output = [0 for i in range(256)] # 为啥要整 256 跟 ord(字母)的返回有关吧

	# Create a count array to store count of inidividul 
	# characters and initialize count array as 0 
	count = [0 for i in range(256)] 

	# For storing the resulting answer since the 
	# string is immutable 
	ans = ["" for _ in arr] 

	# Store count of each character - 通过ord函数使得字母和某个数字一一对应
	for i in arr: 
		count[ord(i)] += 1 # ord(): Given a string of length one, return an integer representing the Unicode code point of the character when the argument is a unicode object, or the value of the byte when the argument is an 8-bit string
		# ord()函数是chr()或unichr()的配对函数，以字符作为参数，返回ASCII数值，或者Unicode数值。
		# chr()函数用一个范围在range(256)内的整数作参数，返回一个对应的字符 --- 所以上面初始化列表长度为256

	# Change count[i] so that count[i] now contains actual 
	# position of this character in output array 
	for i in range(256): 
		count[i] += count[i-1] 

	# Build the output character array 
	for i in range(len(arr)): 
		output[count[ord(arr[i])]-1] = arr[i] 
		count[ord(arr[i])] -= 1

	# Copy the output array to arr, so that arr now 
	# contains sorted characters 
	for i in range(len(arr)): 
		ans[i] = output[i] 
	return ans 

# Driver program to test above function 
arr = "geeksforgeeks"
ans = countSort(arr) 
print ("Sorted character array is %s" %("".join(ans))) 

# This code is contributed by Nikhil Kumar Singh 
