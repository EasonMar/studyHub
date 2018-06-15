## Promise学习方法

1. ES6很多新特性就是为Node推出来的，建议在Node环境下运行demo，新版本的Node已经支持包括Promise在内的很多新特性，而且也可以使用Node本身的API辅助练习Promise的写法
2. 有些例子需要使用http-server建立简易服务器，使ajax等功能可用

--------------------
## 基本用法
- ES6 规定，Promise对象是一个 **构造函数**，用来生成Promise实例  --- 要先构造，然后才能使用，我们使用的是实例.
- 下面代码创造了一个Promise实例:

```js
var promise = new Promise(function(resolve, reject) {
    //== 下面这部分应该是模拟异步操作的伪代码 ==
    // ... some code
    if (  异步操作成功  ) {
        resolve(value);
    } else {
        reject(error);
    }
});
```
- Promise构造函数 **接受一个函数作为参数**，该函数的 **两个参数** 分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
- resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”(即从 Pending 变为 Resolved)，
在异步操作成功时调用，并将异步操作的结果，作为参数传递出去
- reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”(即从 Pending 变为 Rejected)，
在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去

- 所以只要Promise实例调用了resolve/reject方法，**即表示状态的改变**，实例里面的resolve/reject除了表示状态改变，还用来 **传递参数**
- Promise实例生成以后，可以用then方法分别 **指定** Resolved状态和Reject状态的 **回调函数**
- 必须要 **指定具体的回调函数**，才知道从promise传回来的参数要干啥

```js
promise.then(function(value) {
    // success
}, function(error) {
    // failure
});
```
----------------------------------------
### then方法
- then方法是定义在原型对象Promise.prototype上的，它的作用是 **为Promise实例添加状态改变时的回调函数**
- then方法 **返回的是一个新的Promise实例** 。注意，不是原来那个Promise实例，因此可以采用链式写法，即then方法后面再调用另一个then方法.

```js
getJSON("/posts.json").then(function(json) {
    return json.post;
}).then(function(post) {
    // ...
});
```
- 上面的代码使用then方法，依次指定了两个回调函数，第一个回调函数完成以后，**会将返回结果作为参数，传入第二个回调函数**
- 所以，采用链式的then，可以指定一组 **按照次序调用的回调函数**
- 这时，前一个回调函数，有可能返回的( **注意是回调函数的返回，不是then的返回** )还是一个Promise对象(即有异步操作)， 这时后一个回调函数，就会等待该Promise对象的状态发生变化，才会被调用

--------------------
### catch方法
- Promise.prototype.catch方法是.then(null, rejection)的别名,用于指定发生错误时的回调函数.
- .then(null, rejection) ----> 相当于resolve的参数为null;

```js
getJSON('/posts.json').then(function(posts) {
    // ...
}).catch(function(error) {
    // 处理 getJSON 和 前一个回调函数运行时发生的错误
    console.log('发生错误！', error);
});
```
- 上面代码中，getJSON方法返回一个Promise对象，如果该对象状态变为Resolved，则会调用then方法指定的回调函数;
- 如果异步操作抛出错误，状态就会变为Rejected，就会调用catch方法指定的回调函数，处理这个错误.
- 另外，then方法指定的回调函数， **如果运行中抛出错误，也会被catch方法捕获**

```js
// 一个例子
var promise = new Promise(function(resolve, reject) {
    throw new Error('test');
});
promise.catch(function(error) {
    console.log(error);
});

// 注意，上面的写法与下面两种写法是等价的.

// 写法一
var promise = new Promise(function(resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise.catch(function(error) {
    console.log(error);
});

// 写法二
var promise = new Promise(function(resolve, reject) {
    reject(new Error('test'));
});
promise.catch(function(error) {
    console.log(error);
});
```
- 比较上面两种写法，可以发现 **reject方法的作用，等同于抛出错误**

- 如果Promise状态已经变成Resolved， **再抛出错误是无效的**.

- Promise 对象的错误具有 **冒泡性质，会一直向后传递，直到被捕获为止**，也就是说,错误总是会被下一个catch语句捕获

- 