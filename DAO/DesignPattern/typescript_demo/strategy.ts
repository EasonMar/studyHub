// 策略模式实现 - 商场促销项目

// 抽象类 - 收银台
abstract class CashSuper {
    abstract acceptCash(money: number): number;
}

// 具体收银策略
class CashNormal extends CashSuper {
    acceptCash(money: number): number{
        return money;
    }
}

class CashReturn extends CashSuper {
    private moneyCondition:number = 0.0;
    private moneyReturn:number = 0.0;

    constructor(moneyCondition: string,moneyReturn: string){
        super(); // 派生类的构造函数必须包含super调用
        this.moneyCondition = parseFloat(moneyCondition);
        this.moneyReturn = parseFloat(moneyReturn)
    }

    acceptCash(money: number): number{
        let result: number = money;
        if (money >= this.moneyCondition){
            result=money- Math.floor(money / this.moneyCondition) * this.moneyReturn;
        }
        return result;
    }
}

class CashRebate extends CashSuper {
    private moneyRebate: number = 1;

    constructor(moneyRebate: string){
        super();
        this.moneyRebate = parseFloat(moneyRebate);
    }

    acceptCash(money: number): number{
        return money * this.moneyRebate;
    } 
}

// 策略上下文 - 用以设置具体采用的策略
class CashContext {
    // 承载具体策略的私有属性
    private cs:CashSuper

    // 构造函数 获取具体策略
    constructor(csuper: CashSuper){
        this.cs = csuper;
    }

    // 调用具体策略的方法
    GetResult(money: number): number{
        return this.cs.acceptCash(money);
    }
}

// 客户端代码
function strategy_program(price: string, num: string, strategy: string):void{
    let cc: CashContext;
    switch(strategy){
        case '正常收费':
            cc = new CashContext(new CashNormal());
            break;
        case '满300返100':
            cc = new CashContext(new CashReturn("300", "100"));
            break;
        case '打8折':
            cc = new CashContext(new CashRebate("0.8"));
            break;
        default:
            cc = new CashContext(new CashNormal());
    }
    let totalPrices: number = cc.GetResult(parseFloat(price) * parseFloat(num));
    console.log(`单价：${price}, 数量：${num}, 合计：${totalPrices}`)
}

strategy_program('5.5', '4', '正常收费');
strategy_program('55.5', '7', '满300返100');
strategy_program('55.5', '7', '打8折');