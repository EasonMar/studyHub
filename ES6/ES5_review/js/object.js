/**************************************************
 * 1.Object.create() 方法会使用"指定的原型对象"及其属性去创建一个新的对象.
 *   Object.create(proto, [propertiesObject])
 *   
 * proto 一个对象,应该是新创建的对象的原型.
 * 
 * propertiesObject 可选.
 * 该参数对象是一组属性与值,该对象的属性名称将是新创建的对象的属性名称,值是属性描述符(这些属性描述符的结构与Object.defineProperties()的第二个参数一样).
 * 注意：该参数对象不能是 undefined,另外只有该对象中自身拥有的可枚举的属性才有效,也就是说该对象的原型链上属性是无效的.
 */
let obj = {
    x: 1,
    y: 2
}

let obj2 = Object.create(obj, {
    z: { value: 3 }
});
console.log(obj2);


// es6的写法.
let ob2 = {
    _proto_: obj,
    z: 3
}
console.log(ob2);


/**************************************************
 * 2.Object.defineProperty()方法会直接在一个对象上定义一个新属性,或者修改一个对象的现有属性, 并返回这个对象.
 * Object.defineProperty(obj, prop, descriptor)
 * 
 * obj 需要被操作的目标对象 
 * prop 目标对象需要定义或修改的属性的名称. 
 * descriptor 将被定义或修改的属性的描述符. 
 * 返回值：被传递给函数的对象.
 *
 * 该方法允许精确添加或修改对象的属性.
 * 一般情况下,我们为对象添加属性是通过赋值来创建并显示在属性枚举中(for...in 或 Object.keys 方法), 但这种方式添加的属性值可以被改变,也可以被删除.
 * 而使用 Object.defineProperty() 则允许改变这些额外细节的默认设置.例如,默认情况下,使用  Object.defineProperty() 增加的属性值是不可改变的.
 */

Object.defineProperty(obj2, "j", {
    value: 5,
    writable: true, //可以修改
    enumerable: true, //可遍历 可以遍历原型上的东西
    configurable: false //可配置
});
obj2.j = 30;
console.log(obj2) //Object {z: 3, j: 5}
for (var key in obj2) {
    console.log(key);
}

/**************************************************
 * Object.defineProperties() 定义多个属性
 */
Object.defineProperties(obj2, {
    "m": {
        value: "abc",
    },
    "n": {
        value: "cba"
    }
})
console.log(obj2) //Object {j: 30, z: 3, m: "abc", n: "cba"}


/**************************************************
 * getOwnPropertyDescriptor 获取属性描述
 * 
 * 该方法的引入目的,主要是为了解决Object.assign()无法正确拷贝get属性和set属性的问题.
 */
let desc = Object.getOwnPropertyDescriptor(obj, "x");
console.log(desc) //Object {value: 1, writable: true, enumerable: true, configurable: true}


/**************************************************
 * Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象.它将返回目标对象.
 * Object.assign(target, ...sources)
 * target 目标对象. 
 * sources (多个)源对象. 
 * 返回值 目标对象.
 */
// 复制一个obj
var objOri = { a: 1 };
var copy = Object.assign({}, objOri);
console.log(copy); // { a: 1 }

/**************************************************
 * 深度拷贝问题
 * 针对深度拷贝,需要使用其他方法,因为 Object.assign() 拷贝的是属性值.
 * 假如源对象的属性值是一个指向对象的引用,它也只拷贝那个引用值.
 */

/**************************************************
 * Object.keys 返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键名.
 *
 * ES6
 * Object.values方法返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的键值.
 * Object.entries方法返回一个数组,成员是参数对象自身的(不含继承的)所有可遍历(enumerable)属性的【键值对数组】.
 */
console.log(Object.keys(obj)); // ["x", "y"]
console.log(Object.values(obj)); // [1, 2]	
console.log(Object.entries(obj));


/**************************************************
 * Object.getOwnPropertyNames()获取它自己属性的【所有属性名】
 */
let obj3 = Object.getOwnPropertyNames(obj)
console.log(obj3) // ["x", "y"]


/**************************************************
 * Object.preventExtensions()阻止对象扩展,也就是永远不能再添加新的属性.
 *
 * Object.preventExtensions 只能阻止一个对象不能再添加新的自身属性,仍然可以为该对象的原型添加属性.
 * 然而Object.preventExtensions会阻止一个对象将__proto__属性重新指向另一个对象.
 */


/**************************************************
 * Object.seal() 方法可以让一个对象密封，并返回被密封后的对象。
 * 密封对象将会阻止向对象添加新的属性，并且会将所有已有属性的可配置性（configurable）置为不可配置（false），即不可修改属性的描述或删除属性。
 * 但是可写性描述（writable）为可写（true）的属性的值仍然被修改。
 *
 * Object.seal(obj)
 */

/**************************************************
 * Object.freeze() 冻结所有属性可读不可以配置
 */

Object.freeze(obj)
// Object.defineProperty(obj, "x", {
//     value: 5,
//     writable: false, //可以修改
//     enumerable: false, //可遍历 可以遍历原型上的东西
//     configurable: false //可配置吗
// })   // 会报错
obj.x=5
obj.z = 3;
console.log(obj);

/**************************************************
 * Object.isExtensible() 是否可扩展 true false
 * Object.isSealed() 是否密封
 * Object.isFrozen() 是否冻结
 */