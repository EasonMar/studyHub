// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 3. 组合继承
// 组合继承指的是将原型链和经典继承的技术组合到一起，从而发挥二者之长的一种继承模式
// 即使用原型链实现对原型属性和方法的继承，而通过经典继承来实现对实例属性的继承

function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function(){       //原型方法
    console.log(this.name);
};

function SubType(name, age){
    //继承实例属性
    SuperType.call(this, name);
    this.age = age;
}

//继承原型方法 --- 原型链拼接
SubType.prototype = new SuperType();  // 但是一般这里是用 Object.create(SuperType.prototype) 有什么不同呢 ： 
// 使用new SuperType() 需要调用一次父类 SuperType 的构造函数，重写属性降低了效率

SubType.prototype.constructor = SubType;  //令constructor指向子类型
SubType.prototype.sayAge = function(){
    console.log(this.age);
};



var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);      //"red,blue,green,black"
instance1.sayName();                //"Nicholas"
instance1.sayAge();                 //29

var instance2 = new SubType("Greg", 27);
console.log(instance2.colors);      //"red,blue,green"
instance2.sayName();                //"Greg"
instance2.sayAge();                 //27

// 组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为JavaScript中最常用的继承模式。