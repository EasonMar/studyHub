/**
 * 深入 TypeScript 高级类型和类型体操 --- https://zhuanlan.zhihu.com/p/443463536
 * 
 * TypeScript 高级类型会根据类型参数求出新的类型，这个过程会涉及一系列的类型计算逻辑，这些类型计算逻辑就叫做类型体操。
 * 当然，这并不是一个正式的概念，只是社区的戏称，因为有的类型计算逻辑是比较复杂的。 
 * 
 * TypeScript 的类型系统是图灵完备的，也就是说它能描述任何可计算逻辑，简单点来说就是循环、条件判断等该有的语法都有。
 * 
 * 
 * TypeScript 类型语法基础
 * 
 * 1. ts 类型的条件判断: 
 *    T extends Number ? true : false;
 * 
 * 2. ts 类型的循环: 
 *    ts 类型没有循环，但可以用递归来实现循环: 
 *      例如要构造一个长度为 n 的数组，那么就要传入长度的类型参数 Len、元素的类型参数 Ele、以及构造出的数组的类型参数 Arr（用于递归）。
 *      然后类型计算逻辑就是判断 Arr 的 length 是否是 Len，如果是的话，就返回构造出的 Arr，不是的话就往其中添加一个元素继续构造。
 * 
 * 3. ts 类型的字符串操作: 
 *    ts 支持构造新的字符串: type left = 'aaa'; type right = 'bbb'; type str = `${left},${right}`; // type str = "aaa,bbb"
 *    也支持根据模式匹配来取字符串中的某一部分:  type res = str extends `aaa,${infer rest}` ? rest : never; // type res = "bbb"
 *    因为 str 符合 aaa, 的模式，所以能够匹配上，把右边的部分放入通过 infer 声明的局部类型变量里，之后取该局部变量的值返回
 * 
 * 4. ts 类型的对象操作: 
 *    ts 支持对对象取属性、取值: 
 *      type obj = {a:1, b:'2'}; type keys = keyof obj; // type keys = "a" | "b"
 *      type propB = obj[keys] // typs propB = 1 | "2"
 *    也可以创建新的对象类型: 通过 keyof 取出 obj 的所有属性名，通过 in 遍历属性名并取对应的属性值，通过这些来生成新的对象类型 newObj
 *      type newObj = {[key in keyof obj]: obj[key]}
 */

// ==== 体操 1 ==== 实现高级类型 Add，能够做数字加法。
// 数组类型可以取 length 属性，那不就是个数字么。可以通过构造一定长度的数组来实现加法。

// 1-1. 通过递归的方式实现了构造一定长度的新数组的高级类型：
type createArray<Len, Ele, Arr extends Ele[] = []> = Arr['length'] extends Len ? Arr : createArray<Len, Ele, [Ele, ...Arr]>

// 1-2. 分别构造两个不同长度的数组，然后合并到一起，再取 length 就行了。
type AddXY<A extends number, B extends number> = [...createArray<A, 1>, ...createArray<B, 1>]['length']

// 小结: ts 的高级类型想做数字的运算只能用构造不同长度的数组再取 length 的方式，因为没有类型的加减乘除运算符。 



// ==== 体操 2 ==== 把字符串重复 n 次; 计数涉及到了数字运算，要通过构造数组再取 length 的方式。
// Str（待重复的字符串）、Count（重复次数）、Arr（用于计数的数组）、ResStr（构造出的字符串）
type RepeactStr<
  Str extends string,
  Count,
  Arr extends Str[] = [],
  ResStr extends string = ''
  >
  = Arr['length'] extends Count
  ? ResStr
  : RepeactStr<Str, Count, [Str, ...Arr], `${Str}${ResStr}`>;



// ==== 体操 3 ==== 实现简易的 JS Parser，能解析字符串 add(11,22) 的函数名和参数

// 先定义字母的类型：
type alphaChars = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm'
  | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z'
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M'
  | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';


// 保存阶段性结果的类型
type TempParseResult<Token extends string, Rest extends string> = {
  token: Token,
  rest: Rest
}

// 然后就一个个取字符来判断，把取到的字符构造成字符串存入中间结果：
type parseFunctionName<SourceStr extends string, Res extends string = ''>
  = SourceStr extends `${infer PrefixChar}${infer RestStr}` // prefixChar 和 RestStr 都是声明的变量... SourceStr 如何 extends 它们 ? --- 见infer.ts测试结论
  ? PrefixChar extends alphaChars // 如果PrefixChar是字母... 则递归parseFunctionName<剩余的源字符串, 结果字符串>
  ? parseFunctionName<RestStr, `${Res}${PrefixChar}`>
  : TempParseResult<Res, SourceStr> // 如果PrefixChar不是字母... 说明方法名已经获取完毕...然后把方法名、参数列表保存一下
  : never;



// 解析括号 --- 括号不会连续出现，不需要递归的取，取一次就行
type brackets = '(' | ')';
type parseBrackets<SourceStr>
  = SourceStr extends `${infer PrefixChar}${infer RestStr}`
  ? PrefixChar extends brackets
  ? TempParseResult<PrefixChar, RestStr> // 匹配到就保存
  : never
  : never;


// 解析数字
type numChars = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

type parseNum<SourceStr extends string, Res extends string = ''>
  = SourceStr extends `${infer PrefixChar}${infer RestStr}`
  ? PrefixChar extends numChars
  ? parseNum<RestStr, `${Res}${PrefixChar}`>
  : TempParseResult<Res, SourceStr>
  : never;


// 解析逗号 ---- 逗号不会连续出现，不需要递归的取，取一次就行
type parseComma<SourceStr extends string>
  = SourceStr extends `${infer PrefixChar}${infer RestStr}`
  ? PrefixChar extends ','
  ? TempParseResult<',', RestStr>
  : never
  : never;


// 至此，我们完成了所有的字符的解析，解析来按照顺序组织起来就行 ---- 虽然漏洞百出...但是能更深入的理解 infer 的能力
type parse<SourceStr extends string, Res extends string = ''>
  = parseFunctionName<SourceStr, Res> extends TempParseResult<infer FunctionName, infer Rest1>
  ? parseBrackets<Rest1> extends TempParseResult<infer BracketChar, infer Rest2>
  ? parseNum<Rest2> extends TempParseResult<infer Num1, infer Rest3>
  ? parseComma<Rest3> extends TempParseResult<infer CommaChar, infer Rest4>
  ? parseNum<Rest4> extends TempParseResult<infer Num2, infer Rest5>
  ? parseBrackets<Rest5> extends TempParseResult<infer BracketChar2, infer Rest6>
  ? {
    functionName: FunctionName,
    params: [Num1, Num2],
  } : never : never : never : never : never : never;


// 小结：ts 类型可以通过模式匹配的方式取出子串，我们通过一个字符一个字符的取然后判断的方式，递归的拆分出 token，然后按照顺序拆分 token，就能实现字符串的解析。



// ==== 体操 4 ==== 实现高级类型，取出对象类型中的[数字属性值]
// 构造一个新的对象类型，通过 keyof 遍历对象的属性名，然后对[属性值]做判断，如果不是数字就返回 never，然后[再取属性值]
// 属性值返回 never 就代表这个属性不存在，就能达到过滤的效果。
type filterNumberProp<T extends Object> = {
  [Key in keyof T]: T[Key] extends number ? T[Key] : never
}[keyof T];

type filterNumberKey<T extends Object> = {
  [Key in keyof T]: T[Key] extends number ? T[Key] : never
};

type resProp = filterNumberProp<{ a: 1, b: '1', c: 2 }>
type resKey = filterNumberKey<{ a: 1, b: '1', c: 2 }>

// 小结：对象类型可以通过 {} 构造新对象，通过 [] 取属性值，通过 keyof 遍历属性名，综合这些语法就可以实现各种对象类型的逻辑




