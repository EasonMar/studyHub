// 仅仅使用到了类的封装和继承
// 遵循一些重要原则

// 表现层和逻辑层分离
// 单一职责
// 可扩展


// 表格渲染、冻结、事件绑定
class Table{
    constructor(fixedColumns, dataIndex){
        console.log('构造函数');
        this.fixedColumns = fixedColumns || 2; // 冻结的列数，默认为2
        this.dataIndex = dataIndex || 0; // 渲染的利益档位，默认为第一档

        // 内部私有变量 --- 有些不符合 封闭开放原则. 如果后续又有个什么东西，可能里面的私有变量还得增加
        this.wrapperHtml = '';  // 利益演示表档位按钮html
        this.tableHtml = '';    // 表格html
        this.specialClass = ''; // 特殊类名，用于特殊样式：例如多维度利益演示表
        this.bottomLineHtml = '';  // 如果有档位的时候, 可能会需要加一条下划线
    }

    // 关键逻辑 - 通用 - 渲染表格框架
    renderTable(){
        console.log('渲染表格');

        let frameworkHtml = 
        `<div id="interests-box" class="interests-box ${this.specialClass}">
            <div class="interests-head">
                <div class="title">
                    <p class="title-main">保障利益演示</p>
                    ${this.bottomLineHtml}
                </div>
                ${this.wrapperHtml}
                <div class="box-close"></div>
            </div>
            <div class="interests-table">
                <div class="col-cover"> 
                    <div class="acid"></div> 
                </div> 
                ${this.tableHtml}
            </div>
        </div>
        <div id="interests-mask" class="gb-mask interests-show"></div>`;
        $(document.body).append(frameworkHtml);
    }

    // 关键逻辑 - 通用 - 渲染表格内容
    buildTable(){
        console.log('构建表格')

        var _this = this;
        _this.tableHtml = 
        `<table class="fancyTable" id="myTable" cellpadding="0" cellspacing="0">
            <thead>
                <tr><th>保单年度</th><th>年末年龄</th>
                ${window.bonus[0].list.map(v => `<th>${v.title}</th>`).join('')}
            </thead>
            <tbody>
                ${window.bonus.map((v,i)=>`<tr>
                    <td>${i + 1}</td><td>${v.age}</td>
                    ${v.list.map(_v=>{
                        var value = _v.values[_this.dataIndex];
                        if(/^(\S+)_(.+)$/.test(value)){
                            return `<td class="${RegExp.$2}">${RegExp.$1}</td>`
                        }else {
                            return `<td>${value}</td>`
                        }
                    }).join('')}
                </tr>`).join('')}
            </tbody>
        </table>`
    }
    
    // 关键逻辑 - 通用 - 冻结窗格
    freezeTable(){
        console.log('执行冻结表格');
        $('#myTable').fixedHeaderTable({
            footer: false,
            fixedColumns: this.fixedColumns
        });
    }

    // 关键逻辑 - 通用 - 基本的事件绑定
    eventBind(){
        console.log('绑定表格事件');
        var _this = this;
        // 点击关闭按钮、遮罩层,删除当前弹层
        $('#interests-mask, #interests-box .box-close').tap(function() {
            $('#interests-box').remove();
            $('#interests-mask').remove();
        }, false);

        // hack：阻止事件冒泡 --- 解决了点透、滑透问题
        $('#interests-mask').on('touchstart', function() {return false});

        // 阻止默认事件 - 滑动table时仅允许列表滑动,底部页面禁止滑动  --- 可以改为scroll_over的写法
        $('.interests-head, .fht-thead')
            .on('touchmove', function(e) { e.preventDefault() });
        $('.fancyTable').eq(1)
            .on('touchmove', function(e) { e.preventDefault() });

        // 绑定滚动事件
        if(this.initArrow()){
            // 在.fht-tbody上绑定scroll事件
            $('#myTable').parent().scroll(function() {
                _this.initArrow();
            });
        }

        // 档位切换事件
        this.shiftLevel();
    }

    // helper - 初始化指示箭头状态
    initArrow(){
        var tab = $('#myTable'),
            tabW = tab.width(),
            winW = window.innerWidth;
        // 视窗宽度 ≥ 表格宽度
        if (winW >= tabW) {
            $('.col-cover').addClass('none');
            return false;
        }
        var scroW = tab.parent().scrollLeft();
        // 表格宽度 - 视窗宽度 > 表格父元素(.fht-tbody)左边界和窗口中目前可见内容的最左端之间的距离
        // 当表格移动到最右端时,tabW = winW + scroW(.fht-tbody的scrollLeft); 给20px的冗余量,避免只有触底才移除提示箭头.
        if (tabW - winW > scroW + 20) {
            $('.col-cover').removeClass('none');
            return true;
        } else {
            $('.col-cover').addClass('none');
            return false;
        }
    }

    // 关键逻辑 - 特殊样式
    specialStyle(){
        console.log('特殊样式处理')
    }

    // 关键逻辑 - 切换档位
    shiftLevel(){
        console.log('切换档位')
    }

    // helper - 根据档位重新渲染利益数据
    reRender(index){
        var _this = this;
        // this.fixedColumns是人为组装的被冻结的列 - 所以一行总共有step = list.length + fixedColums 列
        var step = window.bonus[0].list.length + this.fixedColumns; 
        var tableData = $('#myTable td');
        window.bonus.map((val,idx) => {
            val.list.map((v,i)=>{
                // step*idx负责定位每一行第一列元素是第几个td
                // i + _this.fixedColums用于跳过前面被冻结的td ( 这个部分是人为重新组装的，不在val.list内 )
                tableData.eq(step*idx + i + _this.fixedColumns)
                         .text(v.values[index])
            })
        })
    }

    // 关键逻辑 - 一些hack的东西放这里
    hacker(){
        console.log('一些hack的鬼东西')
    }

    // 启动利益演示表构建 - 有可能会有定制化的东西
    start(){
        this.buildTable();
        this.renderTable();
        this.freezeTable();
        this.specialStyle();
        this.eventBind();
        this.hacker();
    }
}

// 换个思路，数据处理另外做
// 渲染就只管渲染，不要掺杂数据处理工作

// 数据处理
// 1. 标记万能账户价值为负数的年份：数据为负数，直接设为'--'
// 如果万能账户价值已经为'--'了,则后面跟着的生存总利益/身故总利益(领取前)/(领取后)也要变为'--'
// 2. 寻找需要重点标注的td：生存利益首次大于所交保费总额 的位置
class Data{
    constructor(length){
        // 需要重点关注的数据对象
        this.focusDataPosition = {
            baseDataColumn: -1, // 所交总保费 所在列
            targetColumn: -1,   // 生存总利益|生存总利益(未领取) 所在列
            haveFound: new Array(length).fill(false), // 各档位是否找到 生存利益首次大于所交保费总额 的位置
            accountValue: -1,   // 万能账户价值 所在列
            toDoWithAccountValue: [] // 受万能账户影响的 生存总利益(领取前/领取后)/身故总利益(领取前/领取后) 所在列
        }
        this.keyDataLessThanZero = false;
        this.dataAfterHandle = '';
    }

    // 寻找需要重点关注的信息
    findFocusDataColumn(){
        console.log('查找所交总保费所在列、以及“生存总利益”或“生存总利益(未领取)”所在列、用途所在列')
        var _this = this;
        window.bonus[0].list.forEach(function(v,i){
            // 代码要兼顾优雅、简洁和可读性
            switch(v.title){
                case '所交总保费':
                    _this.focusDataPosition.baseDataColumn = i;
                    break;
                case '生存总利益':
                case '生存总利益(未领取)':
                    _this.focusDataPosition.targetColumn = i;
                    break;
                default:
                    break;
            }

            // 万能账户价值 也可能叫 账户价值
            if(/账户价值/.test(v.title)){
                _this.focusDataPosition.accountValue = i;
            }else if(/生存总利益|身故总利益/.test(v.title)){
                // 生存总利益(领取前/领取后)/身故总利益(领取前/领取后) 所在列通通推送进数组内
                _this.focusDataPosition.toDoWithAccountValue.push(i);
            }
        })
    }

    handle(){
        console.log('把数据小于0的值给和谐了,用途栏不需要处理')
        console.log('查找那些需要突出显示的数据("生存总利益" 首次大于 "所交总保费" 的位置)，并标记')
        console.log('如果万能账户价值已经为"--"了,则后面跟着的生存总利益(领取前/领取后)/身故总利益(领取前/领取后)也要变为"--"')
        
        var _this = this;
        _this.findFocusDataColumn();

        var { baseDataColumn,targetColumn,haveFound,accountValue,toDoWithAccountValue } = _this.focusDataPosition;
       
        // forEach：continue -> return true、break -> return false
        window.bonus.forEach(function(v,i){ // 行
            v.list.forEach(function(val,j){ // 列

                // 把数据小于0的值给和谐了 - 用途栏不需要
                if(val.title != '用途'){
                    val.values = _this.dataLessThenZeroTransform(val.values);
                }else{
                    // 用途 - 突出显示
                    val.values = val.values.map(item => {
                        if(item){
                            return item+'_purpose'
                        }else{
                            return item
                        }  
                    })
                }

                // 关注的数据 - 标记一下
                if(baseDataColumn > -1 && targetColumn == j && haveFound.indexOf(false) != -1){
                    val.values = val.values.map(function(item,index){
                        if(haveFound[index] == false && item > v.list[baseDataColumn].values[index]){
                            haveFound[index] = true;
                            return item + '_emphasize';
                        }else{
                            return item;
                        }
                    })
                }

                // 处理 万能账户价值 和 生存总利益(领取前/领取后)/身故总利益(领取前/领取后) 的关系
                if(/账户价值/.test(val.title)){
                    val.values.map((item,index) => {
                        if(item == '--'){
                            toDoWithAccountValue.map(related=>{
                                v.list[related].values[index] = '--';
                            })
                        }
                    })
                }
            })
        });
    }

    // 把小于零的数据变成其他形式
    dataLessThenZeroTransform(arr, other){
        var _other = other || '--'
        return arr.map(function(item){
            if(item >= 0){
                return item;
            }else{
                return _other;
            }
        })
    }
}

// 表格一 - 单一档位、单一维度
class OnlyOneBonusTable extends Table{
    constructor(fixedColumns, dataIndex){
        super(fixedColumns, dataIndex);
    }

    specialStyle(){
        $("#interests-box").addClass('onlyLevel');
    }
}

// 表格二 - 多档位、单一维度
class MultiBonusLevelTable extends Table{
    constructor(fixedColumns, dataIndex){
        super(fixedColumns, dataIndex);

        console.log(`构造函数里面多了些特殊的html结构`);
        this.bottomLineHtml = `<div class="bottom-line"></div>`;
        // 获取外层页面中的档位按钮html放到这里
        this.wrapperHtml = `<div class="demo-wrap">${$('.demo-btns')[0].outerHTML}</div>`
    }

    // 切换档位 事件绑定
    shiftLevel(){
        console.log('多档位、单一维度 切换表格档位事件绑定')
        var _this = this;
        var selector = '#interests-box .btn-container div';
        var $btns = $(selector);
        $btns.tap(function(){
            var $this = $(this)
            var index = $this.index(selector);
            if($this.hasClass('active')){
                return false
            }else{
                $btns.attr('class', 'btn');
                $this.attr('class', 'active color_bg');
                _this.reRender(index);
            }
        },false)
    }
}

// 表格三 - 多档位、单一维度、有分红和万能险 --- 这种场景线上貌似不常见了，先不理会，有就再加上即可
class MultiBonusLevelTableFenWan extends MultiBonusLevelTable{
    constructor(fixedColumns, dataIndex){
        super(fixedColumns, dataIndex)
    }
}

// 表格四 - 多维度表格
class MultiLevelTable extends Table{
    constructor(fixedColumns, dataIndex){
        super(fixedColumns, dataIndex);

        console.log(`多维度表格，多了些特殊的html结构 和 配置`);

        this.specialClass = 'multiLevel';
    }

    // helper - 构建利益演示按钮
    buildBtnHtml(){
        let bonusBtnContent = ['低','中','高'];
        let rateBtnContent = ['保证','中档','高档'];

        let bonusIndex = this.pageBtnSelect()[0];
        let rateIndex = this.pageBtnSelect()[1];

        let bonusBtn = bonusBtnContent.map((v,i) => 
            `<div class="btn-container">
                <div class="${i == bonusIndex ? 'active color_bg' : 'btn'}">${v}档</div>
            </div>`
        )

        let rateBtn = rateBtnContent.map((v,i) => 
            `<div class="btn-container">
                <div class="${i == rateIndex ? 'active color_bg' : 'btn'}">${v}利率</div>
            </div>`
        )

        this.wrapperHtml = `
            <div class="demo-wrap">
                <div class="demo-btns bonus">
                    <div class="btn-bonus">选择分红水平</div>
                    ${bonusBtn.join('')}
                </div>
                <div class="demo-btns rate">
                    <div class="btn-rate">选择万能账户<br/>假定结算利率</div>
                    ${rateBtn.join('')}
                </div>
            </div>`;
    }

    // helper - 页面档位按钮选择情况 - '分红档位+利率档位'选择情况的字符串构成
    pageBtnSelect(){
        // return $('.demo-bonus').val() + $('.demo-rate').val().toString();
        return '21';
    }

    // helper - 弹窗档位按钮选择情况 - '分红档位+利率档位'选择情况的字符串构成
    dialogBtnSelect(){
        return $(".bonus").find('.active').parent().index('.bonus .btn-container').toString() +
                $(".rate").find('.active').parent().index('.rate .btn-container');
    }

    // helper - 根据档位按钮选择情况 - 映射出当前档位利益演示数据所在位置
    correspondLevel(){
        // 根据演示指数映射出演示档位
        let levelHook = ['00', '11', '22', '01', '02', '10', '12', '20', '21', '03', '13', '23']; // 03、13、23：低中高档分红+自定义利率
        let index = levelHook.indexOf(this.dialogBtnSelect());
        return index === -1 ? 8 : index; // 默认'21'显示高档分红+中等结算利率
    }

    // 重写父类的renderTable方法，因为renderTable之前需要把wrapperHtml处理好
    renderTable(){
        console.log('重写父类的renderTable方法');
        this.buildBtnHtml();

        // 父类原先的renderTable方法
        super.renderTable();
    }

    // 切换档位 事件绑定
    shiftLevel(){
        console.log('多维度表格 切换表格档位事件绑定')
        var _this = this;
        var selector = '#interests-box .btn-container div';
        var $btns = $(selector);
        $btns.tap(function(){
            var $this = $(this)
            if($this.hasClass('active')){
                return false
            }else{
                $this.closest('.demo-btns').find('.btn-container div').attr('class', 'btn')
                $this.attr('class', 'active color_bg');

                var btnSelected = _this.dialogBtnSelect();
                var index = _this.correspondLevel(btnSelected);
                _this.reRender(index);
            }
        },false)
    }
}

+function(){
    var data = new Data(window.bonus[0].list[0].values.length);
    data.handle();
    // var table = new OnlyOneBonusTable();
    // var table = new MultiBonusLevelTable();
    var table = new MultiLevelTable();
    table.start();
}();