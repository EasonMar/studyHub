// 观察者模式 - 基本demo

+function name_space_observer(){

    // 这个抽象类里面也没有抽象方法，不会报错吗？TS的抽象类究竟有什么要求呢？
    abstract class Subject {
        private observers:Observer[] = new Array<Observer>();

        public Attach(observer:Observer):void{
            this.observers.push(observer)
        }

        // 移除observer在js领域比较麻烦, 不像C#有一个直接的Remove方法
        public Detach(observer:Observer):void{
            this.observers = this.observers.filter(o => o!=observer)
        }

        public Notify():void {
            for (let o of this.observers){
                o.Update();
            }
        }
    }

    class ConcreteSubject extends Subject{
        // 显式赋值断言是一个新语法，使用它来告诉TypeScript一个属性会被明确地赋值
        // 如果不在 subjectState 后面加上感叹号，那么TypeScript会报告 subjectState 从未被初始化过。
        private subjectState!: string;
        
        get SubjectState(): string{
            return this.subjectState
        }

        set SubjectState(newState: string){
            this.subjectState = newState;
        }

    }

    // 抽象类 - 抽象观察者
    abstract class Observer {
        // 抽象方法 - Update
        public abstract Update():void
    }

    class ConcreteObserver extends Observer{
        private name: string;
        private observerState!: string;
        private subject: ConcreteSubject;

        constructor(subject: ConcreteSubject, name: string){
            super();
            this.subject = subject;
            this.name = name;
        }

        public Update():void{
            this.observerState = this.subject.SubjectState;
            console.log(`观察者${this.name}的新状态是${this.observerState}`);
        }

        // 为啥下面需要subject的getter和setter?
        // 感觉没啥用啊
        get Subject(): ConcreteSubject{
            return this.subject
        }

        set Subject(value:ConcreteSubject){
            this.subject = value;
        }
    }

    +function client():void{
        // 声明具体的被观察对象
        let s:ConcreteSubject = new ConcreteSubject();

        // 声明具体的观察者
        let o_a:ConcreteObserver = new ConcreteObserver(s, 'a');
        let o_b:ConcreteObserver = new ConcreteObserver(s, 'b');
        let o_c:ConcreteObserver = new ConcreteObserver(s, 'c');

        // 实验Attach和Detach方法
        s.Attach(o_a);
        s.Attach(o_b);
        s.Attach(o_c);
        s.Detach(o_b);

        // 被观察者状态更新
        s.SubjectState = "ABC";

        // 发布信息
        s.Notify();
    }()
}()