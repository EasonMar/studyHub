// #### 函数类型 ####

// 函数本身(其实是指定返回值的类型)及其参数都可以指定类型
function add(x: number, y: number): string {
    return "Hello TypeScript"
}

// 有了类型指定，语言会更严谨！
let myadd = function (x: number, y: string): string {
    return "Hello ts"
}

// 前面指定了参数的具体意义
let myAddts: (name: string, age: number) => number =
    function (n: string, a: number): number {
        return a;
    }


// #### 可选和默认参数 ####

function buildName(firstName: string, lastName: string) {
    return `buildName: ${firstName} ${lastName}`;
}

console.log(buildName('eason', 'iwen'));
// buildName('eason'); // error TS2554: Expected 2 arguments, but got 1.


// 可选参数：参数后加?，表示此参数为可选参数，可不传
function buildName2(firstName: string, lastName?: string) {
    if (lastName) {
        return `buildName2: ${firstName} ${lastName}`;
    } else {
        return `buildName2: ${firstName}`;
    }
}
console.log(buildName2('eason'));
// buildName2('eason','iwen','jay'); // error TS2554: Expected 1-2 arguments, but got 3.


// 默认参数
function buildName3(firstName: string, lastName = 'eason') {
    return `buildName3: ${firstName} ${lastName}`;
}
console.log(buildName3('iwen'));
console.log(buildName3('iwen', 'alice'));


// #### 可变参数 ####
// 类似ES6的rest参数
function peopleName(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(' ')}`;
}

console.log(peopleName('aaa', 'bbb', 'ccc', 'ddd'));

// #### lambda和this关键字 ####
// 就是ES6的箭头函数
let people = {
    name: ["iwen", "ime", "ivy", "bean"],
    getName: function () {
        return () => {
            let i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
let myName = people.getName();
console.log(`My Name is ${myName().n}`);


// #### 重载 ####
function attr(name: string): string;
function attr(arg: number): number;

function attr(nameORage: any): any {
    if (nameORage && typeof nameORage === 'string') {
        console.log("姓名")
    } else {
        console.log("年龄")
    }
}

attr("Hello");
attr(10);


// 函数相关知识点总结
namespace funcitonSumary {
    // ==================================
    // ======= 函数的定义 - 四种方式 =======
    // ==================================

    // 1. 通过function
    function add1(x: number, y: number) {
        // 函数返回值类型可以通过类型推断得出
        return x + y
    }

    // 下面三种都是函数类型声明 但是没有具体的实现函数, 所以需要指出函数返回值的类型
    // 2. 通过变量
    let add2: (x: number, y: number) => number

    // 3. 通过类型别名
    type add3 = (x: number, y: number) => number

    // 4. 通过接口
    interface add4 {
        (x: number, y: number): number
    }

    // ==================================
    // ============ 函数的参数 ============
    // 1. 形参和实参的数量必须一致
    // 2. 可选参数（必须位于必须参数之后）
    // 3. 参数默认值（必选参数前面的默认参数，不可以省略不传）
    // 4. 剩余参数，其类型是以数组形式存在的
    // ==================================


    // ==================================
    // ============ 函数重载 =============
    // 1. 要求先定义一系列名称相同的函数声明（重载列表）
    function add8(...rest: number[]): number
    function add8(...rest: string[]): string
    // 2. 然后TS要求在一个类型最宽泛的版本中实现这个重载
    function add8(...rest: any[]): any {
        let first = rest[0]
        if (typeof first == 'string') {
            return rest.join('')
        } else if (typeof first == 'number') {
            rest.reduce((pre, cur) => pre + cur)
        }
    }
    // 3. TS在处理重载时，回去查询声明列表，并且尝试使用第一个声明的类型定义，如果匹配就使用，如果不匹配就继续向后查询。所以要把最容易匹配的函数定义, 写在最前面
    // ==================================

}