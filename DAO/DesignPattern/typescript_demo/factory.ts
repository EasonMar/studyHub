// 计算机 - 简单工厂模式
// 运算类 - 基类
class Operation{
    private _numberA: number = 0;
    private _numberB: number = 0;

    set numberA(num:number){
        this._numberA = num;
    }

    get numberA(): number{
        return this._numberA;
    }

    set numberB(num:number){
        this._numberB = num;
    }

    get numberB(): number{
        return this._numberB;
    }

    getResult(): number{
        let result: number = 0;
        return result;
    }
}

// 具体运算类
class OperationAdd extends Operation{
    getResult(): number{
        let result: number = 0;
        result = this.numberA + this.numberB;
        return result;
    }
}

class OperationSub extends Operation{
    getResult(): number{
        let result: number = 0;
        result = this.numberA - this.numberB;
        return result;
    }
}

class OperationMul extends Operation{
    getResult(): number{
        let result: number = 0;
        result = this.numberA * this.numberB;
        return result;
    }
}

class OperationDiv extends Operation{
    getResult(): number{
        let result: number = 0;
        if (this.numberB == 0){
            throw new Error('除数不能为0。');
        }
        result = this.numberA / this.numberB;
        return result;
    }
}

// 运算工厂 - 进行具体实例化
class OperationFactory{
    static createOperate(operate: string): Operation{
        // let oper: Operation = null; // 这样不行, 必须要赋一个 Operation类型的值
        // let oper: Operation = new OperationAdd(); 
        // 只要保证 oper 绝对可以被赋值, 这里也可以不赋初值
        let oper: Operation;
        switch(operate){
            case '+':
                oper = new OperationAdd();
                break;
            case '-':
                oper = new OperationSub();
                break;
            case '*':
                oper = new OperationMul();
                break;
            case '/':
                oper = new OperationDiv();
                break;
            // 加个default, 保证了oper在switch语句内必然可以被赋值
            default:
                oper = new OperationAdd();
        }
        return oper;
    }
}

// 客户端代码
function factory_program(numa: number, operate: string, numb: number): number{
    let oper: Operation = OperationFactory.createOperate(operate);
    oper.numberA = numa;
    oper.numberB = numb;
    let result: number = oper.getResult();
    return result;
}

console.log(factory_program(1, '+', 2));
console.log(factory_program(4, '*', 2));
console.log(factory_program(1, '-', 2));
console.log(factory_program(6, '/', 2));