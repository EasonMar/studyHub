// #### 类的创建 ####
class Person {
    name: string; // 这里必须声明name属性，才能在构造函数内部使用this.name --- 否则就要在属性名前加public
    age: number; // 这里必须声明age属性，才能在构造函数内部使用this.age --- 否则就要在属性名前加public  
    constructor(name: string, age: number, public sex: string) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `name=${this.name} & age=${this.age}`
    }
}

let person = new Person("Eason", 28, 'male');
console.log(person.print());

// #### 类的继承 ####
class Student extends Person {
    school: string;
    constructor(school: string) {
        super("Eason", 28, 'female') // 这里写死name age？可以不写死吗
        this.school = school;
        // super("Eason", 28) // 'super' must be called before accessing 'this' in the constructor of a derived class.
    }

    tell() {
        return `name=${this.name} & age=${this.age} & school=${this.school}`
    }
}

let s = new Student('QtingHua');
console.log(s.tell());

// #### 访问修饰符 ####
// 如果不写，默认为public。

// private：When a member is marked private, it cannot be accessed from outside of its containing class
class PersonPrivate {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    print() {
        return `name=${this.name} & age=${this.age}`
    }
}

class StudentPrivate extends PersonPrivate {
    school: string;
    constructor(school: string) {
        super("Eason", 28)
        this.school = school;
    }

    tell() {
        // return `name=${this.name} & age=${this.age} & school=${this.school}`
        // error TS2341:Property 'name' is private and only accessible within class 'PersonPrivate'.
        // error TS2341:Property 'age' is private and only accessible within class 'PersonPrivate'.
    }
}

// protect：The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes
class PersonProtect {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

// Notice that while we can’t use name from outside of Person, we can still use it from within an instance method of Employee because Employee derives from Person.
class Employee extends PersonProtect {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error


// #### 封装的实现 ####
// class Hello {
//     private _age: number; // error TS2564: Property '_age' has no initializer and is not definitely assigned in the constructor.
//     tell() {
//         return this._age;
//     }
//     get age(): number {
//         console.log('by getter');
//         return this._age;
//     }

//     set age(newAge: number) {
//         console.log('by setter');
//         if (newAge > 200 || newAge < 0) {
//             console.log("请正确填写年龄");
//         } else {
//             this._age = newAge;
//         }
//     }
// }

// let h = new Hello();
// h.age = 10;
// console.log(`h.age = ${h.age}`);
// console.log(h.tell());


// #### 类的使用技巧 ####
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`
    }
}

// 声明greet变量的类型为Greeter类的类型。JAVA里面很多这种写法！
// 可以称之为"应用数据类型"
// 但是有什么特殊效果呢？我不写这一句也可以啊？
let greet: Greeter;
greet = new Greeter('iwen');
console.log(`tech : ${greet.greet()}`)