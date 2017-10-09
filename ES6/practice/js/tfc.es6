// 将所有内容封装在TFC容器里面...(感觉有点java的风格)
const TFC = (year) => {
    // 随机数
    let loveProbability = Math.random();
    // 定义coderLive为async函数
    const coderLive = async(day = 0) => {
        // await + Promise
        await new Promise(resolve => {
            setTimeout(() => {
                if (day % 365 === 0) {
                    if (confirm(`是否参加TFC大会?`)) {
                        console.log(`Welcome to TFC ${year}!`); // 模板字符串
                        loveProbability++;
                    }
                    year++;
                } else if (this.girlFriend) {
                    console.log(`${day}:PaPaPa...`);
                } else {
                    console.log(`${day}:PaLaPaLaPaLa...`);
                }
                this.girlFriend = loveProbability / 10 > Math.random() ?
                    new Object() : undefined;
                resolve(day);
            }, 1000 * 60 * 60 * 24);  // 1天倒计时
        });
        return coderLive(++day);
    };
    // 为什么要return？为了把async函数调用时返回的Promise对象传出去...
    return coderLive();
}

console.log(TFC(2017)); // Promise