# 和数组相比，链表更适合插入、删除操作频繁的场景，查询的时间复杂度较高。
# 不过，在具体软件开发中，要对数组和链表的各种性能进行对比，综合来选择使用两者中的哪一个。

# 结点类
class node:
	def __init__(self, data=None):
		self.data = data
		self.next = None

# 链表类
class linked_list:
	def __init__(self):

		# The head of the linked_list
		# 头结点
		self.head = node()

	# Adds new node containing 'data' to the end of the linked list.
	# 在链表尾部追加含有data的新结点
	def append(self, data):
		new_node = node(data)
		cur = self.head

		# Find the last node exist
		while cur.next != None:
			cur = cur.next

		# Add new node
		cur.next = new_node

	# Returns the length (integer) of the linked list.
	# 返回长度
	def length(self):
		cur = self.head
		total = 0

		# Traversal the linked_list and count the nodes
		while cur.next != None:
			total += 1
			cur = cur.next
		return total

	# Prints out the linked list in traditional Python list format.
	# 以python经典list的格式打印链表
	def display(self):
		elems = []
		cur = self.head

		# Traversal the linked_list and put node's data into a list
		while cur.next != None:
			cur = cur.next
			elems.append(cur.data)
		print(elems)

	# Returns the value of the node at 'index'.
	# 返回 index 结点的value
	def get(self, index):
		if index >= self.length() or index < 0:  # added 'index<0' post-video
			print("ERROR: 'Get' Index out of range!")
			return None
		cur_idx = 0
		cur_node = self.head
		while True:
			cur_node = cur_node.next
			if cur_idx == index:
				return cur_node.data
			cur_idx += 1

	# Deletes the node at index 'index'.
	# 删除 index 位置的结点
	def erase(self, index):
		if index >= self.length() or index < 0:  # added 'index<0' post-video
			print("ERROR: 'Erase' Index out of range!")
			return
		cur_idx = 0
		cur_node = self.head
		while True:
			last_node = cur_node
			cur_node = cur_node.next
			if cur_idx == index:
				last_node.next = cur_node.next
				return
			cur_idx += 1

	# 允许方括号访问
	# Allows for bracket operator syntax (i.e. a[0] to return first item).
	def __getitem__(self, index):
		return self.get(index)
	'''
		凡是在类中定义了这个__getitem__ 方法，那么它的实例对象（假定为p），可以像这样
		p[key] 取值，当实例对象做p[key] 运算时，会调用类中的方法__getitem__
	'''
	#######################################################
	# Functions added after video tutorial

	# Inserts a new node at index 'index' containing data 'data'.
	# Indices begin at 0. If the provided index is greater than or
	# equal to the length of the linked list the 'data' will be appended.
	# 在指定位置插入数据
	def insert(self, index, data):
		if index >= self.length() or index < 0:
			return self.append(data)
		cur_node = self.head
		prior_node = self.head
		cur_idx = 0
		while True:
			cur_node = cur_node.next
			if cur_idx == index:
				new_node = node(data)
				prior_node.next = new_node
				new_node.next = cur_node
				return
			prior_node = cur_node
			cur_idx += 1

	# Inserts the node 'node' at index 'index'. Indices begin at 0.
	# If the 'index' is greater than or equal to the length of the linked
	# list the 'node' will be appended.
	# 在指定位置插入节点 -- 为什么node不用指向后续的结点？
	def insert_node(self, index, node):
		if index < 0:
			print("ERROR: 'Erase' Index cannot be negative!")
			return
		if index >= self.length():  # append the node
			cur_node = self.head
			while cur_node.next != None:
				cur_node = cur_node.next
			cur_node.next = node
			return
		cur_node = self.head
		prior_node = self.head
		cur_idx = 0
		while True:
			cur_node = cur_node.next
			if cur_idx == index:
				prior_node.next = node
				return
			prior_node = cur_node
			cur_idx += 1

	# Sets the data at index 'index' equal to 'data'.
	# Indices begin at 0. If the 'index' is greater than or equal
	# to the length of the linked list a warning will be printed
	# to the user.
	# 设置指定节点的数据
	def set(self, index, data):
		if index >= self.length() or index < 0:
			print("ERROR: 'Set' Index out of range!")
			return
		cur_node = self.head
		cur_idx = 0
		while True:
			cur_node = cur_node.next
			if cur_idx == index:
				cur_node.data = data
				return
			cur_idx += 1
