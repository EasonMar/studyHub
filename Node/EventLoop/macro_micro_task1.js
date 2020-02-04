console.log(1);
Promise.resolve().then(() => {
  console.log("promise one");
});
process.nextTick(() => {
  console.log("nextTick one");
});

setTimeout(() => {
  process.nextTick(() => {
    console.log("nextTick two");
  });
  console.log(3);
  Promise.resolve().then(() => {
    console.log("promise two");
  });
  console.log(4);
}, 3);

/**
 * Node version: v11.9.0
 * output: 
    1
    nextTick one
    promise one
    3
    4
    nextTick two
    promise two
 */
