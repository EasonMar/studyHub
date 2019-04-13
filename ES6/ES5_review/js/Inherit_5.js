// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 5. 寄生式继承
// 寄生式继承的思路与寄生构造函数和工厂模式类似，
// 即创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象。
function createAnother(original){
    var clone = Object.create(original);  //通过调用Object.create()创建一个新对象
    clone.sayHi = function(){             //以某种方式来增强这个对象
        console.log("hi");
    };
    return clone;                         //返回这个对象
}
