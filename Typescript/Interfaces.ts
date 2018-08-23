/**
 * Our First Interface --- 我们的第一个接口
 */
// The easiest way to see how interfaces work is to start with a simple example:
function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "lable value1" };
printLabel(myObj);

// The type-checker checks the call to printLabel. 
// The printLabel function has a single parameter that requires that the object passed in has a property called label of type string. 
// Notice that our object actually has more properties than this, 
// but the compiler only checks that at least the ones required are present and match the types required. 
// There are some cases where TypeScript isn’t as lenient, which we’ll cover in a bit.

// We can write the same example again, 
// this time using an interface to describe the requirement of having the label property that is a string:

interface LabelledValue {
    label: string;
}

function printLabelWithInterface(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObjWithInterface = { size: 10, label: "lable value2" };
printLabelWithInterface(myObjWithInterface);

/**
 * Optional Properties --- 可选属性
 * 
 * Interfaces with optional properties are written similar to other interfaces, 
 * with each optional property denoted by a ? at the end of the property name in the declaration.
 */

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/**
 * Readonly properties --- 只读属性
 * 
 * Some properties should only be modifiable when an object is first created. 
 * You can specify this by putting readonly before the name of the property:
 */
interface Point {
    readonly x: number;
    readonly y: number;
}
// You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.
let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!


/**
 * Function Types
 * 
 * To describe a function type with an interface, we give the interface a call signature. 
 * This is like a function declaration with only the parameter list and return type given. 
 * Each parameter in the parameter list requires both name and type.
 */
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
// For function types to correctly type-check, the names of the parameters do not need to match. 
// We could have, for example, written the above example like this:
// let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string): boolean {
//     let result = src.search(sub);
//     return result > -1;
// }