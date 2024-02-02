// 第一轮 - 宏任务
console.log("1");

// 微任务 +1
queueMicrotask(
  // 第一轮 - 微任务1
  () => {
    console.log("2");

    // 微任务 +1
    Promise.resolve().then(
      // 第一轮 - 微任务2
      () => {
        console.log("3");
      }
    );

    // 宏任务 +1
    setTimeout(
      // 第三轮 - 宏任务
      () => {
        console.log("4");

        // 微任务 +1
        queueMicrotask(
          // 第三轮 - 微任务
          () => {
            console.log("5");
          }
        );
      }
    );
  }
);
// 宏任务 +1
setTimeout(
  // 第二轮 - 宏任务
  () => {
    // 微任务 +1
    Promise.resolve().then(
      // 第二轮 - 微任务1
      () => {
        console.log("6");
      }
    );

    console.log("7");

    // 微任务 +1
    queueMicrotask(
      // 第二轮 - 微任务2
      () => {
        console.log("8");
      }
    );
  }
);
console.log("9");

// 1 9 2 3 7 6 8 4 5
