// 装饰模式 - 实现 - 穿衣
class Program
    {
    static void Main(string[] args)
    {
        Person xc = new Person("小菜");

        Console.WriteLine("\n第一种装扮：");

        Sneakers pqx = new Sneakers();
        BigTrouser kk = new BigTrouser();
        TShirts dtx = new TShirts();

        // 一层层嵌套、后进先出
        pqx.Decorate(xc);
        kk.Decorate(pqx);
        dtx.Decorate(kk);
        dtx.Show();
        // 大T恤 垮裤 破球鞋 装扮的小菜

        Console.WriteLine("\n第二种装扮：");

        LeatherShoes px = new LeatherShoes();
        Tie ld = new Tie();
        Suit xz = new Suit();

        // 一层层嵌套、后进先出
        px.Decorate(xc);
        ld.Decorate(px);
        xz.Decorate(ld);
        xz.Show();

        Console.WriteLine("\n第三种装扮：");
        Sneakers pqx2 = new Sneakers();
        LeatherShoes px2 = new LeatherShoes();
        BigTrouser kk2 = new BigTrouser();
        Tie ld2 = new Tie();

        // 一层层嵌套、后进先出
        pqx2.Decorate(xc);
        px2.Decorate(pqx);
        kk2.Decorate(px2);
        ld2.Decorate(kk2);

        ld2.Show();
        // 领带 垮裤 皮鞋 破球鞋 装扮的小菜

        Console.Read();
    }
}

// 待装饰的对象
class Person
{
    // 这是啥？
    public Person()
    { }

    private string name;

    // 构造函数
    public Person(string name)
    {
        this.name = name;
    }

    public virtual void Show()
    {
        Console.WriteLine("装扮的{0}", name);
    }
}

// 装饰类必须继承自待处理对象类，并重写其部分核心方法
// 这个装饰类不是抽象的，用以初始化重要信息---> 明确装饰对象
class Finery : Person
{
    protected Person component;

    //打扮
    public void Decorate(Person component)
    {
        this.component = component;
    }

    public override void Show()
    {
        if (component != null)
        {
            component.Show();
        }
    }
}

// 继承自装饰类的具体装饰类
class TShirts : Finery
{
    public override void Show()
    {
        Console.Write("大T恤 ");
        base.Show();
    }
}

class BigTrouser : Finery
{
    public override void Show()
    {
        Console.Write("垮裤 ");
        base.Show();
    }
}

class Sneakers : Finery
{
    public override void Show()
    {
        Console.Write("破球鞋 ");
        base.Show();
    }
}

class Suit : Finery
{
    public override void Show()
    {
        Console.Write("西装 ");
        base.Show();
    }
}

class Tie : Finery
{
    public override void Show()
    {
        Console.Write("领带 ");
        base.Show();
    }
}

class LeatherShoes : Finery
{
    public override void Show()
    {
        Console.Write("皮鞋 ");
        base.Show();
    }
}