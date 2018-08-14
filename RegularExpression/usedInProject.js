// 一、判断字符串str内是否"含有|不含"某些简单字符串
// 判断含有
var str = 'xxxxx';
if(/a/.test(str)){};  
if(/a|b/.test(str)){};

// 实际应用
if(winUrl.indexOf('xrk_is_share') != -1 || winUrl.indexOf('is_author') != -1) {}

if(/xrk_is_share | is_author/.test(winUrl)){}

// 判断不含
// 其实最简单就 !/a/.test(str)，但是也有直接但是复杂的，要使用否定环视，后面讲


// 二、判断是否含有某种模式
// 实际应用：匹配xxx-xxx-xxx的生日格式
if(/^\d+[-]\d+[-]\d+$/.test(str)){}

// 三、抓取特定模式的字符串
// 实际应用：匹配前端健康数据
let reg = /\d(?:[.]\d{1,2}){0,1}[^%]\s/g; 
// 全局匹配，match会把匹配到的所有子串放到数组中
// 分组的最前面加上'?:',可以使这个分组不被捕获,提升效率
data.match(reg).map((d, i) => {
    console.log(`(${i+1})  ${d} => ${Math.round((parseFloat(d)) * 100)}`);
});


// 四、正则的非