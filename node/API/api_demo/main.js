// 调用Hello模块
 const Hello = require('./module/Hello.js')

 let hello = new Hello();
 hello.setName('yideng');
 hello.sayHello();