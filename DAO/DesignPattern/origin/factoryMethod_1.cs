// 工厂方法 - 实现 - 计算器

// 客户端代码
class Program
{
    static void Main(string[] args)
    {
        // 获取具体方法接口，并实例化具体运算方法
        IFactory operFactory = new AddFactory();
        Operation oper = operFactory.CreateOperation();

        // 具体运算
        oper.NumberA = 1;
        oper.NumberB = 2;
        double result=oper.GetResult();

        Console.WriteLine(result);

        Console.Read();
    }
}

// 运算类
class Operation
{
    private double _numberA = 0;
    private double _numberB = 0;

    public double NumberA
    {
        get { return _numberA; }
        set { _numberA = value; }
    }

    public double NumberB
    {
        get { return _numberB; }
        set { _numberB = value; }
    }

    // 得到运算结果
    public virtual double GetResult()
    {
        double result = 0;
        return result;
    }
}

// 加法类
class OperationAdd : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA + NumberB;
        return result;
    }
}

// 减法类
class OperationSub : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA - NumberB;
        return result;
    }
}
// 乘法类
class OperationMul : Operation
{
    public override double GetResult()
    {
        double result = 0;
        result = NumberA * NumberB;
        return result;
    }
}
// 除法类
class OperationDiv : Operation
{
    public override double GetResult()
    {
        double result = 0;
        if (NumberB == 0)
            throw new Exception("除数不能为0。");
        result = NumberA / NumberB;
        return result;
    }
}

// 运算 工厂方法 - 只是一个接口
interface IFactory
{
    Operation CreateOperation();
}

// 专门负责生产“+”的工厂
class AddFactory : IFactory
{
    public Operation CreateOperation()
    {
        return new OperationAdd();
    }
}

// 专门负责生产“-”的工厂
class SubFactory : IFactory
{
    public Operation CreateOperation()
    {
        return new OperationSub();
    }
}

// 专门负责生产“*”的工厂
class MulFactory : IFactory
{
    public Operation CreateOperation()
    {
        return new OperationMul();
    }
}

// 专门负责生产“/”的工厂
class DivFactory : IFactory
{
    public Operation CreateOperation()
    {
        return new OperationDiv();
    }
}