document.getElementById('note').innerHTML = 'str to function';

console.group('字符串的解构赋值');
    // 字符串也可以解构赋值.这是因为此时,字符串被转换成了一个类似数组的对象.
    const [a, b, c, d, e] = 'hello';
    console.log(a); // "h"
    console.log(b); // "e"
    console.log(c); // "l"
    console.log(d); // "l"
    console.log(e); // "o"

    // 类似数组的对象都有一个length属性,因此还可以【对这个属性解构赋值】
    let { length: len } = 'hello';
    console.log(len); // 5
console.groupEnd();
console.log("");

console.group('数值和布尔值的解构赋值');
    // 解构赋值时,如果等号右边是数值和布尔值,则会【先转为对象】
    let { toString: s1 } = 123;
    s1 === Number.prototype.toString // true
    let { toString: s2 } = true;
    s2 === Boolean.prototype.toString // true
    // 上面代码中,数值和布尔值的包装对象都有toString属性,因此变量s都能取到值.

    // 解构赋值的规则是,【只要等号右边的值不是对象或数组,就先将其转为对象】
    // 由于undefined和null无法转为对象,所以对它们进行解构赋值,都会报错.

    // let { prop: x } = undefined; // TypeError
    // let { prop: y } = null; // TypeError
console.groupEnd();
console.log("");

console.group('函数参数的解构赋值');
    // 函数的参数也可以使用解构赋值.
    function add([x, y]) {
        return x + y;
    }
    var a1 = add([1, 2]);
    console.log(a1); // 3
    // 上面代码中,函数add的参数表面上是一个数组,但在传入参数的那一刻,数组参数就被解构成变量x和y.
    // 对于函数内部的代码来说,它们能感受到的参数就是x和y.

    // 下面是另一个例子.
    var a2 = [[1, 2], [3, 4]].map(([a, b]) => a + b);
    console.log(a2); // [ 3, 7 ]


    /////////////////////////////////////////
    //  函数参数的【解构也可以使用默认值】 //
    /////////////////////////////////////////

    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, 0]
    move({}); // [0, 0]
    move(); // [0, 0]
    // 上面代码中,函数move的参数是一个对象,通过对这个对象进行解构,得到变量x和y的值.
    // 如果【解构失败,x和y等于默认值】

    // 注意,下面的写法会得到不一样的结果.
    function move({x, y} = { x: 0, y: 0 }) {
        return [x, y];
    }
    move({x: 3, y: 8}); // [3, 8]
    move({x: 3}); // [3, undefined]
    move({}); // [undefined, undefined]
    move(); // [0, 0]
    // 上面代码是为【函数的参数指定默认值】,而不是为【变量x和y指定默认值】,所以会得到与前一种写法不同的结果.
    // --- 所以只有函数参数为undfined时,才能启用函数参数的默认值.

    // undefined就会触发【函数参数的默认值】.
    var a3 = [1, undefined, 3].map((x = 'yes') => x);
    console.log(a3); // [ 1, 'yes', 3 ]
console.groupEnd();