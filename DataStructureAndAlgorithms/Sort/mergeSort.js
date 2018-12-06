/**
 * 归并排序的核心思想还是蛮简单的。如果要排序一个数组, 我们先把数组从中间分成前后两部分, 
 * 然后对前后两部分分别排序, 再将排好序的两部分合并在一起, 这样整个数组就都有序了
 * 注意：这个"合并"本身也具有排序的功能在内,才能保证合并之后整个数组是有序的
 */

/** 
 * 递推公式：merge_sort(p…r) = merge(merge_sort(p…q), merge_sort(q+1…r))
 * 终止条件：p >= r 不用再继续分解
 */

/**
 * 归并排序算法
 * @param  {Array}  A  待排序的数组
 * @param  {number} n  数组大小
 */
function merge_sort(A, n) {
    merge_sort_c(A, 0, n - 1)
}

/**
 * 递归调用函数
 * @param  {Array}  A  待排序的数组
 * @param  {number} p  起始位置
 * @param  {[type]} r  结束位置
 */
function merge_sort_c(A, p, r) {
    // 递归终止条件
    if (p >= r) return;
    // console.log('merge_sort_c');
    // console.log([p,r]);

    // 取 p 到 r 之间的中间位置 q
    // q = Math.floor((p + r) / 2); q成全局变量了, 影响了数组的拆分！！
    let q = Math.floor((p + r) / 2);

    // 分治递归
    merge_sort_c(A, p, q)
    merge_sort_c(A, q + 1, r)
    // 将 A[p...q] 和 A[q+1...r] 合并为 A[p...r]
    // JS如何实现数组分片？
    // 因为实际上并未使用传入的分片, 所以只需要传入原数组A和分片区域即可
    merge(A, [p, q], [q + 1, r])
}

/**
 * 你可能已经发现了, merge(A[p…r], A[p…q], A[q+1…r]) 这个函数的作用就是, 
 * 将已经有序的 A[p…q] 和 A[q+1…r] 合并成一个有序的数组, 并且放入 A[p…r]
 * 
 * merge函数是关键
 * 将已经有序的 left_Array 和 right_Array 合并成一个整体有序的数组
 * @param  {Array} A   原数组
 * @param  {Array} L   左半数组区间:[start,end]
 * @param  {Array} R   右半数组区间:[start,end]
 */
function merge(A, L, R) {
	console.log('merge info：');
    console.log([L.toString(),R.toString()]);

	// 初始化局部变量
    var i = p = L[0], // i = 排序初始位置 = 左半数组 初始位置
        j = R[0],	  // j = 右半数组 初始位置
        q = L[1], 	  // q = 左半数组 结束位置	
        r = R[1],     // r = 右半数组 结束位置
        k = 0,        // 临时数组指针
        tmp = new Array(A.length); // 申请一个大小跟 A 一样的临时数组

    /**
     * 用两个游标 i 和 j, 分别指向 A[p…q] 和 A[q+1…r] 的第一个元素
     * 比较这两个元素 A[i] 和 A[j]
     * 如果 A[i]<=A[j], 我们就把 A[i] 放入到临时数tmp, 并且 i 后移一位
     * 否则将 A[j] 放入到数组 tmp, j 后移一位
     */
    while (i <= q && j <= r) {
        if (A[i] <= A[j]) {
            tmp[k++] = A[i++]; // i++ 等于 i=i+1。 注意：这里先取i值,然后再计算i+1
        } else {
            tmp[k++] = A[j++];
        }
    }

    // 判断哪个子数组中有剩余的数据
    var start = i, end = q;
    if (j <= r) {
        start = j;
        end = r;
    }

    // 将剩余的数据拷贝到临时数组 tmp
    while (start <= end) {
        tmp[k++] = A[start++]
    }

    // 将 tmp 中的数组拷贝回 oldArray
    for (i = 0; i <= r - p; i++) {
        A[p + i] = tmp[i]
    }
}

// 出现过的问题：只能实现最大数的冒泡...
// 拆分有问题：因为变量q不是局部的,导致拆分出问题！

// var a = [8,7,6,9,5,10,1,3]; // 8个元素,可以一直两两平分
// merge_sort(a, 8);
// var a = [8,7,6,9,5,10]; // 6个元素,拆分一次就变成单数个
// merge_sort(a, 6);
var a = [8,7,6,9,5]; // 5个元素,从一开始就是但数个
merge_sort(a, 5);