const TFC = (year) => {
    let loveProbability = Math.random();
    const coderLive = async(day = 0) => {
        await new Promise(resolve => {
            setTimeout(() => {
                if (day % 365 === 0) {
                    if (confirm('是否参加TFC大会?')) {
                        console.log('Welcome to TFC ${year}!');
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
            }, 1000 * 60 * 60 * 24);
        });
        return coderLive(++day);
    };
    return coderLive();
}

TFC(2017);