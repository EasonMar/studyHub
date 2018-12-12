/** 
 * 快排的思想是这样的：
 * 
 * 如果要排序数组中下标从 p 到 r 之间的一组数据, 
 * 我们选择 p 到 r 之间的任意一个数据作为pivot(分区点)
 * 
 * 我们遍历 p 到 r 之间的数据, 将小于 pivot 的放到左边, 将大于 pivot 的放到右边, 将 pivot 放到中间。
 * 经过这一步骤之后, 数组 p 到 r 之间的数据就被分成了三个部分, 
 * 前面 p 到 q-1 之间都是小于 pivot 的, 中间是 pivot, 后面的 q+1 到 r 之间是大于 pivot 的
 * 
 * 根据分治、递归的处理思想, 我们可以用递归排序下标从 p 到 q-1 之间的数据和下标从 q+1 到 r 之间的数据, 
 * 直到区间缩小为 1, 就说明所有的数据都有序了
 */


/**
 * 递推公式：quick_sort(p…r) = quick_sort(p…q-1) + quick_sort(q+1, r)
 * 终止条件：p >= r
 */

// 快速排序, A 是数组, n 表示数组的大小
function quick_sort(A, n) {
    quick_sort_c(A, 0, n - 1);
}
// 快速排序递归函数, p,r 为下标(排序区间的左右边界下标) --- 不是尾递归, 可能会存在很深的调用栈...
function quick_sort_c(A, p, r) {
    // console.log('quick_sort_c');
    // console.log([p, r]);
    if (p >= r) return;

    let q = partition(A, p, r) // 获取分区点, 以区分点作为分界, 分成2部分继续分区...
    // console.log('partition point = ' + q);
    quick_sort_c(A, p, q - 1);
    quick_sort_c(A, q + 1, r);
}

/**
 * 归并排序中有一个 merge() 合并函数, 我们这里有一个 partition() 分区函数
 * partition() 分区函数实际上我们前面已经讲过了, 
 * 就是随机选择一个元素作为 pivot(一般情况下, 可以选择 p 到 r 区间的最后一个元素), 
 * 然后对 A[p…r] 分区, 函数返回 pivot 的下标
 * 
 * 
 * 如果我们不考虑空间消耗的话, partition() 分区函数可以写得非常简单
 * 我们申请两个临时数组 X 和 Y, 遍历 A[p…r], 将小于 pivot 的元素都拷贝到临时数组 X, 
 * 将大于 pivot 的元素都拷贝到临时数组 Y, 最后再将数组 X 和数组 Y 中数据顺序拷贝到 A[p…r]
 * 
 * 但是, 如果按照这种思路实现的话, partition() 函数就需要很多额外的内存空间, 所以快排就不是原地排序算法了
 * 如果我们希望快排是原地排序算法, 那它的空间复杂度得是 O(1), 
 * 那 partition() 分区函数就不能占用太多额外的内存空间, 我们就需要在 A[p…r] 的原地完成分区操作
 * 
 * 原地分区函数的实现思路非常巧妙
 */

/**
 * 分区函数
 * @param {Array} A 原数组
 * @param {Number} p 排序区间 左边界
 * @param {Number} r 排序区间 右边界
 */
function partition(A, p, r) {
    let pivot = A[r], i = p;
    // console.log('partition');
    // console.log([p, r]);
    for (let j = p; j <= r - 1; j++) {
        if (A[j] < pivot) {
            // swap A[i] with A[j] // 交换,js如何方便的实现数组交换？splice、解构赋值(无需第三个变量的情况下实现2个变量数值交换)？
            [A[i], A[j]] = [A[j], A[i]]; // 使用解构赋值进行数值交换
            i++; // 需要理解好i指针的意义：指向比pivot大的数,并等待跟后面的比pivot小的数交换位置
        }
        // console.log('partition i j');
        // console.log([i, j])
    }
    // swap A[i] with A[r]
    // 遍历完后, i指向的是比pivot大的最左边的数, 且i左边的数都比pivto小
    // A[i]跟pivot对调, 就完成了pivot左边的数比pivot小, 右边的数比pivot大的分区
    [A[i], A[r]] = [A[r], A[i]];
    return i;
}

// var a = [8,7,6,9,5,10,1,3]; // 8个元素,可以一直两两平分
// quick_sort(a, 8);
// var a = [8,7,6,9,5,10]; // 6个元素,拆分一次就变成单数个
// quick_sort(a, 6);
// var a = [8, 7, 6, 9, 5]; // 5个元素,从一开始就是但数个
// quick_sort(a, 5);
var a = [6, 11, 13, 3, 1, 9, 8];
quick_sort(a, 7)