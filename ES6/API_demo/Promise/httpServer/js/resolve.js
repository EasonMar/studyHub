// 如果 **希望得到一个Promise对象**，比较方便的方法就是 **直接调用Promise.resolve方法**

let jsPromise = Promise.resolve($.ajax('http://127.0.0.1:8080/test/test_ajax.json'))

jsPromise
    .then(res => console.log(res))
    .catch(err => console.log(err));