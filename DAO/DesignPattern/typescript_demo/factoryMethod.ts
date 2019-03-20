// 工厂方法 - 实现 - 计算器

// 前面跟简单工厂一模一样 - 对应教程里的 Product
class Operation_FM {
    private _numberA: number = 0;
    private _numberB: number = 0;

    set numberA(num:number) {
        this._numberA = num;
    }

    get numberA(): number {
        return this._numberA;
    }

    set numberB(num:number) {
        this._numberB = num;
    }

    get numberB(): number {
        return this._numberB;
    }

    getResult(): number {
        let result: number = 0;
        return result;
    }
}

// 具体运算类 - 对应教程里的 ConcreteProduct - 实现了Product的接口
class Operation_FM_Add extends Operation_FM {
    getResult(): number{
        let result: number = 0;
        result = this.numberA + this.numberB;
        return result;
    }
}

class Operation_FM_Sub extends Operation_FM {
    getResult(): number{
        let result: number = 0;
        result = this.numberA - this.numberB;
        return result;
    }
}

class Operation_FM_Mul extends Operation_FM {
    getResult(): number{
        let result: number = 0;
        result = this.numberA * this.numberB;
        return result;
    }
}

class Operation_FM_Div extends Operation_FM {
    getResult(): number{
        let result: number = 0;
        if (this.numberB == 0){
            throw new Error('除数不能为0。');
        }
        result = this.numberA / this.numberB;
        return result;
    }
}

// 运算 工厂方法 - 只是一个接口 - 即使后面增加或减少运算方法，这里都不需要改动
// 对应教程里的 Creator，返回Product类型的对象
interface IFactory {
    CreateOperation(): Operation_FM;
}

// 具体计算方法类 '实现' IFactory 接口 - 对应教程里的 ConcreteCreator，返回ConcreteProduct类的对象
class AddFactory implements IFactory {
    CreateOperation(): Operation_FM {
        return new Operation_FM_Add()
    }
}
class SubFactory implements IFactory {
    CreateOperation(): Operation_FM {
        return new Operation_FM_Sub()
    }
}
class MulFactory implements IFactory {
    CreateOperation(): Operation_FM {
        return new Operation_FM_Mul()
    }
}
class DivFactory implements IFactory {
    CreateOperation(): Operation_FM {
        return new Operation_FM_Div()
    }
}

// 客户端代码
function factoryMethod_program(numa: number, numb: number): number {
    // 获取具体方法接口，并实例化具体运算方法 - 疑问：怎么决定实例化哪个运算方法呢？
    let oc: IFactory = new AddFactory();
    let oper: Operation_FM = oc.CreateOperation();

    // 具体运算
    oper.numberA = numa;
    oper.numberB = numb;
    let result: number = oper.getResult();
    return result;
}

console.log(factoryMethod_program(1,88));