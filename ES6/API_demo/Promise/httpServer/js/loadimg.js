function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () {
            resolve(image);
        };
        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };
        image.src = url;
    });
}

let load = loadImageAsync('http://127.0.0.1:8080/image/tech.jpg');
// let load = loadImageAsync('http://127.0.0.1:8080/image/te.jpg'); // 错误时
load.then(img => $('body').append(img)).catch(err=>console.log(err));