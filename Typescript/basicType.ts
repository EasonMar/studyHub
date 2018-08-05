// Array
let list1: number[] = [1, 3, 5];
let list2: Array < string > = ["Iwen", "Eason", "Alice"];
console.log(`list1' = ${list1}`);
console.log(list1);
console.log(`list2' = ${list2}`);
console.log(list2);

// enum
enum Color { red = 1, green, blue = 2 };
let colorName: string = Color[2];

// 声明g、c为Color类型
let g: Color = Color.green;
let b: Color = Color.green;

console.log(`Color[2] = ${colorName}`);
console.log(`green's index = ${g}`);
console.log(`blue's index = ${b}`);


// any
let notSure: any = 10;
notSure = "Hello";
notSure = false;

let List: any[] = [1, "Hello", false]

console.log(`notSure = ${notSure}`);
console.log(`notSure List = ${List}`);
console.log(List);

// void
function fn1():string{
	// return 10; //  error TS2322: Type '10' is not assignable to type 'string'.
	return 'hello'
}

function fn2():number{
	// return 'hello';  // error TS2322: Type '"hello"' is not assignable to type 'number'.
	return 10
}

function fn3():void{
	console.log('我不需要返回值')
}