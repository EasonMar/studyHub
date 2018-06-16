# async 函数

### 1. 含义：一句话, 它就是 Generator 函数的语法糖
- async函数就是将 Generator 函数的星号（*）替换成async, 将yield替换成await, 仅此而已
- async函数对 Generator 函数的改进, 体现在以下四点：
1. 内置执行器：Generator 函数的执行必须靠执行器, 所以才有了co模块, 而async函数自带执行器
2. 更好的语义：async和await, 比起星号和yield, 语义更清楚了。async表示函数里有异步操作, await表示紧跟在后面的表达式需要等待结果
3. 更广的适用性：co模块约定, yield命令后面只能是 Thunk 函数或 Promise 对象, 而async函数的await命令后面, 可以是 Promise 对象和原始类型的值（数值、字符串和布尔值, 但这时等同于同步操作）
4. **返回值是 Promise**：async函数的返回值是 Promise 对象, 这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作

- 进一步说, async函数完全可以看作 **多个异步操作, 包装成的一个 Promise 对象, 而await命令就是内部then命令的语法糖**

### 2. 基本用法
- async函数返回一个 Promise 对象, 可以使用then方法添加回调函数。当函数执行的时候, 一旦遇到await就会先返回, 等到异步操作完成, 再接着执行函数体内后面的语句
- async 函数有多种使用形式：

```js
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function() {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
    constructor() {
        this.cachePromise = caches.open('avatars');
    }
    async getAvatar(name) {
        const cache = await this.cachePromise;
        return cache.match(`/avatars/${name}.jpg`);
    }
}
const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async() => {};
```

### 3. 语法
> async函数的语法规则总体上比较简单, 难点是错误处理机制

#### 返回 Promise 对象
- async函数返回一个 Promise 对象
- async函数内部 **return语句返回的值, 会成为then方法回调函数的参数**
- 详细讲就是：若在 async 函数中 return 了一个值 x, 不管 x 值是什么类型, async 函数的实际返回值总是 Promise.resolve(x).
- 接下来看一段代码的应用. 假设有这样一个场景: 需要先通过 请求1 拿到 数据1, 然后通过通过 请求2 并携带发送 数据1 获取到 数据2, 拿到 数据2 之后再展示到页面.

```js
async function showData() {
    // 假装请求数据1
    var data1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000);
    });
    // 假装请求数据2且此请求依赖数据1
    var data2 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000);
    });
    // 展示数据2
    console.log(data2);
}
showData();
```
- 既然 async 函数总是返回一个promise, 那么也可以在一个 async 函数返回获取 数据2 的promise, 调用函数后再使用 then 方法拿到数据, 代码如下:

```js
async function getData() {
    // 假装请求数据1
    var data1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000);
    });
    // 假装请求数据2且此请求依赖数据1
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000);
    });
}
getData().then((v) => {
    console.log(v);
});
```
- async函数内部抛出错误, 会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到

```js
async function f() {return 'hello world';}
f().then(v => console.log(v)); // "hello world"
```

#### Promise 对象的状态变化
- async函数返回的 Promise 对象, 必须等到内部所有await命令后面的 Promise 对象执行完, 才会发生状态改变, 除非遇到return语句或者抛出错误。也就是说, 只有async函数内部的异步操作执行完, 才会执行then方法指定的回调函数

#### await 命令
- 正常情况下, await命令后面是一个 Promise 对象。如果不是, 会被转成一个立即resolve的 Promise 对象
- await命令后面的 Promise 对象如果变为reject状态, 则reject的参数会被catch方法的回调函数接收到
- 只要一个await语句后面的 Promise 变为reject, 那么整个async函数都会中断执行

```js
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
// 上面代码中, 第二个await语句是不会执行的, 因为第一个await语句状态变成了
```
- 有时, 我们希望即使前一个异步操作失败, 也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面, 这样不管这个异步操作是否成功, 第二个await都会执行

```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) { }
  return await Promise.resolve('hello world');
}
f().then(v => console.log(v))
// hello world
```
- 另一种方法是await后面的 Promise 对象再跟一个catch方法, 处理前面可能出现的错误

```js
async function f() {
  await Promise.reject('出错了').catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f().then(v => console.log(v))
// 出错了
// hello world
```

#### 错误处理
- 如果await后面的异步操作出错, 那么等同于async函数返回的 Promise 对象被reject; catch方法的回调函数被调用, 它的参数就是抛出的错误对象
- 防止出错的方法, 也是将其放在try...catch代码块之中; 如果有多个await命令, 可以统一放在try...catch结构中

#### 使用注意点
1. 前面已经说过，await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

```js
async function myFunction() {
  try {
    await somethingThatReturnsAPromise();
  } catch (err) {
    console.log(err);
  }
}
// 另一种写法
async function myFunction() {
  await somethingThatReturnsAPromise()
  .catch(function (err) {
    console.log(err);
  });
}
```

2. 多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发

```js
// getFoo和getBar是两个独立的异步操作（即互不依赖），被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发。
let foo = await getFoo();
let bar = await getBar();

// 写法一
let [foo, bar] = await Promise.all([getFoo(), getBar()]);

// 写法二
let fooPromise = getFoo();
let barPromise = getBar();
let foo = await fooPromise;
let bar = await barPromise;
// 上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间。
```

3. await命令只能用在async函数之中，如果用在普通函数，就会报错

```js
async function dbFuc(db) {
  let docs = [{}, {}, {}];

  // 报错
  docs.forEach(function (doc) {
    await db.post(doc);
  });
}
// 上面代码会报错，因为await用在普通函数之中了。但是，如果将forEach方法的参数改成async函数，也有问题。

function dbFuc(db) { //这里不需要 async
  let docs = [{}, {}, {}];

  // 可能得到错误结果
  docs.forEach(async function (doc) {
    await db.post(doc);
  });
}
// 上面代码可能不会正常工作，原因是这时三个db.post操作将是并发执行，也就是同时执行，而不是继发执行。正确的写法是采用for循环。

async function dbFuc(db) {
  let docs = [{}, {}, {}];

  for (let doc of docs) {
    await db.post(doc);
  }
}
```