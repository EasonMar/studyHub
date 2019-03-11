abstract class Subject {
    abstract Request(): void; // 抽象方法不能有具体实现, 所以没有{}了
}

class RealSubject extends Subject {
    Request(): void {
        console.log('真实的请求')
    }
}

class Proxy extends Subject {
    realSubject!: RealSubject;

    Request(): void {

        // 在ts中, 这里永远不可能为null吧
        // 实际上这里 this.realSubject 为 undefined
        // 而 undefined == null 为 true
        if (this.realSubject == null){
            this.realSubject = new RealSubject();
        }
        this.realSubject.Request();
    }
}


// 客户端代码
function proxy_program(): void {
    let proxy: Proxy = new Proxy();
    proxy.Request();
}

proxy_program();