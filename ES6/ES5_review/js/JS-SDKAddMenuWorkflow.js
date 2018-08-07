// API.do
// 一定会执行callback(_wrapper),区别在于是否需要初始化_api
this.do = function(callback) {
    console.log(_api);
    return _api ? callback(_wrapper) : _init(callback);
}

_init = function(callback) {
    setTimeout(function() {
        _api = window['clientInterface'] || false;
        callback(_wrapper);
    }, 200);
}

// 从上面可以看出 callback的参数api就是_wrapper = this 指向AndroidClientAPI实例
XRKClientAPI.do(function(api) {
    api.on('onLoginSuccess', function(token) {
        //alert(token);                               
    });
});

// ---------------------------------
// 安卓：默认的监听事件怎么注册的
// _createJsCallbackHandler ---> window[name] = _newJsCallbackFunction(name)
// ---> Event.trigger --->  依赖_handlers里面所注册的东西
// API.on ---> Event.addEventListener ---> 将事件注册到_handlers里



// IOS：_bindJavascriptBridge ---> _api = window.WebViewJavascriptBridge ---> 
// _createJsCallbackHandler ---> _api.registerHandler(name, _newJsCallbackFunction(name))
// _events.trigger('onJSBridgeReady', _wrapper) ---> 
this.addEventListener = function(e, callback) {
    if (_handlers[e] == undefined) {
        _handlers[e] = [];
    }
    if (_handlers[e] && _handlers[e].length >= 0) {
        _handlers[e].push(callback);
    }
}

this.trigger = function() {
    if (arguments.length == 0) {
        return;
    }
    var argus = slice(arguments),
        e = argus.shift(0),
        cbs = _handlers[e];
    if (cbs && cbs.length > 0) {
        each(cbs, function(cb) {
            cb.apply(window, argus);
        });
    }
}

_newJsCallbackFunction = function(name) {
    var h = function() {
        var param = slice(arguments);
        param.unshift(name);
        _events.trigger.apply(window, param);
    }
    return h;
}

this.on = function(event, callback) {
    if (!_events.has(event)) {
        _api.registerHandler(event, _newJsCallbackFunction(event));
    }
    _events.addEventListener(event, callback);
}

function callback() {
    if (typeof window[cb] !== 'undefined')
        window[cb].apply(window, slice(arguments));
}

each(menus, function(m) {
    if (typeof m === 'object' && /^javascript/i.test(m.directUrl)) {
        var matches = m.directUrl.match(/^javascript:(\w+)[(]/);
        if (matches.length == 2) {
            var cb = matches[1];
            _wrapper.on(cb, callback);
        }
    }
});


// OC 触发回调
if ([directUrl hasPrefix:@"javascript:"]) {
    NSString *regexString = @"javascript:(\\w+)\\(";
    NSString *jsMethod = [directUrl stringByMatching:regexString capture:1L];
    [self.bridge callHandler:jsMethod data:nil responseCallback:nil];
}

// --------------------------------
// Android的addLeftNavItems实现 --- Android端新的调用方式
// 模仿IOS的registerHandler\callHander
// 这里关键是要了解clientInterface.invoke的机制了

_callHandler = function(handler, data, callback) {
    // invoke(String method, String data, String callback)
    _api.invoke(handler,
        typeof data === 'string' ? data : (data === null ? "" : JSON.stringify(data)),
        _registerHandler(_newJsCallbackToken(), callback)); // callback undefined
}

_registerHandler = function(handler, fn) {
    if (handler == null) {
        handler = _newJsCallbackToken();
    }
    // 会把回调暴露到全局里
    window[handler] = typeof fn === 'function' ? fn : _defaultHandler;
    return handler;
},

_newJsCallbackToken = function() {
    return "xrkcallback_" + (_JsCallbackIndex++);
}

this.on = function(event, callback) {
    _events.addEventListener(event, callback);
}

function callback() {
    if (typeof window[cb] !== 'undefined')
        window[cb].apply(window, slice(arguments));
}

this.addLeftNavItems = function(items) {
    //将回调方法注册到回调队列中 --- 所以对于安卓来说，这段是没用的
    each(items, function(m) {
        if (typeof m === 'object' && /^javascript/i.test(m.directUrl)) {
            var matches = m.directUrl.match(/^javascript:(\w+)[(]/);
            if (matches.length == 2) {
                var cb = matches[1];
                _wrapper.on(cb, callback);  // cbname cbbody 存到Event对象里
            }
        }
    });
    _wrapper.callHandler('addLeftNavItems', items);
}

// Android 触发回调
private void dealWebViewSkip(XRKJSBridge jsBridge, String directUrl) {
    if(directUrl.startWith("javascript:")){
        if(jsBridge.isWebViewIsPermit())
            jsBridge.getWebView().loadUrl(directUrl);
    }else{
        removeAllMenu(jsBridge);
        Router.create(jsBridge.getContext(), directUrl).open();
    }
}



// PPT --- 
// 关键对象
// 1. 事件管理对象Event
// 2. Android系统的API接口实现对象 - invoke, Android新的交互方式
// 3. iOS系统的接口实现对象 - 简介WebViewJavascriptBridge
// 4. 扩展接口对象


// 几个比较有代表性的事件演示
// 1. 监听事件
// 2. 调用接口
// 3. addMenu
// 4. addLeftNavItems
// 5. createSelector