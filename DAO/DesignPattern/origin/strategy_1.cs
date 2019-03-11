// 策略模式 demo
class Program
{
    static void Main(string[] args)
    {
        Context context;

        context = new Context(new ConcreteStrategyA());
        context.ContextInterface();

        context = new Context(new ConcreteStrategyB());
        context.ContextInterface();

        context = new Context(new ConcreteStrategyC());
        context.ContextInterface();

        Console.Read();
    }
}
//抽象算法类 - 泛指某算法
abstract class Strategy
{
    // 这类算法里有一个 AlgorithmInterface接口
    public abstract void AlgorithmInterface();
}

//具体算法A
class ConcreteStrategyA : Strategy
{
    //算法A - 实现 AlgorithmInterface接口
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法A实现");
    }
}

//具体算法B
class ConcreteStrategyB : Strategy
{
    //算法B - 实现 AlgorithmInterface接口
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法B实现");
    }
}

//具体算法C
class ConcreteStrategyC : Strategy
{
    //算法C - 实现 AlgorithmInterface接口
    public override void AlgorithmInterface()
    {
        Console.WriteLine("算法C实现");
    }
}

//上下文 - 选择具体策略
class Context
{
    // strategy属性, 存放具体算法
    Strategy strategy;

    // 构建函数
    public Context(Strategy strategy)
    {
        this.strategy = strategy;
    }
    
    // 上下文接口 - 执行具体算法
    public void ContextInterface()
    {
        strategy.AlgorithmInterface();
    }
}