// =================================================================
// 下面是一个用Promise对象实现的 Ajax 操作的例子.
let getJSON = function (url) {
    let promise = new Promise(function (resolve, reject) {
        // ======== 里面包裹着ajax异步操作 ========
        let client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler; // 这里调用handler
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
    });
    return promise;
};

let ajax = getJSON('http://127.0.0.1:8080/test/test_ajax.json');
// let ajax = getJSON('http://127.0.0.1:8080/test/test_ajx.json');  // 错误时
ajax.then(res => alert(res.data)).catch(err => console.log(err))