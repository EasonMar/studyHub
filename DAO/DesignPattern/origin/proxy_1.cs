class Program
{
    static void Main(string[] args)
    {
        Proxy proxy = new Proxy();
        proxy.Request();

        Console.Read();
    }
}

// 抽象类 - 主题
abstract class Subject
{
    public abstract void Request();
}

// 真实的主题
class RealSubject : Subject
{
    public override void Request()
    {
        Console.WriteLine("真实的请求");
    }
}

// 代理
class Proxy : Subject
{
    // 有个属性是真实主题
    RealSubject realSubject;

    // 重写抽象主题的Request - 但是却把真实主题的Request调用了
    // 帮真实主题把活给干了 - 这就是代理
    public override void Request()
    {
        if (realSubject == null)
        {
            realSubject = new RealSubject();
        }

        realSubject.Request();
    }
}