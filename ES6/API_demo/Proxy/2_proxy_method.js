/**
 * Proxy 实例的方法
 */

/**
 * get()
 * 
 * get方法用于拦截某个属性的读取操作，可以接受三个参数，
 * 依次为'目标对象'、'属性名' 和 'proxy 实例本身'（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
 *
 * get方法的用法，上文已经有一个例子，下面是另一个拦截读取操作的例子。
 */
var person = {
    name: "张三"
};

var proxy = new Proxy(person, {
    get: function(target, property) {
        if (property in target) {
            return target[property];
        } else {
            throw new ReferenceError("Property \"" + property + "\" does not exist.");
        }
    }
});

proxy.name // "张三"
proxy.age // 抛出一个错误

/**
 * get方法可以继承
 *
 * 下面代码中，拦截操作定义在Prototype对象上面，所以如果读取obj对象继承的属性时，拦截会生效。
 */
let proto = new Proxy({}, {
    get(target, propertyKey, receiver) {
        console.log('GET ' + propertyKey);
        return target[propertyKey];
    }
});

let obj = Object.create(proto);
obj.foo // "GET foo"


/**
 * set()
 *
 * set方法用来拦截某个属性的赋值操作，可以接受四个参数，
 * 依次为目标对象、属性名、属性值和 Proxy 实例本身，其中最后一个参数可选。
 *
 * 假定Person对象有一个age属性，该属性应该是一个不大于 200 的整数，那么可以使用Proxy保证age的属性值符合要求。
 */
let validator = {
    set: function(obj, prop, value) {
        if (prop === 'age') {
            if (!Number.isInteger(value)) {
                throw new TypeError('The age is not an integer');
            }
            if (value > 200) {
                throw new RangeError('The age seems invalid');
            }
        }

        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj[prop] = value;
    }
};

let people = new Proxy({}, validator);

people.age = 100;

people.age // 100
people.age = 'young' // 报错
people.age = 300 // 报错