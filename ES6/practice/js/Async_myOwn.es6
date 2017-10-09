// 第一次尝试async函数：和预想的不一致,单纯的async-await无法达到异步的效果.
/*let setTime = (time, ms) => {
	setTimeout(()=>{
		console.log(`等待的第${time}个结果~！`)
	}, ms);
}
const myOwn = () => {
    const myAsync = async() => {
        await setTime(1,1500);
        await setTime(2,1000);
        await setTime(3,500);
    }
    return myAsync()
}
myOwn().then(() => { console.log(`finished!`) });*/
/***
 * 思路错了,我竟然期望用await把异步的setTimeout变成同步的操作(不过异步编程就是期望能做到这点啊)
 * 
 * 只因为看到这么一句话导致理解偏差：
 * 当函数执行的时候,一旦遇到await就会先返回,等到异步操作完成,再接着执行函数体内后面的语句.
 * 
 * 思路没错,得先弄清楚什么是异步.
 *
 * 所谓"异步",简单说就是一个任务不是连续完成的,可以理解成该任务被人为分成两段,
 * 先执行第一段,然后转而执行其他任务,等做好了准备,再回过头执行第二段.
 *
 * 对于此任务本身来说,是期望把"异步"变成"同步"的,因为第二段要等待第一段完成.
 */


// Test_1：写成Generator形式,可以达到目的...但是总觉得不太妥当.
// 后面定义的own,写在了Generator的定义式里,很别扭.
/*const myOwn = () => {
    const myAsync = function*() {
        yield setTimeout(() => {
            console.log(`等待的第1个结果~！`);
            own.next();
        }, 1500);
        yield setTimeout(() => {
            console.log(`等待的第2个结果~！`);
            own.next();
        }, 1000);
        yield setTimeout(() => {
            console.log(`等待的第3个结果~！`);
            own.next();
        }, 500);
    }
    return myAsync()
}
var own = myOwn();
own.next();*/


// 第二次尝试async函数：async是否必须要结合promise --- 好像是这样......
/*let setTime = (time, ms) => {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			console.log(`等待的第${time}个结果~！`)
			resolve();
		},ms);
	});
}
const myOwn = () => {
    const myAsync = async() => {
        await setTime(1,1500);  // await值为undefined
        await setTime(2,1000);  // await值为undefined
        await setTime(3,500);  // await值为undefined
    }
    return myAsync()
}
myOwn().then(() => { console.log(`finished!`) });*/
/**
 * 因为async/await是基于Promise实现的,它不能用于普通的回调函数...
 * 第一次尝试中,虽然setTimeout是异步的,但是await无法感知到它是异步的...必须用Pomise包装
 */

// 第三次尝试,探测await的值如何生成
let setTime = (time, ms) => {
	return new Promise((resolve)=>{
		setTimeout(()=>{
			console.log(`等待的第${time}个结果~！`)
			resolve(time);
		},ms);
	});
}

const myOwn = () => {
    const myAsync = async() => {
        console.log(await setTime(1,1500));  // await值为1;
        console.log(await setTime(2,1000));  // await值为2;
        console.log(await setTime(3,500));  // await值为3;
    }
    return myAsync()
}
myOwn().then(() => { console.log(`finished!`) });
/**
 * 由以上测试可知,await的值,就是Promise对象resolve(aval)回调函数-参数的值.
 *
 * 从以上几个测试可以看出,async就是Promise的升级版,反而跟Generator貌似并不亲密.
 */