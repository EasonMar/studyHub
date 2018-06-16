async function getData() {
    // 模拟请求数据1
    var data1 = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('data1');
        }, 1000);
    });
    console.log(data1);
    // 模拟请求数据2且此请求依赖数据1
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('data2');
        }, 1000);
    });
}
getData().then((v) => {
    console.log(v);
});