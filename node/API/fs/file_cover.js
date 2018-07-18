const fs = require('fs');

let src = fs.readFileSync('./src/cong1.jpg');
fs.writeFileSync('./dist/test.jpg', src);

// 如果文件存在，写入的内容会覆盖旧文件内容
src = fs.readFileSync('./src/cong2.jpg');
fs.writeFileSync('./dist/test.jpg', src);