enum Color {red = 1,green,blue = 2};
var colorName = Color[2];
// 声明g、c为Color类型
var g:Color = Color.green; 
var b:Color = Color.green;

console.log(`Color[2] = ${colorName}`);
console.log(`green's index = ${g}`);
console.log(`blue's index = ${b}`);