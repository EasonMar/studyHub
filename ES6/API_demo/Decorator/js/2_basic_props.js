/**
 * 前面的例子是为类添加一个静态属性,如果想添加实例属性,可以通过目标类的prototype对象操作. 
 */
function testableWithProps(target) {
    target.prototype.isTestable = true;
}

@testableWithProps
class MyPropsClass {}

let obj = new MyPropsClass();
console.log(obj.isTestable); // true


// 上面代码中,修饰器函数testable是在目标类的prototype对象上添加属性,因此就可以在实例上调用. 



// 另外一个例子
function mixins(...list) { // 这里...list是rest参数,list是数组
    return function(target) {
        // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象. 它将返回目标对象. 
        Object.assign(target.prototype, ...list) // 这里...list是扩展运算符作用到数组上
    }
}

const Foo = {
    foo() { console.log('foo') }
}
@mixins(Foo)
class MyFooClass {}
let objFoo = new MyFooClass();
objFoo.foo() // 'foo'