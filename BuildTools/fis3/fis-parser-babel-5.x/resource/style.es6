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
        await setTime(1,1500);  // await值为1;
        await setTime(2,1000);  // await值为2;
        await setTime(3,500);  // await值为3;
    }
    return myAsync()
}
myOwn().then(() => { console.log(`finished!`) });