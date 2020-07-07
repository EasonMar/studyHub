# iframe 关键 api 及安全性

## 一、关键 api

-   属性

    -   sandbox

        -   allow-scripts: 允许嵌入的浏览上下文运行脚本（但不能创建弹窗）。如果没有使用该关键字，就无法运行脚本。
        -   allow-same-origin: 允许将内容保持其来源（如果没有使用该关键字，嵌入的内容将被视为来自一个独立的源，这将使同源检查失败）
        -   allow-top-navigation: 允许嵌入的页面导航（加载）内容到顶级的页面（iframe 内嵌页面能够使用 window.top 使顶级页面进行页面跳转）
        -   allow-forms: 允许嵌入的浏览上下文提交表单。如果没有使用该关键字，则无法提交表单。
        -   allow-modals: 允许嵌入的浏览上下文打开模态窗口
        -   allow-popups: 允许弹窗 (例如 window.open, target="\_blank", showModalDialog)。如果没有使用该关键字，相应的功能将自动被禁用
        -   allow-pointer-lock: 允许资源使用 Pointer Lock Api（主要和鼠标锁定有关）
        -   allow-presentation: 允许嵌入的浏览上下文开始一个 presentation session
        -   allow-orientation-lock: 允许嵌入的内容锁定屏幕方向（比如智能手机、平板电脑的水平朝向或垂直朝向）
        -   allow-popups-to-escape-sandbox: 允许沙箱化的文档打开新窗口，并且新窗口不会继承沙箱标记
        -   allow-top-navigation-by-user-activation: 允许嵌入的浏览上下文在经过用户允许后导航（加载）内容到顶级的浏览上下文（只能通过用户手势主动调用来初始化）
        -   PS: 以下配置可以保证 js 脚本的执行，但是禁止 iframe 通过 top.location 赋值控制顶层页面跳转
            ```html
            <iframe sandbox="allow-same-origin allow-scripts" src="..."></iframe>
            ```

    -   referrerpolicy: 表示在获取 iframe 资源时如何发送 referrer 首部
        -   no-referrer: 不发送 Referer 首部。
        -   no-referrer-when-downgrade (default): 向不受 TLS (HTTPS) 保护的 origin 发送请求时，不发送 Referer 首部。
        -   origin: referrer 首部中仅包含来源页面的源。换言之，仅包含来源页面的 scheme, host, 以及 port。
        -   origin-when-cross-origin: 发起跨域请求时，仅在 referrer 中包含来源页面的源。发起同源请求时，仍然会在 referrer 中包含来源页面在服务器上的路径信息。
        -   same-origin: 对于 same origin （同源）请求，发送 referrer 首部，否则不发送。
        -   strict-origin: 仅当被请求页面和来源页面具有相同的协议安全等级时才发送 referrer 首部（比如从采用 HTTPS 协议的页面请求另一个采用 HTTPS 协议的页面）。如果被请求页面的协议安全等级较低，则不会发送 referrer 首部（比如从采用 HTTPS 协议的页面请求采用 HTTP 协议的页面）。
        -   strict-origin-when-cross-origin: 当发起同源请求时，在 referrer 首部中包含完整的 URL。当被请求页面与来源页面不同源但是有相同协议安全等级时（比如 HTTPS→HTTPS），在 referrer 首部中仅包含来源页面的源。当被请求页面的协议安全等级较低时（比如 HTTPS→HTTP），不发送 referrer 首部。
        -   unsafe-url: 始终在 referrer 首部中包含源以及路径 （但不包括 fragment，密码，或用户名）。这个值是不安全的, 因为这样做会暴露受 TLS 保护的资源的源和路径信息。
    -   allow: 用于为 iframe 指定其特征策略（特性策略可以允许你控制页面或者 iframe 可以使用哪些特性, 这是一个实验中的功能）
    -   其他属性：
        -   width: iframe 宽度
        -   height: iframe 高度
        -   name: iframe 的名称
        -   src: 被嵌套的页面的 URL 地址
        -   srcdoc（HTML5 only）: 该属性是一段 HTML 代码，这些代码会被渲染到 iframe 中
        -   csp(实验属性,尽量勿用于生产): 对嵌入的资源配置内容安全策略（为实验属性, 很多浏览器厂商不支持，例如 safari 不支持）

-   方法
    -   onload: iframe 载入完成后被触发
        -   可作为监测 iframe 是否重新载入页面的钩子
        -   PS: 动态创建的 display 为 none 的 iframe 元素，onload 事件最后注册(放在 iframe 插入 dom 之后), 则 onload 事件不会执行

## 二、父子页面通信

-   父子页面同域
    -   父页面获取 iframe 子页面的内容(DOM), 进而可以对子页面做更多操作...
        -   主要的两个 API 就是 contentWindow,和 contentDocument
        -   iframe.contentWindow, 获取 iframe 的 window 对象
        -   iframe.contentDocument, 获取 iframe 的 document 对象
        -   更简单的方式是，结合 Name 属性，通过 window 提供的 frames Api 获取, 如下所示
            ```html
            <iframe src="/index.html" id="ifr1" name="ifr1" scrolling="yes">
            	<p>Your browser does not support iframes.</p>
            </iframe>
            <script type="text/javascript">
            	console.log(window.frames['ifr1'].window);
            	console.dir(document.getElementById('ifr1').contentWindow);
            </script>
            ```
    -   iframe 子页面 中获取父级页面内容(DOM), 进而可以对父级页面做更多操作...
        -   window.parent 获取上一级的 window 对象，如果还是 iframe 则是该 iframe 的 window 对象
        -   window.top 获取最顶级容器的 window 对象，即，就是你打开页面的文档
        -   window.self 返回自身 window 的引用
-   父子页面不同域
    -   父页面调用 iframe.contentWindow、iframe.contentDocument 或 window.frames['iframeName'] 会报错
    -   子页面调用 parent、top 会报错
    -   父页面可以 通过设置 iframe 的 src 属性 重定向 iframe 内嵌页面
    -   iframe 内嵌页面可以 通过 js 调用 window.location.href 或者 a 标签 跳转页面
    -   需要父子页面协同的通信方式
        -   主域相同而子域不同：两个文件中分别加上 document.domain = ‘foo.com’,指定相同的主域，然后,两个文档就可以进行交互。
        -   域名完全不同：可以使用 CDM(cross document messaging)进行跨域消息的传递（父子页面需要协同处理）
            -   发送消息: 使用 postmessage 方法
                -   该方法挂载到 window 对象上，即，使用 window.postmessage()调用.
                -   该方法接受两个参数:postMessage(message, targetOrigin):
                    -   message: 就是传递给 iframe 的内容, 通常是 string, 不要直接传 Object, 如果要传 Object 类型信息, 先用 JSON.stringify 转化为字符串
                    -   targetOrigin: 接受你传递消息的域名
            -   接受消息: 监听 message 事件: addEventListener('message', function(){...})
                -   message 提供的 event 对象上有 3 个重要的属性，data,origin,source.
                    -   data：postMessage 传递进来的值
                    -   origin：发送消息的文档所在的域
                    -   source：发送消息文档的 window 对象的代理，如果是来自同一个域，则该对象就是 window，可以使用其所有方法，如果是不同的域，则 window 只能调用 postMessage()方法返回信息

## 三、安全性问题

-   自有网页被第三方利用 iframe 嵌套

    -   防嵌套网页：

        -   因为 iframe 享有着 click 的最优先权，当有人在伪造的主页中进行点击的话，如果点在 iframe 上，则会默认是在操作 iframe 的页面
        -   为了防止网站被钓鱼，可以使用 window.top 来防止你的网页被 iframe

            ```js
            //iframe2.html - 这段代码的主要用途是限定你的网页不能嵌套在任意网页内
            if (window != window.top) {
            	window.top.location.href = correctURL;
            }

            // 如果你想引用同域的框架的话，可以判断域名。
            if (top.location.host != window.location.host) {
            	top.location.href = window.location.href;
            }
            // 如果你网页不同域名的话，上述就会报错。
            // 所以，这里可以使用try...catch...进行错误捕获。如果发生错误，则说明不同域，表示你的页面被盗用了。可能有些浏览器这样写是不会报错，所以需要降级处理
            try {
            	top.location.hostname; //检测是否出错 //如果没有出错，则降级处理
            	if (top.location.hostname != window.location.hostname) {
            		top.location.href = window.location.href;
            	}
            } catch (e) {
            	top.location.href = window.location.href;
            }
            ```

    -   X-Frame-Options
        -   X-Frame-Options 是一个相应头, 主要是描述服务器的网页资源的 iframe 权限
        -   有 3 个选项:
            -   DENY：当前页面不能被嵌套 iframe 里, 即便是在相同域名的页面中嵌套也不允许, 也不允许网页中有嵌套 iframe
            -   SAMEORIGIN：iframe 页面的地址只能为同源域名下的页面
            -   ALLOW-FROM：可以在指定的 origin url 的 iframe 中加载（兼容性较差）
        -   X-Frame-Options 其实就是将前端 js 对 iframe 的把控交给服务器来进行处理
    -   CSP(Content-Security-Policy)
        -   CSP 可以制定 js,css,img 等相关资源的 origin，防止被恶意注入
        -   Iframe 的 CSP 属性兼容性较差（为实验属性, 很多浏览器厂商不支持，例如 safari 不支持）
        -   后端设置 Content-Security-Polic 响应头, 兼容良好
            -   Content-Security-Policy: frame-ancestors # Specifies valid parents that may embed a page using `<frame>`,`<iframe>`, `<object>`, `<embed>`, or `<applet>`. 指定可以 内嵌当前页面 的合法父级域名
            -   其他特性: ......

-   利用 iframe 嵌套第三方页面
    -   sandbox
        -   用来给指定 iframe 设置一个沙盒模型, 限制 iframe 的更多权限, 具体如上述
    -   Content-Security-Policy: frame-src # Specifies valid sources for nested browsing contexts loading using elements such as `<frame>` and `<iframe>`. 指定 iframe 内嵌页面的合法来源, 只能限制当前页面下的 iframe, 如果 iframe 内又有 iframe 则无法限制
    -   多重嵌套（所嵌入的子页面里面也嵌入了 iframe），该如何做好安全防范？如果发现多重嵌套, 可以禁止或删除多重嵌套的 iframe, 与接入方沟通更加规范的接入方式
