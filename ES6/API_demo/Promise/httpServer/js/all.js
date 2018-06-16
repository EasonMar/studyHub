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

let promises = [111, 222, 333].map(function (id) {
    return getJSON('http://127.0.0.1:8080/test/' + id + ".json");
});

Promise.all(promises).then(res => {
    console.log(res);
}).catch(reason => {
    console.log(reason);
});