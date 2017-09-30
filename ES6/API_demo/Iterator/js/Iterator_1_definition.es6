document.getElementsByTagName('body')[0].innerHTML = `<p style="font-size: 90px;margin:50% 0 0;font-weight: bold;text-align: center;" id="note">1_definition</p>`

/**
 * Iterator(遍历器)的概念
 * JavaScript 原有的表示“集合”的数据结构,主要是数组(Array)和对象(Object),ES6又添加了Map和Set.
 * 这样就有了四种数据集合,用户还可以组合使用它们,定义自己的数据结构,比如数组的成员是Map,Map的成员是对象.
 * 这样就需要一种统一的接口机制,来处理所有不同的数据结构.
 * 
 * 遍历器(Iterator)就是这样一种机制.它是一种接口,为各种不同的数据结构提供统一的访问机制.
 * 任何数据结构只要部署Iterator接口,就可以完成遍历操作(即依次处理该数据结构的所有成员).
 * 
 * Iterator 的作用有三个：
 * 一是为各种数据结构,提供一个统一的、简便的访问接口;
 * 二是使得数据结构的成员能够按某种次序排列;
 * 三是ES6创造了一种新的遍历命令for...of循环,Iterator接口主要供for...of消费.
 * 
 * Iterator 的遍历过程是这样的.
 * 
 * (1)创建一个指针对象,指向当前数据结构的起始位置.也就是说,【遍历器对象】本质上,就是一个【指针对象】.
 * (2)第一次调用指针对象的next方法,可以将指针指向数据结构的第一个成员.
 * (3)第二次调用指针对象的next方法,指针就指向数据结构的第二个成员.
 * (4)不断调用指针对象的next方法,直到它指向数据结构的结束位置.
 * 
 * 每一次调用next方法,都会返回数据结构的当前成员的信息.具体来说,就是返回一个包含value和done两个属性的对象.
 * 其中,value属性是当前成员的值,done属性是一个布尔值,表示遍历是否结束.
 */

// 模拟next方法返回值的例子
function makeIterator(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { value: undefined, done: true };
        }
    };
}
var it = makeIterator(['a', 'b']);
console.log(  it.next()  ); // { value: "a", done: false }
console.log(  it.next()  ); // { value: "b", done: false }
console.log(  it.next()  ); // { value: undefined, done: true }


// 对于遍历器对象来说,done: false和value: undefined属性都是可以省略的,因此上面的makeIterator函数可以简写成下面的形式.
function makeIterator_v1(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length ? { value: array[nextIndex++] } : { done: true };
        }
    };
}

// 由于Iterator只是把接口规格加到数据结构之上,所以,遍历器与它所遍历的那个数据结构,实际上是分开的,
// 完全可以写出没有对应数据结构的遍历器对象,或者说用遍历器对象模拟出数据结构.
// 下面是一个无限运行的遍历器对象的例子.
function idMaker() {
    var index = 0;
    return {
        next: function() {
            return { value: index++, done: false };
        }
    };
}
var its = idMaker();
console.log(  its.next().value  ); // '0'
console.log(  its.next().value  ); // '1'
console.log(  its.next().value  ); // '2'