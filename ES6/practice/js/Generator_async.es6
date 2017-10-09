// generator + Promise = 异步操作.
function* run() {
    var articles = yield getArticleList();
    var article = yield getArticle(articles[0].id);
    var author = yield getAuthor(article.authorId);
    theme.alert(author.email);
}

function getArticleList() {
    return new Promise(function(resolve, reject) {
    	// mock数据
    	let articleList = [{ id: 1 }, { id: 2 }];
    	// mock-ajax过程
        setTimeout(() => {
            console.log(`Get articleList`);
            resolve(articleList);
        }, 1000)
    });
}

function getArticle(id) {
    return new Promise(function(resolve, reject) {
    	// mock数据
    	let article = { authorId: 'AA' }
    	// mock-ajax过程
        setTimeout(() => {
            console.log(`Get article's id: ${id}`);
            resolve(article);
        }, 1000)
    });
}

function getAuthor(id) {
    return new Promise(function(resolve, reject) {
    	// mock数据
    	let email = {email:'zhongyucheng@163.com'};
    	// mock-ajax过程
        setTimeout(() => {
            console.log(`Get author's id: ${id}`);
            resolve(email);
        }, 1000)
    });
}


// 原始调用
/*var gen = run();
gen.next().value.then(function(r1) {
    gen.next(r1).value.then(function(r2) {
        gen.next(r2).value.then(function(r3) {
            gen.next(r3);
            console.log("done!");
        })
    })
});*/


// 自动执行模块
/*function runGenerator(){
    var gen = run(); // 调用Generator返回Iterator对象赋值给gen
    
    // 定义自动执行函数go.
    function go(result){
        if(result.done) {
        	console.log('done!');
        	return false;
        };
        result.value.then(function(r){
            go(gen.next(r));
        });
    }
    
    // 首次运行go...参数为gen.next(),值为{value:xxx,done:xxx},其中value为yield后面表达式的值.
    // 而run里面yield后的表达式返回的都是Promise对象,所以可以使用then方法.
    go(gen.next());
}
runGenerator();*/



/**
 * async对比Generator
 * 简洁！
 */
async function asyRun() {
    var articles = await getArticleList();
    var article = await getArticle(articles[0].id);
    var author = await getAuthor(article.authorId);
    theme.alert(author.email);
    console.log('done!');
}

asyRun();


/**
 * 结论：不论是Generator还是asyncFn,都是需要与Promise对象搭配才能真正实现异步编程.
 */