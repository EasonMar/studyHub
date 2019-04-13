// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 4. 原型式继承 --  注意观察跟 使用原型链继承 有什么区别
// 原型式继承的核心思想是：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
// 为了达到上面的目的，需要先声明如下函数：
function object(o){
    function F(){}
    F.prototype = o; // 让中间类F的原型对象指向父类
    return new F(); // 返回中间类F的实例, 是为了让它能沿着原型链 __proto__ 找到 F.prototype 上的方法和属性
}

// 父类
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

// 子类1
var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

// 子类2
var yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");

console.log(person.friends);        //"Shelby,Court,Van,Rob,Barbie"


// ECMAScript5通过新增Object.create()方法规范化了原型式继承。
// 这个方法接受两个参数：
// 用作新对象原型的对象
// 为新对象定义额外属性的对象，这个参数与Object.defineProperties()方法的第二个参数格式相同

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person, {
    name: {
        value: "Greg"
    }
});

console.log(anotherPerson.name);    //"Greg"




// js继承实现之Object.create
// https://segmentfault.com/a/1190000014592412?utm_source=channel-hottest
