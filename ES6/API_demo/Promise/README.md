## Promise学习方法

1. ES6很多新特性就是为Node推出来的，建议在Node环境下运行demo，新版本的Node已经支持包括Promise在内的很多新特性，而且也可以使用Node本身的API辅助练习Promise的写法
2. 有些例子需要使用http-server建立简易服务器，使ajax等功能可用

--------------------
## 基本用法
- ES6 规定，Promise对象是一个 **构造函数**，用来生成Promise实例  --- 要先构造，然后才能使用，我们使用的是实例.
- 下面代码创造了一个Promise实例:

```js
let promise = new Promise(function(resolve, reject) {
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
### Promise.prototype.then方法
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
### Promise.prototype.catch方法
- Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数.
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
let promise = new Promise(function(resolve, reject) {
    throw new Error('test');
});
promise.catch(function(error) {
    console.log(error);
});

// 注意，上面的写法与下面两种写法是等价的.

// 写法一
let promise = new Promise(function(resolve, reject) {
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
let promise = new Promise(function(resolve, reject) {
    reject(new Error('test'));
});
promise.catch(function(error) {
    console.log(error);
});
```
- 比较上面两种写法，可以发现 **reject方法的作用，等同于抛出错误**

- 如果Promise状态已经变成Resolved， **再抛出错误是无效的**.

- Promise 对象的错误具有 **冒泡性质，会一直向后传递，直到被捕获为止**，也就是说，错误总是会被下一个catch语句捕获

- 跟传统的try/catch代码块不同的是，如果【没有】使用catch方法指定【错误处理的回调函数】，Promise对象抛出的错误不会传递到外层代码，即不会有任何反应.

--------------------
### Promise.all方法
- Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例.

```js
let p = Promise.all([p1, p2, p3]);
```
- p的状态由p1、p2、p3决定，分成两种情况( **fulfilled-rejected 类似于 &&-||** )
- 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时 **p1、p2、p3的返回值组成一个数组，传递给p的回调函数**
- 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时 **第一个被reject的实例的返回值，会传递给p的回调函数**

- 上面代码中，Promise.all方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的 **Promise.resolve方法(后面的api)，将参数转为 Promise 实例**，再进一步处理
- Promise.all方法的 **参数** 可以不是数组，但 **必须具有 Iterator 接口**，且 **返回的每个成员都是 Promise 实例**

--------------------
### Promise.race()
- Promise.race方法同样是将多个Promise实例，包装成一个新的Promise实例.

```js
let p = Promise.race([p1, p2, p3]);
```
- 上面代码中，只要p1、p2、p3之中 **有一个实例率先改变状态，p的状态就跟着改变**，那个率先改变的Promise实例的返回值，就传递给p的回调函数.

--------------------
### Promise.resolve()
- 有时需要 **将现有对象转为Promise对象**，Promise.resolve方法就起到这个作用.
- Promise.resolve方法的参数分成四种情况.
```js
// 1.参数是一个Promise实例
// 如果参数是Promise实例，那么Promise.resolve将不做任何修改、原封不动地返回这个实例.
// 2.参数是一个 **thenable对象**
// thenable对象指的是 **具有then方法的对象**，比如下面这个对象:
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};
// Promise.resolve方法会将这个对象转为Promise对象，然后就 **立即执行thenable对象的then方法**.
let thenable = {
    then: function(resolve, reject) {
        resolve(42);
    }
};
let p1 = Promise.resolve(thenable);
p1.then(function(value) {
    console.log(value); // 42
});
// 上面代码中，thenable对象的then方法执行后，对象p1的状态就变为resolved，从而立即执行最后那个then方法指定的回调函数，输出42.

// 3.参数不是具有then方法的对象，或根本就不是对象
// 如果参数是一个原始值，或者是一个不具有then方法的对象，则Promise.resolve方法返回一个新的Promise对象， **状态为Resolved**
var p = Promise.resolve('Hello');

p.then(function(s) {
    console.log(s) // Hello
    // API PS：如果改变已经发生了,你再对Promise对象添加回调函数,也会立即得到这个结果.
});

// 4.不带有任何参数
// Promise.resolve方法允许调用时不带参数,【直接返回一个Resolved状态的Promise对象】--- 其实与3性质一样.
```
- 所以，如果 **希望得到一个Promise对象**，比较方便的方法就是 **直接调用Promise.resolve方法**

- 需要注意的是，立即resolve的Promise对象，是在本轮"事件循环"(event-loop)的结束时执行，而不是在下一轮"事件循环"的开始时.

> 事件循环: 事件循环是指主线程重复从消息队列中取消息、执行的过程。  
> 实际上，主线程只会做一件事情，就是从消息队列里面取消息、执行消息，再取消息、再执行。  
> 当消息队列为空时，就会等待直到消息队列变成非空。而且主线程只有在将当前的消息执行完成后，才会去取下一个消息。  
> 这种机制就叫做事件循环机制，取一个消息并执行的过程叫做一次循环。  
> 异步过程的回调函数，一定不在当前这一轮事件循环中执行。

--------------------
### Promise.reject()
- Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected

--------------------
### 两个有用的方法
- ES6的Promise API提供的方法不是很多，有些有用的方法可以自己部署。下面介绍如何部署两个不在ES6之中、但很有用的方法。

- done()：Promise对象的回调链，不管以then方法或catch方法结尾，要是最后一个方法抛出错误，都有可能无法捕捉到(因为Promise内部的错误不会冒泡到全局).因此，我们可以提供一个done方法，总是处于回调链的尾端，保证抛出任何可能出现的错误
- finally()：方法用于指定不管Promise对象最后状态如何，。都会执行的操作。它与done方法的最大区别，。它接受一个普通的回调函数作为参数，。该函数不管怎样都必须执行