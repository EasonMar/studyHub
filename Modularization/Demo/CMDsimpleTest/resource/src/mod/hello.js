define(function(require, exports, module){
    // var $ = require('../../jquery.js'); // 不用seajs.config里面的别名，用相对路径，$就正常加载出来了
    var $ = require('jquery'); // fis-hook-cmd里配了paths别名，也可以用别名
    module.exports = {
        say: function(){
            console.log('I Said $ is');
            console.log($);
        }
    }
});