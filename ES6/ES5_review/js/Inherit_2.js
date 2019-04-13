// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 2.经典继承（借用构造函数）
// --- 经典继承也叫借用构造函数或伪造对象
function SuperType(name){
    this.colors = ["red", "blue", "green"];
    this.name = name;
}

function SubType(){
    //借用父类型的构造函数
    //此时父类型的构造函数的this的指向与子类型的构造函数的this的指向相同
    SuperType.call(this, "Nicholas");  
}

var instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);//"red,blue,green,black"

var instance2 = new SubType();
console.log(instance2.colors);//"red,blue,green"

console.log(instance2.name);  //"Nicholas"

// 经典继承的缺点
// 父类方法都在构造函数中定义，因此子类型无法实现函数复用
// PS：父类方法挂在原型对象中才能实现 函数复用

// 总结 --- 子类没有自己的原型链