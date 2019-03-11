// 装饰模式 - 实现 - 穿衣

// 待装饰的对象
class Person{
    private name: string;

    constructor(name: string = '') {
        this.name = name;
    }

    Show(): void {
        console.log(`装扮的${this.name}`)
    }
}

// 服装类 - 继承自待装饰的 Person 类
class Finery extends Person {

    // 显式赋值断言: component! 
    // 显式赋值断言是一个新语法，使用它来告诉TypeScript一个属性会被明确地赋值
    // 如果不在component后面加上感叹号，那么TypeScript会报告 component从未被初始化过。
    protected component!: Person;

    Decorate(component: Person): void {
        this.component = component;
    }

    // 重写 Show 方法 --- 关键
    Show(): void {
        if (this.component != null){
            this.component.Show();
        }
    }
}

class TShirts extends Finery {
    Show(): void {
        console.log('大T恤 ');
        super.Show();
    }
}

class BigTrouser extends Finery {
    Show(): void {
        console.log('垮裤 ');
        super.Show();
    }
}

class Sneakers extends Finery {
    Show(): void {
        console.log('破球鞋 ');
        super.Show();
    }
}

class Suit extends Finery {
    Show(): void {
        console.log('西装 ');
        super.Show();
    }
}

class Tie extends Finery {
    Show(): void {
        console.log('领带 ');
        super.Show();
    }
}

class LeatherShoes extends Finery {
    Show(): void {
        console.log('皮鞋 ');
        super.Show();
    }
}


// 客户端代码
function decorator_program(): void {
    let xc: Person = new Person('小菜');
    
    console.log('\n第一种装扮');

    // 这里实例化需要传参, 能不能做到跟 C# 一样不传...
    // 在构造函数中加了个默认参数就可以了
    let pqx: Sneakers = new Sneakers();
    let kk: BigTrouser = new BigTrouser();
    let dtx: TShirts = new TShirts();

    // 一层层嵌套、后进先出
    pqx.Decorate(xc);
    kk.Decorate(pqx);
    dtx.Decorate(kk);
    dtx.Show();

    console.log('\n第二种装扮：')

    let px: LeatherShoes = new LeatherShoes();
    let ld: Tie = new Tie();
    let xz: Suit = new Suit();
    px.Decorate(xc);
    ld.Decorate(px);
    xz.Decorate(ld);
    xz.Show();
}

decorator_program();
