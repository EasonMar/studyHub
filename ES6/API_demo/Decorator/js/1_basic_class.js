/**
 * 1. 类的修饰
 * 
 * @decorator
 * class A { }
 * 
 * 等同于
 * 
 * class A { }
 * A = decorator(A) || A; // 怎么理解
 *
 * 修饰器是一个对类进行处理的函数. '修饰器函数'的第一个参数,就是所要修饰的目标类
 */

// demo
@testable
class MyTestableClass {}

function testable(target) {
    target.isTestable = true;
}

console.log(MyTestableClass.isTestable);

/**
 * 上面代码中,testable函数的参数target,就是会被修饰的类. 
 * 
 * 如果觉得一个参数不够用,可以在修饰器外面再封装一层函数. 
 */
function testableWithParam(isTestable) {
    return function(target) {
        target.isTestable = isTestable;
    }
}

@testableWithParam(true)
class TestableClass {}
console.log(TestableClass.isTestable); // true

@testableWithParam(false)
class MyClass {}
console.log(MyClass.isTestable); // false
// 上面代码中,修饰器testable可以接受参数,这就等于可以修改修饰器的行为. 


// // 实际开发中,React 与 Redux 库结合使用时,常常需要写成下面这样. 
// class MyReactComponent extends React.Component {}
// export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

// // 有了装饰器,就可以改写上面的代码.  --- 认真思考
// @connect(mapStateToProps, mapDispatchToProps)
// export default class MyReactComponent extends React.Component {}


/**
 * 注意,修饰器对类的行为的改变,是代码编译时发生的,而不是在运行时. 
 * 这意味着,修饰器能在编译阶段运行代码. 也就是说,修饰器本质就是编译时执行的函数. 
 */