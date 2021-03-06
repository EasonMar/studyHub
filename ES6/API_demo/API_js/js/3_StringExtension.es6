document.getElementById('note').innerHTML = "StringExtension";



// Unicode相关
// 1、字符的 Unicode 表示法
// 2、codePointAt()
// 3、String.fromCodePoint() 
// 5、at()
// 6、normalize()


// ==============================================
// 4、字符串的遍历器接口
// ES6为字符串添加了遍历器接口,使得字符串可以被for...of循环遍历.

for (let codePoint of 'foo') {
    console.log(codePoint)
}

// 除了遍历字符串,这个遍历器最大的优点是可以识别大于0xFFFF的码点,传统的for循环无法识别这样的码点.


// ==============================================
// 7、includes(), startsWith(), endsWith()

// 传统上,JavaScript只有indexOf方法,可以用来确定一个字符串是否包含在另一个字符串中.ES6又提供了三种新方法.
// includes()：返回布尔值,表示是否找到了参数字符串.
// startsWith()：返回布尔值,表示参数字符串是否在源字符串的头部.
// endsWith()：返回布尔值,表示参数字符串是否在源字符串的尾部.

// 这三个方法都支持第二个参数,表示开始搜索的位置.

var s = 'Hello world!';
s.startsWith('world', 6) // true
s.endsWith('Hello', 5) // true
s.includes('Hello', 6) // false
// 上面代码表示,使用第二个参数n时,endsWith的行为与其他两个方法有所不同.
// 它针对前n个字符,而其他两个方法针对从第n个位置直到字符串结束.


// ==============================================
// 8、repeat()
// repeat方法返回一个新字符串,表示将原字符串重复n次.
console.log('x'.repeat(3)); // "xxx"
console.log('hello'.repeat(2)); // "hellohello"
console.log('na'.repeat(0)); // ""

// 如果repeat的参数是负数或者Infinity,会报错.
// 如果参数是0到-1之间的小数,则等同于0,这是因为会先进行取整运算.
// 0到-1之间的小数,取整以后等于-0,repeat视同为0.
// 参数NaN等同于0.

// 如果repeat的参数是字符串,则会先转换成数字.
console.log('na'.repeat('na')); // ""
console.log('na'.repeat('3')); // "nanana"


// ==============================================
// 9、padStart(),padEnd()
// ES2017引入了字符串补全长度的功能.如果某个字符串不够指定长度,会在头部或尾部补全.
// padStart()用于头部补全,padEnd()用于尾部补全 ----  注意,下面是用ab去补全x.
console.log('x'.padStart(5, 'ab')); // 'ababx'
console.log('x'.padStart(4, 'ab')); // 'abax'

console.log('x'.padEnd(5, 'ab')); // 'xabab'
console.log('x'.padEnd(4, 'ab')); // 'xaba'

// 如果原字符串的长度,等于或大于指定的最小长度,则返回原字符串.
// 如果用来补全的字符串与原字符串,两者的长度之和超过了指定的最小长度,则会截去超出位数的补全字符串.
'abc'.padStart(10, '0123456789'); // '0123456abc'

// 如果省略第二个参数,默认使用空格补全长度.
'x'.padStart(4) // '   x'
'x'.padEnd(4) // 'x   '


// padStart的常见用途是为数值补全指定位数.下面代码生成10位的数值字符串.
'1'.padStart(10, '0') // "0000000001"
'12'.padStart(10, '0') // "0000000012"
'123456'.padStart(10, '0') // "0000123456"

// 另一个用途是提示字符串格式.
'12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
'09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"


// ==============================================
// 10、模板字符串！！
// 传统的JavaScript语言,输出模板通常是这样写的.
// $('#result').append(
//   'There are <b>' + basket.count + '</b> ' +
//   'items in your basket, ' +
//   '<em>' + basket.onSale +
//   '</em> are on sale!'
// );
// 上面这种写法相当繁琐不方便,ES6引入了模板字符串解决这个问题.
let basket = { count: 10, onSale: 5 }
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
// 模板字符串(template string)是增强版的字符串,用反引号(`)标识.

// 它可以当作普通字符串使用,也可以用来定义多行字符串,或者在字符串中嵌入变量.

// 普通字符串
`In JavaScript '\n' is a line-feed.`;

// 多行字符串
`In JavaScript this is
 not legal.`;

console.log(`string text line 1
string text line 2`);

// 字符串中嵌入【变量】
var name = "Bob",
    time = "today";
console.log(`Hello ${name}, how are you ${time}?`);

// 上面代码中的模板字符串,都是用反引号表示.如果在模板字符串中需要使用反引号,则前面要用反斜杠转义.
var greeting = `\`Yo\` World!`;


// 如果使用模板字符串表示多行字符串,所有的空格和缩进都会被保留在输出之中.
console.log(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);
// 上面代码中,所有模板字符串的空格和换行,都是被保留的,比如<ul>标签前面会有一个换行.
// 如果你不想要这个【换行】,可以使用trim方法消除它.  
console.log(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`.trim());


// 模板字符串中嵌入变量,需要将变量名写在${}之中.
function authorize(user, action) {
    if (!user.hasPrivilege(action)) {
        throw new Error(
            // 传统写法为
            // 'User '
            // + user.name
            // + ' is not authorized to do '
            // + action
            // + '.'
            `User ${user.name} is not authorized to do ${action}.`);
    }
}

// 【大括号内部可以放入任意的JavaScript表达式,可以进行运算,以及引用对象属性】.
var x = 1;
var y = 2;

`${x} + ${y} = ${x + y}`;
// "1 + 2 = 3"

`${x} + ${y * 2} = ${x + y * 2}`;
// "1 + 4 = 5"

var obj = { x: 1, y: 2 };
`${obj.x + obj.y}`
// 3

// 模板字符串之中还能【调用函数】.
function fn() {
    return "Hello World";
}

`foo ${fn()} bar`;
// foo Hello World bar

/**
 * 【如果大括号中的值不是字符串,将按照一般的规则转为字符串】.比如,大括号中是一个【对象】,将默认调用对象的【toString方法】.
 * 【如果模板字符串中的变量没有声明,将报错.】
 * 【由于模板字符串的大括号内部,就是执行JavaScript代码】,因此如果大括号内部是一个字符串,将会原样输出.
 */

// 模板字符串甚至【还能嵌套】.
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
// 上面代码中,模板字符串的变量之中,又嵌入了另一个模板字符串,使用方法如下.

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
console.log(tmpl(data));

// 再次复习map方法：
/*
	map()方法定义在JavaScript的Array中,我们调用Array的map()方法,传入我们自己的函数,就得到了一个新的Array作为结果：
	function pow(x) { return x * x; }
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
*/
console.log(data.map(function(x) { return `
	<tr><td>${x.first}</td></tr>
    <tr><td>${x.last}</td></tr>
` }));


// 如果需要引用模板字符串本身,在需要时执行,可以像下面这样写.
// 写法一
let strA = 'return ' + '`Hello ${name}!`'; // 为啥没有报错？？因为有''包裹在外面,里面是一个字符串
console.log(strA);
let funcA = new Function('name', strA);
console.log(funcA('JackA')); // "Hello Jack!"

// 写法二
let strB = '(name) => `Hello ${name}!`';
let funcB = eval.call(null, strB);
console.log(funcB('JackB')); // "Hello Jack!"

// 以上两个方法是把字符串当做指令来运行的方法！

// 学习Function
// Function 构造函数 创建一个新的Function对象. 在 JavaScript 中, 每个函数实际上都是一个Function对象.
// 句法: new Function ([arg1[, arg2[, ...argN]],] functionBody)
// 参数: 
// arg1, arg2, ... argN: 被函数使用的参数的名称必须是合法命名的.参数名称是一个有效的JavaScript标识符的【字符串】,
// 或者一个用逗号分隔的有效字符串的列表;例如“×”,"theValue",或"A,B".
// functionBody: 一个含有包括函数定义的JavaScript语句的【字符串】.


// ==============================================
// 11、实例：模板编译 ？？？？

// 12、模板标签：
// 模板字符串可以紧跟在一个函数名后面,该函数将被调用来处理这个模板字符串.这被称为“标签模板”功能(tagged template).
// 标签模板其实不是模板,而是函数调用的一种特殊形式.“标签”指的就是函数,紧跟在后面的模板字符串就是它的参数.

// 如果模板字符里面有变量,就不是简单的调用了,而是会将模板字符串先处理成多个参数,再调用函数.
var a = 5,
    b = 10;

function tag(s, v1, v2) {
    console.log(s[0]);
    console.log(s[1]);
    console.log(s[2]);
    console.log(v1);
    console.log(v2);
    return "OK";
}
console.log(tag `Hello ${ a + b } world ${ a * b}`);

// tag函数的第一个参数是一个数组,该数组的成员是模板字符串中那些没有变量替换的部分,
// 也就是说,变量替换只发生在数组的第一个成员与第二个成员之间、第二个成员与第三个成员之间,以此类推.

// tag函数的其他参数,都是模板字符串各个变量被替换后的值.由于本例中,模板字符串含有两个变量,因此tag会接受到value1和value2两个参数.



// 下面是一个更复杂的例子.
var total = 30;
var msg = passthruA `The total is ${total} (${total*1.05} with tax)`;

function passthruA(literals) {
    var result = '';
    var i = 0;
    console.log(literals);
    console.log(arguments);
    while (i < literals.length) {
        console.log(`literals of ${i} : ${literals[i]}`);
        result += literals[i++]; // i++放在这里蛮妙的.
        if (i < arguments.length) {
            console.log(`arguments of ${i} : ${arguments[i]}`);
            result += arguments[i];
        }
    }
    return result;
}

console.log(msg); // The total is 30 (31.5 with tax)
// 上面这个例子展示了,如何将各个参数按照原来的位置拼合回去.


// passthru函数采用rest参数的写法如下.
function passthruB(literals, ...values) {
    var output = "";
    console.log('');
    console.log('literals : ' + literals);
    console.log('values : ' + values);
    for (var index = 0; index < values.length; index++) {
        output += literals[index] + values[index];
    }
    output += literals[index]
    return output;
}

passthruB `The total is ${total} (${total*1.05} with tax)`;


// -----------------------------------------------------------------
// "标签模板"的一个重要应用,就是过滤HTML字符串,防止用户输入恶意内容.
var sender = 'Bob'
var message =
    SaferHTML `<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);
        console.log(`s1${i} = ${s}`)
        // Escape special characters in the substitution. -- 替换转义特殊字符
        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        console.log(`s2${i} = ${s}`)
        // Don't escape special characters in the template. -- 不转义模板中的特殊字符
        s += templateData[i];
        console.log(`s3${i} = ${s}`)
    }
    return s;
}
console.log(message);
console.log('');
// 上面代码中, sender变量往往是用户提供的, 经过SaferHTML函数处理, 里面的特殊字符都会被转义.

sender = '<script>alert("abc")<\/script>'; // 恶意代码
message = SaferHTML `<p>${sender} has sent you a message.</p>`;

console.log(message);

// -------------------------------------------------------------------------------------
// 标签模板的另一个应用,就是多语言转换(国际化处理)？？？？
// 模板字符串本身并不能取代Mustache之类的模板库,因为没有条件判断和循环处理功能,但是通过标签函数,你可以自己添加这些功能.

// 下面的hashTemplate函数,是一个自定义的模板处理函数
// var libraryHtml = hashTemplate`
//   <ul>
//     #for book in ${myBooks}
//       <li><i>#{book.title}</i> by #{book.author}</li>
//     #end
//   </ul>
// `;

// 除此之外,你甚至可以使用标签模板,在JavaScript语言之中嵌入其他语言.
// jsx`
//   <div>
//     <input
//       ref='input'
//       onChange='${this.handleChange}'
//       defaultValue='${this.state.value}' />
//       ${this.state.value}
//    </div>
// `
// 上面的代码通过jsx函数,将一个DOM字符串转为React对象.你可以在Github找到jsx函数的具体实现.
// -------------------------------------------------------------------------------------


// 模板处理函数的第一个参数（模板字符串数组）,还有一个raw属性.
console.log `123`;
// ["123", raw: Array[1]]
// 上面代码中,console.log接受的参数,实际上是一个数组.该数组有一个raw属性,保存的是【转义后的原字符串】.


// 请看下面的例子.
tag `First line\nSecond line`

function tag(strings) {
    console.log(strings.raw[0]);
    // "First line\\nSecond line"
}
// 上面代码中,tag函数的第一个参数strings,有一个raw属性,也指向一个数组.
// 该数组的成员与strings数组完全一致.
// 比如,strings数组是["First line\nSecond line"],那么strings.raw数组就是["First line\\nSecond line"].
// 两者唯一的区别,就是字符串里面的斜杠都被转义了.
// 比如,strings.raw数组会将\n视为\\和n两个字符,而不是换行符.
// 这是为了方便取得转义之前的原始模板而设计的.



// ==============================================
// 13、String.raw()
// ES6还为原生的String对象,提供了一个raw方法. String.raw方法,往往用来充当模板字符串的处理函数,
// 返回一个斜杠都被转义(即斜杠前面再加一个斜杠)的字符串,对应于替换变量后的模板字符串.

// String.raw的代码基本如下.
String.raw = function(strings, ...values) {
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += strings.raw[index] + values[index];
    }
    output += strings.raw[index]
    return output;
}
// String.raw方法可以作为处理模板字符串的基本方法,它会将所有变量替换,而且对斜杠进行转义,方便下一步作为字符串来使用.

// String.raw方法也可以作为正常的函数使用. --- 体会其作用.
// 这时,它的第一个参数,应该是一个具有raw属性的对象,且raw属性的值应该是一个数组.
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'   ----  起到了穿插的作用.
// 等同于
String.raw({ raw: ['t','e','s','t'] }, 0, 1, 2);


// ==============================================
// 13、模板字符串的限制
// 前面提到标签模板里面,可以内嵌其他语言.？？？
// 但是,模板字符串默认会将字符串转义,导致无法嵌入其他语言.
