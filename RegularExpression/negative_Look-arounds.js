// negative look-arounds：否定顺序环视，又叫 零宽度负预测先行断言(零宽度负预测正向断言)
// 参考：https://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word
let a = 'as;dlfkjcatasdl;fkj',
    b = ';fkjcat',
    c = 'catasdfasdf',
    d = 'cacacakt';

let test = reg => str => reg.test(str);

// 不太准确，它只限定了在文本的开头（也就是^）右边不能出现cat
let regWrong = /^(?!cat).+$/;
let testWrong = test(regWrong);
console.log([testWrong(a), testWrong(b), testWrong(c), testWrong(d)]);

// 真正要做的是，在文本的每一个位置右边，都不能出现cat，更改如下
// 不懂为什么要在否定环视后面加个.？
// 用来表示 断言之后 实实在在的 字符！

let regRight = /^(?:(?!cat).)+$/
let testRight = test(regRight);
console.log([testRight(a), testRight(b), testRight(c), testRight(d)]);