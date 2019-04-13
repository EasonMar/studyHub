// javascript的继承 ： https://blog.csdn.net/qq_35732147/article/details/82801533

// 1.使用原型链继承
// 原型链式继承的本质是重写子类型的原型对象，代之以一个父类型的实例
function SuperType(){
	this.property = true;
}
SuperType.prototype.getSuperValue = function(){
	return this.property;
}


function SubType(){
	this.subproperty = false;
}
// 关键点：使子类型的原型对象等于父类型的实例 --- 原型链拼接
// 弄明白 new SuperType() 跟 Object.create(SuperType.prototype) 的区别！！
// new SuperType() 需要调用一次父类 SuperType 的构造函数
SubType.prototype = new SuperType(); // 子类的原型对象 指向 父类实例

SubType.prototype.getSubValue = function(){
	return this.subproperty;
}

var instance = new SubType();


// ========================================
console.log(instance.getSuperValue()); 	// true
console.log(instance.property);			// 

// 注意：此时的instance.constructor指向的是SuperType
console.log(instance.constructor); 		// ƒ SuperType(){this.property = true;}

// 这样改写一下就完美了
SubType.prototype.constructor = SubType;
console.log(instance.constructor)		// ƒ SubType(){this.subproperty = false;}

// 只要是原型链中出现过的原型，都可以说是该原型链派生的实例的原型。
// 因此，可以通过两种方法来确定原型和实例之间的关系
instance instanceof SubType; // instanceof操作符
SubType.prototype.isPrototypeOf(instance); // isPrototypeOf()方法
// =======================================



// 原型链继承的缺点
// - 所有子类型实例共享父类型的引用类型的属性
// - 创建子类型的实例时，不能向父类型的构造函数中传递参数
// 例子如下： 
+function(){
	function SuperType(){
        this.colors = ["red", "blue", "green"];
    }
    function SubType(){}

    //继承了SuperType
    SubType.prototype = new SuperType();

    var instance1 = new SubType();
    instance1.colors.push("black");
    console.log(instance1.colors);      //"red,blue,green,black"

    var instance2 = new SubType();
    console.log(instance2.colors);      //"red,blue,green,black"
}();


// 总结 --- 子类没有自己的构造函数
