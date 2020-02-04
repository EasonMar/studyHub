const fs = require("fs");
console.log("start");

fs.writeFile("text.txt", "我写的数据", err => {
  if (err) throw err;
  console.log("text1");
});

setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve().then(() => {
    console.log("promise 3");
  });
});

setTimeout(() => {
  console.log("setTimeout 2");
  // Promise.resolve
  Promise.resolve()
    .then(() => {
      console.log("promise 4");
      // then里面的Promise.resolve竟然跟其外层同个执行队列...不太能理解
      Promise.resolve().then(() => {
        console.log("promise 5");
      });
    })
    .then(() => {
      console.log("promise 6");
    })
    .then(() => {
      fs.writeFile("text1.txt", "我写的数据", err => {
        if (err) throw err;
        console.log("text2");
      });
      setTimeout(() => {
        console.log("setTimeout 3");
        Promise.resolve()
          .then(() => {
            console.log("promise 7");
          })
          .then(() => {
            console.log("promise 8");
          });
      }, 1000);
    });
}, 0);

Promise.resolve()
  .then(() => {
    console.log("promise 1");
  })
  .then(() => {
    console.log("promise 2");
  });
console.log("end");

/**
 * Node version: v11.9.0
 * output: 
    start
    end
    promise 1
    promise 2
    setTimeout 1
    promise 3
    setTimeout 2
    promise 4
    promise 5
    promise 6
    text1
    text2
    setTimeout 3
    promise 7
    promise 8
 */

/**
 * when in Node v12.1.0
 * text output is
 * text2
 * text1
 * ????
 * */
