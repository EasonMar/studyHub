// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 6. 寄生组合式继承
// 组合继承最大的问题就是无论什么情况下，都会调用两次超类型构造函数：
//     一次是在创建子类型原型的时候，另一次是在子类型构造函数内部。
// 因此，子类型的原型对象会包含父类型对象的全部实例属性，但第二次调用子类型构造函数时重写了这些属性。
// 重写属性降低了效率。

+function(){
	function SuperType(name){
	    this.name = name;
	    this.colors = ["red", "blue", "green"]
	}

	SuperType.prototype.sayName = function(){
	    console.log(this.name);
	};

	function SubType(name, age){
	    SuperType.call(this, name);         //第二次调用SuperType()，将会重写"name"和"colors"属性
	    
	    this.age = age;
	}

	SubType.prototype = new SuperType();    //第一次调用SuperType()
	SubType.prototype.constructor = SubType;
	SubType.prototype.sayAge = function(){
	    console.log(this.age);
	}
}();


// 寄生组合式继承的基本思路是：不必为了指定子类型的原型而调用父类型的构造函数，
// 我们所需要的无非就是超类型原型的一个副本而已。

// 这里就是封装了JCYD课程中拼接原型链的部分而已
function inheritPrototype(subType, superType){
    var prototype = Object.create(superType.prototype); //创建对象
    prototype.constructor = subType;                    //增强对象
    subType.prototype = prototype;                      //指定对象
}

function SuperType(name){
    this.name = name;
    this.colors = ["red", "blue", "green"]
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
};

function SubType(name, age){
    SuperType.call(this, name);

    this.age = age;
}

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function(){
    console.log(this.age);
}

var instance = new SubType("Nicholas", 29);
console.log(instance.name);                 //"Nicholas"
instance.sayName();                         //"Nicholas"