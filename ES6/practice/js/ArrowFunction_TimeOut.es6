let html = `
<style>
	body{
	    min-height: 500px;
	}
	.intro-bg {
	    display: none;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    position: fixed;
	    opacity: 0.7;
	    z-index: 999;
	    background-color: #000;
	    -webkit-transition: all 0.3s ease-out;
	    transition: all 0.3s ease-out;
	}

	.account-bind,
	.sorry {
	    display: none;
	    position: fixed;
	    top: 50%;
	    left: 50%;
	    -webkit-transform: translateX(-50%) translateY(-60%);
	    width: 82%;
	    min-width: 280px;
	    max-width: 360px;
	    border-radius: 5px;
	    -webkit-border-radius: 5px;
	    color: #000;
	    z-index: 999999;
	    background: #fff;
	    overflow: hidden;
	}

	.bildmobilebox {
	    background-color: #fff;
	    padding: 22px 22px 14px;
	    position: relative;
	}

	.bildmobilebox p {
	    margin-top: 12px;
	    font-size: 14px;
	    line-height: 24px;
	    color: #686869;
	    padding: 0px 8px;
	}

	.bildmobilebox h3 {
	    padding: 0px 8px;
	    font-weight: bold;
	}

	.close {
	    position: absolute;
	    top: 10px;
	    right: 10px;
	    width: 22px;
	    height: 22px;
	    background: url(https://assets.xrkcdn.com/frontend-m/bxr_events/2017/Apr_fanli/static/cdn/images/close_5f8a1d5.png) no-repeat;
	    -webkit-background-size: cover;
	    background-size: cover;
	    cursor: pointer;
	}

	.btnbox .btnsubmit {
	    display: block;
	    width: 100%;
	    border: none;
	    background-color: #00aaff;
	    line-height: 48px;
	    height: 48px;
	    font-size: 18px;
	    text-align: center;
	    color: #fff;
	    cursor: pointer;
	}

	.formbox {
	    background-color: #fff;
	}

	.formbox ul li {
	    position: relative;
	    border-top: 1px solid #f2f2f2;
	    margin: 0px 22px;
	}

	.formbox ul li .box .btnsendcode {
	    position: absolute;
	    right: 8px;
	    top: 50%;
	    margin-top: -18px;
	    background-color: #ff6430;
	    color: #fff;
	    line-height: 36px;
	    font-size: 14px;
	    padding: 0 12px;
	    border-radius: 4px;
	    -webkit-border-radius: 4px;
	    -moz-border-radius: 4px;
        cursor: pointer;
	}

	.formbox ul li input[type=text],
	.formbox ul li input[type=tel],
	.formbox ul li input[type=date],
	.formbox ul li input[type=password],
	.formbox ul li input[type=email] {
	    display: block;
	    width: 100%;
	    background: none;
	    border: none;
	    line-height: 24px;
	    font-size: 16px;
	    padding: 12px 8px;
	    margin: 0;
	    color: #333;
	}

	.formbox ul li input[type=text] {
	    padding: 20px 0px 20px 8px;
	}

	 ::-webkit-input-placeholder {
	    font-family: STHeiti, Microsoft YaHei, Tahoma, Geneva, sans-serif;
	    font-size: 14px;
	}

	/* 提高theme.alert弹窗的层级 */
	.verify_alert-container {
	    z-index: 999999!important;
	}


	/* 失败弹层 */
	.sorry {
	    text-align: center;
	    padding-bottom: 20px
	}

	.sorry img {
	    display: block;
	    margin: 20px auto;
	    width: 30%;
	}

	.timeBtn{
	    width: 200px;
	    height: 80px;
	    line-height: 80px;
	    text-align: center;
	    font-size: 30px;
	    color: #fff;
	    border-radius: 10px;
	    font-weight: bold;
	    background: #d90c0c;
	    margin: 100px auto 0;
	    cursor: pointer;
	}
</style>
<div class="timeBtn">Dialog</div>
<div class="intro-bg"></div>
<div class="account-bind">
    <div class="bildmobilebox">
        <h3>领取新人大礼包</h3>
        <p>请验证您的手机号码</p>
        <div class="close"></div>
    </div>
    <form id="bindForm" action="/users/bindMobile" onsubmit="formsubmit();return false">
        <div class="formbox">
            <ul>
                <li>
                    <div class="box">
                        <input name="phone" type="tel" verify_type="phone" placeholder="请输入手机号码" value="">
                    </div>
                </li>
                <li>
                    <div class="box" style="padding-right:140px;">
                        <input name="code" type="text" verify_type="num" placeholder="请输入验证码" value="" verify_name="验证码">
                        <span class="btnsendcode" id="btn">发送验证码</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="btnbox">
            <a class="btnsubmit" id="btnsubmit" style="background:#ff6430">马上领取</a>
        </div>
    </form>
</div>
<div class="sorry">
    <div class="bildmobilebox">
        <div class="close"></div>
        <h3>抱歉</h3>
        <p>新人大礼包仅针对新注册用户发放</p>
    </div>
</div>`;

$('body').append(html);

/*    
    var timer = 0; 
    function callbind() {
        // 弹窗后禁止页面滑动
        $('body').bind('touchmove', function(e) {
            e.preventDefault();
        });
        $('.account-bind').show();
        $('.intro-bg').show();
    }
    // 失败弹层
    function failbind(text){
        $('.account-bind').hide();
        $('.sorry p').html(text);
        $('.sorry').show();
    }
    // 成功绑定
    function closebind() {
        $('body').unbind('touchmove');
        $('.account-bind').hide();
        $('.intro-bg').hide();
        // 领取新人大礼包
        ACT.showGift();
        window._btype = true; // 设置全局_btype为已绑;
    }
    // 初始化倒计时：init为true时,初始化所有参数、文案;否则视为重新发送
    function resetCodeTime(init){
        clearTimeout(timer);
        $('.btnsendcode').removeClass('active');
        if (init) {
            $('.btnsendcode').html('发送验证码');
        }else{
            $('.btnsendcode').html('重新发送');
        }
    }
    // 提交表单
    $('#btnsubmit').on_tap(function() {
        // 使输入框失焦(避免光标/键盘存留)
        $('input[name="code"]').get(0).blur();
        $('#bindForm').submit();
    }, false);
    // 提交表单
    function formsubmit() {
        lo.verify("#bindForm", function(res) {
            // 提交表单接口
            $.lo_post(window.location.href, {
                mobile: res.phone,
                code: res.code,
                source: 'act_coupons_act20161222'
            }, function(data) {
                if (data.code == 200) {
                    closebind();
                } else if (data.code == 40000005) {
                    theme.alert(data.msg); // 验证码输入错误
                    $('.btnsendcode').html()=='发送验证码' ? resetCodeTime(true) : resetCodeTime(false);
                } else {
                    failbind(data.msg);
                    resetCodeTime(true);
                }
            });
        });
    }
    // 倒计时
    function codeSetTime() {
       var code = $('.btnsendcode');
       code.addClass('active');
       var countdown = 120;
       function settime(code) {
           if (countdown == 0) {
               code.html("重新发送");
               code.removeClass('active');
               countdown = 120;
               return;
           } else {
               code.html(countdown + "s后重新发送");
               countdown--;
           }
           timer = setTimeout(function() { 
               settime(code);
           }, 1000)
       }
       settime(code);
    }
    // 发送验证码
    $('.btnsendcode').on_tap(function() {
        if ($(this).hasClass('active')) {
            return false;
        }
        $('input[name="code"]').removeAttr('verify_type'); // 先删除code的verify_type,使得发送验证码时lo.verify不用验证code这一项！
        lo.verify("#bindForm", function(res) {
            $('input[name="code"]').attr('verify_type', 'num');
            // 请求验证码接口
            $.lo_post(window.location.href, {mobile: $('[name=phone]').val(), codeType: 1}, function(data) {
                // 使输入框失焦(避免光标/键盘存留)
                $('[type=tel]')[0].blur();
                if (data.code == 40000004) {
                    // 需要图形验证码
                    theme.choose({
                        word: ACT.verifymsg(),
                        ok: ACT.verifyFn,
                        cancel: function() {
                            $('.btnsendcode').removeAttr("active");
                        },
                        preventDefault: false
                    });
                } else if (data.code == 200) {
                    codeSetTime();
                } else {
                    failbind(data.msg);
                }
            });
        });
    }, false);
*/

let timer = 0;
let callbind = () => {
    $('body').bind('touchmove', (e) => e.preventDefault());
    $('.account-bind').show();
    $('.intro-bg').show();
}
let failbind = (text) => {
    $('.account-bind').hide();
    $('.sorry p').html(text);
    $('.sorry').show();
}
let closebind = () => {
    $('body').unbind('touchmove');
    $('.account-bind').hide();
    $('.intro-bg').hide();
    window._btype = true;
}
// 初始化倒计时：init为true时,初始化所有参数、文案;否则视为重新发送
let resetCodeTime = (init) => {
    clearTimeout(timer);
    $('.btnsendcode').removeClass('active');
    console.log(init);
    if (init) $('.btnsendcode').html('发送验证码');
    else $('.btnsendcode').html('重新发送');
}
// 倒计时
let codeSetTime = () => {
    let code = $('.btnsendcode');
    code.addClass('active');
    let countdown = 10;
    let settime = (code) => {
        if (countdown == 0) {
            code.html("重新发送");
            code.removeClass('active');
            countdown = 120;
            return false;
        } else {
            code.html(countdown + "s后重新发送");
            countdown--;
        }
        timer = setTimeout(settime, 1000, code);
    }
    settime(code);
}

let formsubmit = () => {
    lo.verify("#bindForm", (res) => {
        failbind('就是不给你,咬我啊');
        resetCodeTime(true);
    });
}

$('.timeBtn').tap(callbind, false);

$('.btnsendcode').on_tap(() => {
    // if ($(this).hasClass('active')) return false;
    // console.log(this);  // window --- 所以绑定事件里的回调函数还是使用function比较方便.

    if ($('.btnsendcode').hasClass('active')) return false;
    // 先删除code的verify_type,使得发送验证码时lo.verify不用验证code这一项！
    $('input[name="code"]').removeAttr('verify_type'); 
    lo.verify("#bindForm", (res) => {
        $('input[name="code"]').attr('verify_type', 'num');
        codeSetTime();
    });
}, false);

$('#btnsubmit').on_tap(() => {
    $('input[name="code"]').get(0).blur();
    $('#bindForm').submit();
}, false);

$('.close').tap(() =>{
    $('.account-bind').hide();
    $('.intro-bg').hide();
    $('.sorry').hide();
},false);