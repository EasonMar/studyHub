// 考察逗号表达式
for (let i = (setTimeout(() => console.log('a->', i)), 0);
		setTimeout(() => console.log('b->', i)), i < 2;
		i++) {
    i++
}