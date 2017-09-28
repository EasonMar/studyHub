document.getElementById('note').innerHTML = 'Array';

// 以前,为变量赋值,只能直接指定值;
// ES6 允许写成下面这样.

let [a, b, c] = [1, 2, 3]; 

// 本质上,这种写法属于 “模式匹配” ,只要等号两边的模式相同,左边的变量就会被赋予对应的值.

// 下面是一些使用嵌套数组进行解构的例子.
console.group('使用嵌套数组进行解构');
    let [foo, [[bar], baz ]] = [1, [[2], 3 ]];
    console.log(foo); // 1
    console.log(bar); // 2
    console.log(baz); // 3

    let [, , thir] = ["foo", "bar", "baz"];
    console.log(thir); // "baz"

    let [x1, , y1] = [1, 2, 3];
    console.log(x1); // 1
    console.log(y1); // 3

    let [head, ...tail] = [1, 2, 3, 4]; // ...tail
    console.log(head); // 1
    console.log(tail); // [2, 3, 4]   ！！！

    let [x2, y2, ...z] = ['a'];
    console.log(x2); // "a"
    console.log(y2); // undefined  
    console.log(z); // []
console.groupEnd();
console.log("");


// ======================================================================================================
// 如果解构不成功,变量的值就等于undefined
console.group('解构不成功');
    let [foo1] = [];
    let [bar1, foo2] = [1];
    console.log(foo1);
    console.log(foo2);
console.groupEnd();
console.log("");


// 另一种情况是不完全解构,即等号左边的模式,只匹配一部分的等号右边的数组.这种情况下,解构依然可以成功
console.group('不完全解构');

    let [x3, y3] = [1, 2, 3];
    console.log(x3); // 1
    console.log(y3); // 2

    let [a2, [b2], d2] = [1, [2, 3], 4];
    console.log(a2); // 1
    console.log(b2); // 2
    console.log(d2); // 4
console.groupEnd();
console.log("");
/*
    如果等号的右边不是数组(或者严格地说,不是可遍历的结构,参见《Iterator》一章),那么将会报错.

    // 报错
    let [foo] = 1;
    let [foo] = false;
    let [foo] = NaN;
    let [foo] = undefined;
    let [foo] = null;
    let [foo] = {};

    上面的语句都会报错,因为等号右边的值,要么转为对象以后不具备 Iterator 接口(前五个表达式),要么本身就不具备 Iterator 接口(最后一个表达式).
 */


// ======================================================================================================
console.group('数据结构具有 Iterator 接口,都可以采用数组形式的解构赋值');

    // 对于 Set 结构,也可以使用数组的解构赋值.
    // ES6 提供了新的数据结构 Set.它类似于数组,但是成员的值都是唯一的,没有重复的值.
    let [x4, y4, z4] = new Set(['a', 'b', 'c']);
    console.log(x4) // "a"

    // 事实上,只要某种数据结构具有 Iterator 接口,都可以采用数组形式的解构赋值.
    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibs();
    console.log(sixth) // 5
    // 上面代码中,fibs是一个 Generator 函数(参见《Generator 函数》一章),原生具有 Iterator 接口.
    // 解构赋值会依次从这个接口获取值.
console.groupEnd();
console.log("");


// ======================================================================================================
console.group('默认值');

    let [foo3 = true] = [];
    console.log(foo3); // true

    let [x5, y5 = 'b'] = ['a']; // x='a', y='b'
    let [x6, y6 = 'b'] = ['a', undefined]; // x='a', y='b'
    console.log("x5,y5 =" + x5 + ',' + y5)
    console.log("x6,y6 =" + x6 + ',' + y6)

    // 注意,ES6 内部使用严格相等运算符(===),判断一个位置是否有值.
    // 所以,如果一个数组成员不严格等于undefined,默认值是不会生效的.
    
    let [x7 = 1] = [undefined];
    console.log(x7) // 1
    let [x8 = 1] = [null];
    console.log(x8) // null
    // 上面代码中,如果一个数组成员是null,默认值就不会生效,因为null不严格等于undefined.

    // 如果默认值是一个表达式,那么这个表达式是惰性求值的,即【只有在用到的时候,才会求值】.
    function f() {console.log('aaa');}
    let [x9 = f()] = [1];
console.groupEnd();