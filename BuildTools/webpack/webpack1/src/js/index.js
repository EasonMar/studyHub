function index(){
	console.log('module index output');
}

// export default index;  // ES6 Module语法要另外配置

module.exports.fn = index;