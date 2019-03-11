// 装饰模式 - demo
class Program
{
    static void Main(string[] args)
    {
        ConcreteComponent c = new ConcreteComponent();
        ConcreteDecoratorA d1 = new ConcreteDecoratorA();
        ConcreteDecoratorB d2 = new ConcreteDecoratorB();

        d1.SetComponent(c);
        d2.SetComponent(d1);
        d2.Operation();

        Console.Read();
    }
}

// 抽象组件 - 组件可以理解为代装饰的对象
abstract class Component
{
    public abstract void Operation();
}

// 具体组件
class ConcreteComponent : Component
{
    public override void Operation()
    {
        Console.WriteLine("具体对象的操作");
    }
}

// 抽象装饰类 - 继承于抽象组件
abstract class Decorator : Component
{
    // 关键 - component属性：用来保存要处理的具体对象
    protected Component component;

    // 设置component
    public void SetComponent(Component component)
    {
        this.component = component;
    }

    // 关键 - 抽象装饰类重写了Operation, 如果当前有装饰对象, 执行对象的Operation方法 
    public override void Operation()
    {
        if (component != null)
        {
            component.Operation();
        }
    }
}

// 具体装饰类
class ConcreteDecoratorA : Decorator
{
    // 独有的属性
    private string addedState; 

    public override void Operation()
    {
        // 运行原Component的Operation
        // 执行 从抽象装饰类上继承的 component属性的Operation方法
        // 此 component属性的值 通过 setComponent 设置
        base.Operation();
        addedState = "New State";
        Console.WriteLine("具体装饰对象A的操作");
    }
}

// 具体装饰类
class ConcreteDecoratorB : Decorator
{

    public override void Operation()
    {
        // 运行原Component的Operation
        base.Operation();
        AddedBehavior();
        Console.WriteLine("具体装饰对象B的操作");
    }

    // 独有的方法
    private void AddedBehavior()
    {
        Console.WriteLine("这是B特有的方法")
    }
}