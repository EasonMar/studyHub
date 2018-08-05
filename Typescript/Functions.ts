// #### 函数类型 ####

// 函数本身及其参数都可以指定类型
function add(x: number, y: number): string {
    return "Hello TypeScript"
}

// 有了类型指定，语言会更严谨！
let myadd = function(x: number, y: string): string {
    return "Hello ts"
}

// 前面指定了参数的具体意义
let myAddts: (name: string, age: number) => number =
    function(n: string, a: number): number {
        return a;
    }


// #### 可选和默认参数 ####

function buildName(firstName: string, lastName: string) {
    return `buildName: ${firstName} ${lastName}`;
}

console.log(buildName('eason', 'iwen'));
// buildName('eason'); // error TS2554: Expected 2 arguments, but got 1.


// 可选参数：参数后加?，表示此参数为可选参数，可不传
function buildName2(firstName: string, lastName ? : string) {
    if (lastName) {
        return `buildName2: ${firstName} ${lastName}`;
    } else {
        return `buildName2: ${firstName}`;
    }
}
console.log(buildName2('eason'));
// buildName2('eason','iwen','jay'); // error TS2554: Expected 1-2 arguments, but got 3.


// 默认参数
function buildName3(firstName: string, lastName = 'eason') {
    return `buildName3: ${firstName} ${lastName}`;
}
console.log(buildName3('iwen'));
console.log(buildName3('iwen', 'alice'));


// #### 可变参数 ####
// 类似ES6的rest参数
function peopleName(firstName: string, ...restOfName: string[]) {
    return `${firstName} ${restOfName.join(' ')}`;
}

console.log(peopleName('aaa', 'bbb', 'ccc', 'ddd'));

// #### lambda和this关键字 ####
// 就是ES6的箭头函数
let people = {
    name: ["iwen", "ime", "ivy", "bean"],
    getName: function() {
        return () => {
            let i = Math.floor(Math.random() * 4);
            return {
                n: this.name[i]
            }
        }
    }
}
let myName = people.getName();
console.log(`My Name is ${myName().n}`);


// #### 重载 ####
function attr(name:string):string;
function attr(arg:number):number;

function attr(nameORage:any):any{
	if(nameORage && typeof nameORage === 'string'){
		console.log("姓名")
	}else{
		console.log("年龄")
	}
}

attr("Hello");
attr(10);