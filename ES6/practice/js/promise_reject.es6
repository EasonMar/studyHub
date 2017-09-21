const thenableRJ = {
    then(resolve, reject) {
        reject('出错了');
    }
};
Promise.reject(thenableRJ)
    .catch(e => {
        console.log(e === thenableRJ)
    })



// 对比resolve
let thenableRS = {
    then: function(resolve, reject) {
        resolve(42);
    }
};

let p1 = Promise.resolve(thenableRS);
p1.then(function(value) {
    console.log(value); // 42
});