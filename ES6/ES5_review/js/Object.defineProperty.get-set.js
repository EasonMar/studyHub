/***
 * Object.defineProperty(obj, prop, descriptor)
 * Object.defineProperty() 方法会直接在一个对象上定义一个新属性,或者修改一个对象的现有属性,并返回这个对象
 * obj: 要在其上定义属性的对象
 * prop: 要定义或修改的属性的名称
 * descriptor: 将被定义或修改的属性描述符
 */


// 下面的例子展示了如何实现一个自存档对象。 当设置temperature 属性时,archive 数组会获取日志条目
function Archiver() {
    var temperature = null;
    var archive = [];

    Object.defineProperty(this, 'temperature', {
        get: function () {
            console.log('get!');
            return temperature;
        },
        set: function (value) {
            temperature = value;
            archive.push({ val: temperature });
        }
    });

    this.getArchive = function () { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
console.log(arc.getArchive()); // [{ val: 11 }, { val: 13 }]

// 或

var pattern = {
    get: function () {
        return 'I alway return this string,whatever you have assigned';
    },
    set: function () {
        this.myname = 'this is my name string';
    }
};

function TestDefineSetAndGet() {
    Object.defineProperty(this, 'myproperty', pattern);
}

var instance = new TestDefineSetAndGet();
instance.myproperty = 'test';

// 'I alway return this string,whatever you have assigned'
console.log(instance.myproperty);
// 'this is my name string'
console.log(instance.myname);