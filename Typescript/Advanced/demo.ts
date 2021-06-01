// 学习 Record 引发的一系列思考...
// - keyof any
// - [P in number]: string
// - - in 关键字
// - - - 勿与 keyof 混淆
// - - 索引类型
// - extends
// - - 类型兼容

interface EmployeeType {
    id: number,
    fullname: string,
    role: string
}

type keyOfEmployeeType = keyof EmployeeType
// type fullname = Pick<EmployeeType, 'a'> // Type '"a"' does not satisfy the constraint '"id" | "fullname" | "role"'

let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: 'John', role: 'Designer' }
}


// 如何理解 [P in number]: string
// type t = Record<number, string> // { [name: number]: string } --- ? 不理解为什么是这样...
// 解析: in 关键字是 对「枚举类型」进行遍历, 这里 P in number, 相当于 只有一个元素的素组的遍历... 自然就得到 [name: number]
// type t = Record<1, string> // { 1: string }
// type t = Record<"prop", string> // { prop: string }
// type t = Record<string, string> // { [name: string]: string }
// type t = Record<number, string> // { [name: number]: string }
// 了解一下「索引类型」:


type AnimalType = 'cat' | 'dog' | 'frog';
interface AnimalDescription { name: string, icon: string }
// const AnimalMap: Record<AnimalType, AnimalDescription> = {
//   cat: { name: '猫', icon: ' '},
//   dog: { name: '狗', icon: ' ' },
//   forg: { name: '蛙', icon: ' ' }, // Hey!
// };


type keyofAny = keyof any // string | number | symbol
type result = AnimalType extends keyofAny ? true : false // 为啥result为true... 真TM不好理解啊... 
// 可不可以这样理解: 字符串字面量联合类型与string是兼容的
// 了解一下「类型兼容」:
let myString = 'a'
type myStringType = typeof myString


// ==========================================================================================
// 学习 Omit 引发的思考
// - Omit 可认为是「适用于键值对对象」的 Exclude --- Exclude 适用于什么对象
// - Exclude_Tools<T, K> 返回的是啥...
// - [P in Exclude_Tools<T, K>] 为啥报错
type UserO = {
    id: number;
    name: string;
    location: string;
    registeredAt: Date;
};

type userExcludeObject = Exclude<UserO, "id" | "registeredAt"> // 没有用... Exclude 适用于联合类型对象
type userExcludeUnion = Exclude<keyof UserO, "id" | "registeredAt"> // 有用

