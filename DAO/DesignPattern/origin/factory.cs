// 计算机 - 简单工厂模式
// 运算类
public class Operation
{
    private double _numberA = 0;
    private double _numberB = 0;
    

    // Getter && Setter
    // 数字A
    public double NumberA
    {
        get
        {
            return _numberA;
        }
        set
        {
            _numberA = value; // 这个value怎么来的
        }
    }

    // 数字B
    public double NumberB
    {
        get
        {
            return _numberB;
        }
        set
        {
            _numberB = value;
        }
    }

    // 得到运算结果
    public virtual double getResult()
    {
        double result = 0; 
        return result;
    }

    
}

// 加法类
class OperationAdd : Operation
{
    public override double getResult()
    {
        double result = 0; 
        result = NumberA + NumberB;
        return result;
    }
}

// 减法类
class OperationSub : Operation
{
    public override double getResult()
    {
        double result = 0;
        result = NumberA - NumberB;
        return result;
    }
}

// 乘法类
class OperationMul : Operation
{
    public override double getResult()
    {
        double result = 0;
        result = NumberA * NumberB;
        return result;
    }
}

// 除法类
class OperationDiv : Operation
{
    public override double getResult()
    {
        double result = 0;
        if (NumberB==0)
            throw new Exception("除数不能为0。");
        result = NumberA / NumberB;
        return result;
    }
}

// 运算类工厂 - 根据不同条件生成不同的类实例，每个实例都源自Operation类的子类, 继承了Operation类的属性
class OperationFactory
{
    public static Operation createOperate(string operate)
    {
        Operation oper = null;
        // 这就是多态的实现吧
        switch (operate)
        {
            case "+":
                {
                    oper = new OperationAdd();
                    break;
                }
            case "-":
                {
                    oper = new OperationSub();
                    break;
                }
            case "*":
                {
                    oper = new OperationMul();
                    break;
                }
            case "/":
                {
                    oper = new OperationDiv();
                    break;
                }
        }

        return oper;
    }
}

// 客户端代码
private void  Program(){
    Operation oper;
    oper = OperationFactory.createOperate("+");
    oper.NumberA = 1;
    oper.NumberB = 2;
    double result = oper.getResult();
}
