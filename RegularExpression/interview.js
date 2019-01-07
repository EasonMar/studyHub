// 用正则匹配 `http://www.wehotel.com` 域名下除了 `static` 和 `common` 目录下的js资源
// 考点：否定顺序环视 (?!…)  PS：注意 (?!)是一个整体, 包括括号()在内, 所以这里()并不是捕获分组

// var reg = /^http:\/\/www\.wehotel\.com\/.*(?:(?!static)|(?!common))\/(.+\.js)$/

// 这个更合理, 不要搞太多无谓的分组，
// var reg = /^http:\/\/www\.wehotel\.com\/.*(?!static|common)\/(.+\.js)$/ 
// 以上仍然不太准确，没有说明static\common的层级，也没有清楚的表示出 /static/ 、 /common/ 目录！

/**
 * 1、\/(?:static|common)\/ : 表示是/static/ 或 /common/ 目录
 * 2、(?:(?!xxxx).+) : 表示这目录可能出现在任意一个层级
 * 3、更加准确的 环视位置 以及 js文件的界限 
 */
// var reg = /^http:\/\/www\.wehotel\.com(?:(?!\/(?:static|common)\/).)+([^/]+\.js)$/
// 这样还是有问题，无法贪婪匹配到 aaa.js， 只匹配到a.js

// 因为这里没有明确 (?:(?!\/(?:static|common)\/).)+ 与 ([^/]+\.js)的界限(好像可以加一个/来界定)
// 而且 (?:(?!\/(?:static|common)\/).)+ 也是贪婪匹配，可以将其改成非贪婪的... 让后面的 [^/]+贪婪
// 这么多坑的呢


var u1 = 'http://www.wehotel.com/sts/aaa.js';
var u2 = 'http://www.wehotel.com/sts/aaa/static/bbbb/bkk.js';
var u3 = 'http://www.wehotel.com/common/bkk.js';
var u4 = 'http://www.wehotel.com/commo/bkk.js';

console.log('(?:(?!\/(?:static|common)\/).)+? //把前面部分设为非贪婪');
var r1 = /^http:\/\/www\.wehotel\.com(?:(?!\/(?:static|common)\/).)+?([^/]+\.js)$/
console.log(u1.match(r1));
console.log(u2.match(r1));
console.log(u3.match(r1));
console.log(u4.match(r1));

console.log('\/([^/]+\.js) //给前后部分加个界限');
var r2 = /^http:\/\/www\.wehotel\.com(?:(?!\/(?:static|common)\/).)+\/([^/]+\.js)$/;
console.log(u1.match(r2));
console.log(u2.match(r2));
console.log(u3.match(r2));
console.log(u4.match(r2));

// jh写了下面一种思路：先通过判断是否为 static/ common目录下的资源，然后对其进行全盘否定 来反向处理
// 里面有很多奇葩的分组, 可以先不理会
// 分析一下为啥这里可以
var r3 = /^(?!(http(s)?):\/\/(www\.wehotel\.com)(\/\w+)*\/(static|common)*(\/\w+)*\.js)/
