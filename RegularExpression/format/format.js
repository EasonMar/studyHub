const fs = require('fs');

// fs.readFileSync(filename, [encoding])
let data = fs.readFileSync('source.txt', 'utf-8');

let reg = /\d(?:[.]\d{1,2}){0,1}[^%]\s/g;  // 不需要捕获分组，则在分组左括号开头加上?:
let group = [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]; // 用以给输出分组，每部分最后一个数据后加多一个换行

console.log('');
console.log('');
console.log('请查看、核对数据格式化过程是否有偏差(一共15条数据)：');
console.log('');

let result = data.match(reg).map((d, i) => {
    console.log(`(${i+1})  ${d} => ${Math.round((parseFloat(d)) * 100)}`);
    // 给输出分组，每部分最后一个数据后加多一个换行
    if (group[i]) return (Math.round((parseFloat(d)) * 100) + '\r\n');
    return Math.round((parseFloat(d)) * 100)
});

console.log('');

// fs.writeFileSync(file, data[, encoding])
fs.writeFileSync('output.txt', result.join('\r\n'), 'utf-8');