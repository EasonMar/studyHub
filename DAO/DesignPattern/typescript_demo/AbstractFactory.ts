// 工厂，是用来生产东西、产品的地方！所以工厂模式，是创建型的一种设计模式
// 简单工厂、工厂方法、抽象工厂，不同在于生成实例的方式

// 在程序领域，工厂，就是用来给某些对象生成实例的
// 下面的"产品"，就是要在工厂里生产、实例化的对象


// 抽象工厂 - 定义工厂能生产什么
abstract class AbstractFactory {
    // 此工厂可以生产2个产品 - 可以实例化2个对象 - 可以生成2类函数 - ……
    abstract CreateProductA(): AbstractProductA;
    abstract CreateProductB(): AbstractProductB;
}

// 具体工厂1 - 实现具体生产配置、过程
class ConcreteFactory1 extends AbstractFactory {
    // 生产 产品A - 实例化 ProductA对象
    CreateProductA(): AbstractProductA {
        return new ProductA1();
    }
    // 生产 产品B - 实例化 ProductB对象
    CreateProductB(): AbstractProductB {
        return new ProductB1();
    }
}

// 具体工厂2
class ConcreteFactory2 extends AbstractFactory {
    // 生产 产品A
    CreateProductA(): AbstractProductA {
        return new ProductA2();
    }

    // 生产 产品B
    CreateProductB(): AbstractProductB {
        return new ProductB2();
    }
}

// 抽象产品类 - 定义产品的特征
abstract class AbstractProductA {}
abstract class AbstractProductB {
    abstract Interact(a: AbstractProductA): void;
}

// 具体产品A1
class ProductA1 extends AbstractProductA {}
// 具体产品B1
class ProductB1 extends AbstractProductB {
    Interact(a: AbstractProductA): void {
        console.log(this +" interacts with " + a);
    }
}
// 具体产品A2
class ProductA2 extends AbstractProductA {}
// 具体产品B2
class ProductB2 extends AbstractProductB {
    Interact(a: AbstractProductA): void {
        console.log(this +" interacts with " + a);
    }
}

// 这是啥 - 某种客户端程序
class Client {
    private ProductA: AbstractProductA;
    private ProductB: AbstractProductB;

    constructor(factory: AbstractFactory) {
        this.ProductA = factory.CreateProductA()
        this.ProductB = factory.CreateProductB()
    }

    Run(): void {
        this.ProductB.Interact(this.ProductA);
    }
}

// 客户端
function AbstractFactory_prog(): void {
    let f1: AbstractFactory = new ConcreteFactory1();
    let c1: Client = new Client(f1);
    c1.Run();

    let f2: AbstractFactory = new ConcreteFactory2();
    let c2: Client = new Client(f2);
    c2.Run();
}

AbstractFactory_prog();