theme.img_onload.set(__inline('../images/200.jpg'), "#83b425", "#83b425", "#83b425", false);
// 建议将需要加载页面的html的opacity设置为0，因为以上方法执行后,"会自动将html的opacity设置为1 ！！",用于防止页面跳动。

window.shareData = {
    "imgUrl": __uri('../images/200.jpg'),
    "link": "https://bxr.im/events/html/2017/Apr_fanli/html/share.html",
    "desc": "0元获得莫斯利安酸奶、充电宝，立即打开查看！",
    "title": "邀请您一起领取免费福利",
    "platforms": "weixin|weixin_circle|qq|qzone",
    "success": () => null
}

window.INDEX = {
    init() {
        theme.img_onload.enter();
        INDEX.events();
    },
    events() {
        let token = lo.urlSearch('token') || '';
        $('.reward_1, .reward_2').tap(function() {
            // 判断登录状态 - 未登录跳到登录状态
            let e_id = '', toUrl = 'float';
            this.className.indexOf('1') > -1 ? e_id = 'milk_click_get' : e_id = 'yddy_click_get';
            if (!!token) {
                // 跳到活动页面
                toUrl = $(this).data('href');
                setTimeout(() => {window.location.href = toUrl}, 500);
            }else{
                XRKClientAPI.do(function(api){api.goLogin()});
            }

            new_event_ga({
                "event_id": e_id,
                "id": "",
                "type": "",
                "product_type": "app",
                "to": toUrl
            });
        }, false);

        // 邀请好友 - 分享
        $('.btn').tap(function() {
            if(lo.browser.vs.isApp){
                XRKClientAPI.do(function(api){
                    api.doShare(shareData.imgUrl, shareData.link, shareData.title, shareData.desc,"weixin|weixin_circle|qq|qzone");
                });
            }else{
                theme.alert('此操作需要在app内进行')
            }
            new_event_ga({
                "event_id": "invite_friend",
                "id": "",
                "type": "",
                "product_type": "app",
                "to": "float"
            })
        }, false);
    }
}

window.SHARE = {
    vars: {
        isTencent: false
    },
    init: function() {
        theme.img_onload.enter();
        let u = navigator.userAgent;

        // QQ浏览器不支持直接打开app
        if (lo.browser.vs.weixin || u.indexOf('QQ/') > -1 || u.indexOf('MQQBrowser') > -1) {
            SHARE.vars.isTencent = true;
        }

        // 微信分享
        if (lo.browser.vs.weixin) {
            lo.xrk_wx.data.imgUrl = shareData.imgUrl;
            lo.xrk_wx.data.link = shareData.link;
            lo.xrk_wx.data.desc = shareData.desc;
            lo.xrk_wx.data.title = shareData.title;
            lo.xrk_wx.data.success = shareData.success;
            lo.xrk_wx.get("bxr");
        }

        SHARE.events();
    },
    events: function() {
        $('.reward_1, .reward_2').tap(function() {
            let e_id = '', toUrl = '';
            this.className.indexOf('1') > -1 ?  e_id = 'milk_click_get': e_id = 'yddy_click_get';
            if (SHARE.vars.isTencent) {
                theme.alert('请使用系统浏览器打开此页面');
            } else {
                toUrl = 'https://bxr.im/events/html/2017/Apr_fanli/html/go.html';
                new_event_ga({
                    "event_id": e_id,
                    "id": "",
                    "type": "",
                    "product_type": "app",
                    "to": toUrl
                })
                setTimeout(() => {window.location.href = toUrl},500);
            }
            
        });
    }
}

// 注意前面的';'
;(function(){
    // 规则
    $('.rule').tap(() => {
        $('.rule-detail').show();
        $('.cover').show();
    });

    $('.rule-detail .close').tap(() => {
        $('.rule-detail').hide();
        $('.cover').hide();
    });
})();