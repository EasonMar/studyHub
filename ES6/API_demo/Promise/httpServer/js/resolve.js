// 如果 **希望得到一个Promise对象**，比较方便的方法就是 **直接调用Promise.resolve方法**
let jsPromise = Promise.resolve($.ajax('http://127.0.0.1:8080/test/test_ajax.json')) 

jsPromise
    .then(res => console.log(res))
    .catch(err => console.log(err));

// 为啥可以行得通？？怎么传参的？？得查看 $.ajax 内部实现

/************************************************** 
 * 以上代码将 jQuery 生成的deferred对象，转为一个新的 Promise 对象
 * jQuery.Deferred是一个对象，它是一个基于 CommonJS Promises/A 的设计。
 * 
 * jQuery1.5.0版本之后，$.ajax默认返回的数据类型就是deferred对象
 */
let dfr = $.Deferred(); // 生成Deferred对象

let something = function(d){
    setTimeout(function(){
        d.resolve(); // 改变Deferred对象的执行状态
    },2000)
}

dfr.promise(something); // 将 something 部署为 promise, 这样就可以对它使用done等

something.done(()=>{
    console.log('something is done')
})
something(dfr); // 最终必须得调用something才能启动整个流程

/**************************************************
 * 其实，新版的$.ajax本身就支持promise，干嘛还要转来转去
 */ 
$.ajax('http://127.0.0.1:8080/test/test_ajax.json')
 // jqXHR.done(function( data, textStatus, jqXHR ) {});
 .done((data, status, XHR)=>{
    console.group(`ajax请求成功了`);
    console.log(`data: ${JSON.stringify(data)}`);
    console.log(`status: ${status}`);
    console.log(XHR);
    console.groupEnd();
 })
 // jqXHR.fail(function( jqXHR, textStatus, errorThrown ) {});
 .fail((XHR, status, err)=>{
    console.group(`ajax请求失败了`);
    console.log(XHR);
    console.log(`status: ${status}`);
    console.log(`error: ${err}`);
    console.groupEnd();
 })
 // jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { }) 
 .always(()=>{
     console.log(`不管怎么样，反正ajax执行了`)
 })