// 在现代浏览器上写AJAX主要依靠XMLHttpRequest对象：
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

// onreadystatechange - Defines a function to be called when the readyState property changes
request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    console.log(request.readyState);
    // 判断ajax本身的阶段状态
    if (request.readyState === 4) { // 成功完成
        /**
         * readyState	Holds the status of the XMLHttpRequest.
         *   0: request not initialized 
         *   1: server connection established
         *   2: request received 
         *   3: processing request 
         *   4: request finished and response is ready
         */

        // 判断服务器响应的结果:
        console.log(request.status);
        console.log(request.responseText);
        if (request.status === 200) {
            /**
             * status	Returns the status-number of a request
             * 200: "OK"
             * 403: "Forbidden"
             * 404: "Not Found"
             * For a complete list go to the Http Messages Reference
             */

            // 成功，通过responseText拿到响应的文本: responseText - Returns the response data as a string
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续处理...
    }
}

// 如果再次添加监听事件 --- 则会覆盖前面的声明，所以这个方案无法解决底层统一修改ajax请求的需求
// 深入到XMLHttpRequest对象原型链中去、使用代理是否可以解决
// request.onreadystatechange = function(){
//     console.log('another onreadystatechange');
// }

// 这样子貌似可以搞起来！
var oldFn = request.onreadystatechange;
request.onreadystatechange = function(){
    // 判断ajax本身的阶段状态
    if (request.readyState === 4) { // 成功完成    
        if (request.status === 200) {
            console.log('这个是我新加的操作！！！')
        } 
    } 
    oldFn();
}


/**
 * open(method,url,async,user,psw)	Specifies the request
 *     method: the request type GET or POST
 *     url: the file location
 *     async: true (asynchronous) or false (synchronous)
 *     user: optional user name
 *     psw: optional password
 */
request.open('GET', 'http://192.168.13.76/JCYD_PHP/Practice/PHP_basic/ajax.php?username=ABC&password=123');

/**
 * send()	    Sends the request to the server / Used for GET requests
 * send(string)	Sends the request to the server / Used for POST requests
 * To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
 * xhttp.open("POST", "demo_post2.asp", true);
 * xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 * xhttp.send("fname=Henry&lname=Ford");
 */
request.send();


alert('请求已发送，请等待响应...');

// 对于低版本的IE，需要换一个ActiveXObject对象：
// var request = new ActiveXObject('Microsoft.XMLHTTP'); // 新建Microsoft.XMLHTTP对象
