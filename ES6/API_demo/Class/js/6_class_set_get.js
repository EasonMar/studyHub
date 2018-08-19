/**
 * ES6
 * Class 的取值函数(getter)和存值函数(setter)
 * 与 ES5 一样,在“类”的内部可以使用get和set关键字,对【某个属性】设置存值函数和取值函数,拦截该属性的存取行为. 
 * 下面代码中,prop属性有对应的存值函数和取值函数,因此赋值和读取行为都被自定义了. 
 */
class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}


let inst = new MyClass();
inst.prop = 123; // setter: 123

inst.prop; // 'getter'


/**
 * 对应的ES5
 */
function Number(num) {
    this._num = num; // 这里_num和get/set方法num()不能重名
}

//get/set方法使用同一个命名, 增加可读性
Number.prototype = {
    get num() {
        // console.log('get number '+this.num); // 千万别再getter里面又去读取属性值！！会爆炸的！
        console.log('get number');
        return this._num;
    },

    set num(num) {
        console.log('set number to ' + num);
        this._num = num;
    }
}

var test = new Number(8);
console.log(test.num);
test.num = 88;
console.log(test.num);


/**
 * ES6
 * 存值函数和取值函数是设置在属性的 Descriptor 对象上的. 
 */
class CustomHTMLElement {
    constructor(element) {
        this.element = element;
    }

    get html() {
        return this.element.innerHTML;
    }

    set html(value) {
        this.element.innerHTML = value;
    }
}

var descriptor = Object.getOwnPropertyDescriptor(
    CustomHTMLElement.prototype, "html"
);

"get" in descriptor; // true
"set" in descriptor; // true
/**
 * 上面代码中, 存值函数和取值函数是定义在html属性的描述对象上面, 这与 ES5 完全一致. 
 */