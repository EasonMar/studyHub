// 模块的主要逻辑

function Hello() {
    var name;
    this.setName = function(argName) {
        name = argName;
    }

    this.sayHello = function() {
        console.log('Hello ' + name)
    }
}


// 对模块进行导出 - module.exports
module.exports = Hello;