let arr = [1, 2, 3, 4, 5];

/**************************************************
 * Array 迭代方法
 */
//forEach : 数组遍历,可传值
arr.forEach(function(value, index) {
    console.log(`index = ${index}, value = ${value}`);
});

// map返回数组，数组遍历
let arr1 = arr.map(function(value) {
    return value * 2 + 1
});
console.log(arr1);

// filter对数组的值进行选择性的返回
let arr2 = arr.filter(function(value) {
    return value > 2
})
console.log(arr2)


// some 只要有一个条件满足就返回true (或逻辑)
let arr3 = arr.some(function(value) {
    return value > 4
})
console.log(arr3)


// every 所有都满足,才返回ture (与逻辑)
let arr4 = arr.every(function(value) {
    return value > 0
})
console.log(arr4) //true


/**************************************************
 * 索引
 */
// indexOf()返回数组下标
console.log(arr.indexOf(5));
if (arr.indexOf(5) > 1) {
    console.log("正确")
}

// lastIndexOf(): lastIndexOf() 方法返回指定值在调用该方法的字符串中最后出现的位置,如果没找到则返回 -1.
let arrR = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(`arrR里面最后一个出现2的位置是：${arrR.lastIndexOf(2)}`);

/**************************************************
 * 累加方法 迭代
 */
// reduce() 计算数组和   
// array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
let result = arr.reduce(function(last, now, _index, _arr) {
    console.log(`The index this time is ${_index} and the array is still ${_arr}`);
    return last + now;
}, 0)
console.log(result) // 15

// reduceRight()同上从右边计算
let result2 = arr.reduceRight(function(last, now, _index, _arr) {
    console.log(`The right index this time is ${_index} and the array is still ${_arr}`);
    return last + now;
}, 0)

// tips:模板字符串里的变量可以放很多东西-变量-表达式-甚至函数！

/**************************************************
 * 数组的静态方法
 */
// isArray() 判断数组是否是数组 ps:是数组返回true,不是返回false
let z = 2;
console.log(Array.isArray(z)); //false