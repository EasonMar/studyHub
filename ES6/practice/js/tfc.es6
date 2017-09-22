const TFC = (year) => {
    let loveProbability = Math.random();
    // async函数
    const coderLive = async(day = 0) => {
        // await + Promise
        await new Promise(resolve => {
            setTimeout(() => {
                if (day % 365 === 0) {
                    if (confirm('是否参加TFC大会?')) {
                        console.log('Welcome to TFC ${year}!'); // 模板字符串
                        loveProbability++;
                    }
                    year++;
                } else if (this.girlFriend) {
                    console.log('${day}:PaPaPa...');
                } else {
                    console.log('${day}:PaLaPaLaPaLa...');
                }
                this.girlFriend = loveProbability / 10 > Math.random() ?
                    new Object() : undefined;
                resolve(day);
            }, 1000 * 60 * 60 * 24);  // 1天倒计时
        });
        return coderLive(++day);
    };
    return coderLive();
}

TFC(2017);