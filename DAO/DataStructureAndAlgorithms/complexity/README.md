## 复杂度分析
> 数据结构和算法解决的是如何更省、更快地存储和处理数据的问题，因此，我们就需要一个考量效率和资源消耗的方法，这就是复杂度分析方法。
> 所以，如果你只掌握了数据结构和算法的特点、用法，但是没有学会复杂度分析，那就相当于只知道操作口诀，而没掌握心法。
> 只有把心法了然于胸，才能做到无招胜有招！

### 大 O 复杂度表示法:
- 大 O 时间复杂度: 所有代码的执行时间 T(n) 与每行代码的执行次数 n 成正比：`T(n)=O(f(n))`
	- 具体解释一下这个公式。其中，T(n) 我们已经讲过了，它表示代码执行的时间；n 表示数据规模的大小；f(n) 表示每行代码执行的次数总和。因为这是一个公式，所以用 f(n) 来表示。公式中的 O，表示代码的执行时间 T(n) 与 f(n) 表达式成正比。
	- 大 O 时间复杂度实际上并不具体表示代码真正的执行时间，而是表示 代码执行时间随数据规模增长的变化趋势，所以，也叫作 渐进时间复杂度（asymptotic time complexity），简称 时间复杂度
- 分析方法
	1. 只关注循环执行次数最多的一段代码
	2. 加法法则：总复杂度等于量级最大的那段代码的复杂度
		- 特殊情况：无法事先评估 m 和 n 谁的量级大，所以我们在表示复杂度的时候，就不能简单地利用加法法则，省略掉其中一个。而是用O(m+n)表示时间复杂度
	3. 乘法法则：嵌套代码的复杂度等于嵌套内外代码复杂度的乘积
- 复杂度量级(按数量级递增)
	1. 常量阶: O(1), O(1) 只是常量级时间复杂度的一种表示方法，并不是指只执行了一行代码
	2. 对数阶: O(logn), 对数阶时间复杂度非常常见，同时也是最难分析的一种时间复杂度
		```js
		i=1;
		// 关键在于计算出i什么时候等于n, 就知道while语句执行了几次
		// i 的成长情况是这样的: 2^0, 2^1, 2^2...2^k...2^x
		// 2^x=n时, x = log<sub>2</sub>n
		while (i <= n)  {
			i = i * 2;
		}
		// 不管是以 2 为底、以 3 为底，还是以 10 为底，我们可以把所有对数阶的时间复杂度都记为 O(logn)
		// 对数之间是可以互相转换的，log<sub>3</sub>n 就等于 log<sub>3</sub>2 * log<sub>2</sub>n，
		// 所以 O(log<sub>3</sub>n) = O(C *  log<sub>2</sub>n)，其中 C=log<sub>3</sub>2 是一个常量
		```
	3. 线性阶: O(n)
	4. 线性对数阶: O(nlogn), 如果一段代码的时间复杂度是 O(logn)，我们循环执行 n 遍，时间复杂度就是 O(nlogn) 了。而且，O(nlogn) 也是一种非常常见的算法时间复杂度。比如，归并排序、快速排序的时间复杂度都是 O(nlogn)
	5. 幂阶: O(n^2)、O(n^3)...O(n^k)
	6. 指数阶: O(2^n) [非多项式量级, 非常低效, 不讲]
	7. 阶乘阶: O(n!) 	 [非多项式量级, 非常低效, 不讲]
- 空间复杂度分析: 
	- 时间复杂度的全称是 渐进时间复杂度， 表示算法的执行时间与数据规模之间的增长关系。类比一下，空间复杂度全称就是 渐进空间复杂度（asymptotic space complexity）， 表示算法的存储空间与数据规模之间的增长关系
	- 我们常见的空间复杂度就是 O(1)、O(n)、O(n<sup>2</sup> )，像 O(logn)、O(nlogn) 这样的对数阶复杂度平时都用不到。而且，空间复杂度分析比时间复杂度分析要简单很多。所以，对于空间复杂度，掌握刚我说的这些内容已经足够了

### 浅析最好、最坏、平均、均摊时间复杂度
> 在大多数情况下，我们并不需要区分最好、最坏、平均情况时间复杂度三种情况。像我们上一节课举的那些例子那样，很多时候，我们使用一个复杂度就可以满足需求了。只有同一块代码在不同的情况下，时间复杂度有量级的差距，我们才会使用这三种复杂度表示法来区分。

#### 最好、最坏时间复杂度
#### 平均时间复杂度(全称应该叫 加权平均时间复杂度 或者 期望时间复杂度)
- 数列求和公式: 等差数列 Sn = n(a1 + an)/2、等比数列 Sn = n*a1(公比为q=1) | Sn = (a1-an*q)/(1-q)
- 简单的概率论: 

#### 均摊时间复杂度
- 摊还分析法
- 每一次 O(n) 的插入操作，都会跟着 n-1 次 O(1) 的插入操作，所以把耗时多的那次操作均摊到接下来的 n-1 次耗时少的操作上，均摊下来，这一组连续的操作的均摊时间复杂度就是 O(1)
- 简单总结一下它们的应用场景:
	- 对一个数据结构进行一组连续操作中，大部分情况下时间复杂度都很低，只有个别情况下时间复杂度比较高，而且这些操作之间存在前后连贯的时序关系
	- 这个时候，我们就可以将这一组操作放在一块儿分析，看是否能将较高时间复杂度那次操作的耗时，平摊到其他那些时间复杂度比较低的操作上
	- 而且，在能够应用均摊时间复杂度分析的场合，一般均摊时间复杂度就等于最好情况时间复杂度

### 总结

#### 一、什么是复杂度分析？
1. 数据结构和算法解决是“如何让计算机更快时间、更省空间的解决问题”。
2. 因此需从执行时间和占用空间两个维度来评估数据结构和算法的性能。
3. 分别用时间复杂度和空间复杂度两个概念来描述性能问题，二者统称为复杂度。
4. 复杂度描述的是算法执行时间（或占用空间）与数据规模的增长关系。

#### 二、为什么要进行复杂度分析？
1. 和性能测试相比，复杂度分析有不依赖执行环境、成本低、效率高、易操作、指导性强的特点。
2. 掌握复杂度分析，将能编写出性能更优的代码，有利于降低系统开发和维护成本。

#### 三、如何进行复杂度分析？
1. 大O表示法
	1. 来源:	算法的执行时间与每行代码的执行次数成正比，用T(n) = O(f(n))表示，其中T(n)表示算法执行总时间，f(n)表示每行代码执行总次数，而n往往表示数据的规模。
	2. 特点:	以时间复杂度为例，由于时间复杂度描述的是算法执行时间与数据规模的增长变化趋势，所以常量阶、低阶以及系数实际上对这种增长趋势不产决定性影响，所以在做时间复杂度分析时忽略这些项。
2. 复杂度分析法则
	1. 单段代码看高频：比如循环。
	2. 多段代码取最大：比如一段代码中有单循环和多重循环，那么取多重循环的复杂度。
	3. 嵌套代码求乘积：比如递归、多重循环等
	4. 多个规模求加法：比如方法有两个参数控制两个循环的次数，那么这时就取二者复杂度相加。

#### 四、常用的复杂度级别？
- 多项式阶：随着数据规模的增长，算法的执行时间和空间占用，按照多项式的比例增长。包括，O(1)（常数阶）、O(logn)（对数阶）、O(n)（线性阶）、O(nlogn)（线性对数阶）、O(n^2)（平方阶）、O(n^3)（立方阶）
- 非多项式阶：随着数据规模的增长，算法的执行时间和空间占用暴增，这类算法性能极差。包括，O(2^n)（指数阶）、O(n!)（阶乘阶）

#### 五、如何掌握好复杂度分析方法？
复杂度分析关键在于多练，所谓孰能生巧

#### 六、最好、最坏、平均、均摊时间复杂度分析
##### 一、复杂度分析的4个概念
1. 最坏情况时间复杂度：代码在最理想情况下执行的时间复杂度。
2. 最好情况时间复杂度：代码在最坏情况下执行的时间复杂度。
3. 平均时间复杂度：用代码在所有情况下执行的次数的加权平均值表示。
4. 均摊时间复杂度：在代码执行的所有复杂度情况中绝大部分是低级别的复杂度，个别情况是高级别复杂度且发生具有时序关系时，可以将个别高级别复杂度均摊到低级别复杂度上。基本上均摊结果就等于低级别复杂度。

##### 二、为什么要引入这4个概念？
1. 同一段代码在不同情况下时间复杂度会出现量级差异，为了更全面，更准确的描述代码的时间复杂度，所以引入这4个概念。
2. 代码复杂度在不同情况下出现量级差别时才需要区别这四种复杂度。大多数情况下，是不需要区别分析它们的。

##### 三、如何分析平均、均摊时间复杂度？
1. 平均时间复杂度：代码在不同情况下复杂度出现量级差别，则用代码所有可能情况下执行次数的加权平均值表示。
2. 均摊时间复杂度
	- 代码在绝大多数情况下是低级别复杂度，只有极少数情况是高级别复杂度；
	- 低级别和高级别复杂度出现具有时序规律。均摊结果一般都等于低级别复杂度。
3. 一般情况下平均、均摊说一个就好了


### 评论区
刚学完python，可能代码还没写熟练，所以我建议把python书上的所有实例代码都自己敲一遍，默写一遍。
学编程，光看不写肯定是不行的。

等你python代码写熟练了，你可以再开始学我这个专栏。 
因为你没有数据结构和算法的基础，所以我建议，配合着《大话数据结构》《算法图解》两本书一块来学习。

学习这个专栏的过程中，你可以把我讲到的数据结构和算法都用python代码实现一遍，如果实现不了，可以参照我放在Github上的代码，自己看懂之后，默写一遍。
这个步骤非常锻炼你的编程能力，不要忽视！

在学习专栏的过程中，不要一觉得看不懂就放弃，师傅领进门，修行靠个人。这里没有葵花宝典一样的捷径。学习还要靠自己。
看不懂？那就自己多百度一下，看不懂也可以问问你同学、同事、学长，用一个星期来看一篇文章，狠下心来，别怕麻烦，不会学不会的。

还有很多时候看不懂，你就硬着头皮看，都看完一遍，就会有感觉。之后再等有空了，再来看一遍，慢慢的都懂了。
这门课很难，对于初学者来说，应该是计算机里最难的之一了，所以不要期望轻松就学会，这是不现实的。
