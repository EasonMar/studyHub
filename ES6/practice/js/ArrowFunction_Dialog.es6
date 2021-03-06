let html = `
	<style type="text/css">
	    .gb-black-mask{
	        position: fixed;
	        top: 0;
	        left: 0;
	        width: 100%;
	        height: 100%;
	        background: rgba(0,0,0,.5);
	    }
	    .common-dialog{
	        position: fixed;
	        top: 50%;
	        left: 50%;
	        transform: translateX(-50%) translateY(200%);
	        width: 50%;
	        height: 40px;
	    }
	    .common-dialog input{
	        position: absolute;
	        left: 0;
	        top: 0;
	        width: 100%;
	        height: 100%;
	        -webkit-appearance: none;
	        background: #999;
	    }
	</style>
	<p style="font-size: 90px;margin: 70% 0;font-weight: bold;text-align: center;">Arrow Function Practice</p>`;

$('body').append(html);


// practice_one:Dialog
/*
	function Dialog(html) {
        this.html = html;
        this.id = 'dialog' + Math.ceil(Math.random() * 1000000000);
    }

    Dialog.prototype = {
        init: function() {
            var html = ''
                    + '<div id="'+ this.id +'" class="common-dialog">'
                    +   this.html
                    + '</div>'
                    + '<div id="'+ this.id +'-mask" class="gb-black-mask gb-show"></div>'
            $('body').append(html);
            this.initMaskEvent();
            return this;
        },
        find: function(string) {
            return $('#'+this.id).find(string);
        },
        main: function() {
            return $('#'+this.id);
        },
        mask: function() {
            return $('#'+this.id+'-mask');
        },
        initMaskEvent: function() {
            var _this = this;
            this.mask().tap(function() {
                _this.destroy();
            }, false);
            this.mask().on('touchstart', function() {
                // 阻止事件冒泡
                return false;
            });
        },
        destroy: function() {
            // var _this = this;
            if( $('#'+this.id).length > 0 ) {
                // $.each(_this.find('input'), function(index, value) {
                $.each(this.find('input'), function(index, value) {  // 这里的this还是指向Dialog
                    value.blur();
                });
                $('#'+this.id).remove();
                $('#'+this.id+'-mask').remove();
            }
            return this;
        }
    };
 */

function Dialog(html){
	this.html = html;
    this.id = 'dialog' + Math.ceil(Math.random() * 1000000000);
}

// 由于箭头函数不可以当作构造函数,也就是说,不可以使用new命令,否则会抛出一个错误。
// 正是因为箭头函数没有自己的this,所以也就不能用作构造函数.
// var Dialog = html =>{
// 	this.html = html;
//     this.id = 'dialog' + Math.ceil(Math.random() * 1000000000);
// }

Dialog.prototype = {
    init () {
        var html = ''
                 + '<div id="'+ this.id +'" class="common-dialog">'
                 +   this.html
                 + '</div>'
                 + '<div id="'+ this.id +'-mask" class="gb-black-mask gb-show"></div>'
        $('body').append(html);
        this.initMaskEvent();
        console.log(this);  // Dialog {html: "<input type="text" name="aaa" id="bbb">", id: "dialog893405663"}
        return this;
    },
    find (string) {
        return $('#'+this.id).find(string);
    },
    main () {
        return $('#'+this.id);
    },
    mask () {
        return $('#'+this.id+'-mask');
    },
    initMaskEvent () {
        this.mask().tap(()=>this.destroy(), false); // 这里tap后面的this指向Dialog,与一开始的this相同.
        // this.mask().tap(this.destroy, false);  // ==== 注意：这里tap后面的this指向mask
        this.mask().on('touchstart', ()=>false);
    },
    destroy () {
        if( $('#'+this.id).length > 0 ) {
            $.each(this.find('input'), (index,value) =>{value.blur()},console.log(this));
            $('#'+this.id).remove();
            $('#'+this.id+'-mask').remove();
        }
        return this; // 返回this是为了可以链式操作
    }
};

var dlg = new Dialog('<input type="text" name="aaa" id="bbb">');
dlg.init();

/*
Dialog.prototype = {
    init: () => {
        var html = '' + '<div id="' + this.id + '" class="common-dialog">' + this.html + '</div>' + '<div id="' + this.id + '-mask" class="gb-black-mask gb-show"></div>'
        $('body').append(html);
        // this.initMaskEvent(); // ===== 报错: this.initMaskEvent is not a function
        console.log(this);       // ===== 因为this指向window？为何？因为它的作用域处在{}的第一层,与init:同层
        return this;             // ===== 箭头函数根本没有自己的this,导致内部的this就是外层代码块的this.
    },
    find: (string) => $('#' + this.id).find(string),
    main: () => $('#' + this.id),
    mask: () => $('#' + this.id + '-mask'),
    initMaskEvent: () => {
        this.mask().tap(() => this.destroy(), false);
        this.mask().on('touchstart', () => false);
    },
    destroy: () => {
        if ($('#' + this.id).length > 0) {
            $.each(this.find('input'), (index, value) => {value.blur()}, console.log("www:"+this));
            // $('#'+this.id).remove();
            // $('#'+this.id+'-mask').remove();
        }
        return this;
    }
};

*/