/**
 * basic usage
 */

// @decorator
// class A { }
// 等同于
// class A { }
// A = decorator(A) || A;

// demo
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

console.log(MyTestableClass.isTestable);