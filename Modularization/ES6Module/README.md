## [ES6 Module的语法](http://es6.ruanyifeng.com/#docs/module)

### export
- 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量
    ```js
    // 常规写法
    var firstName = 'Michael';
    var lastName = 'Jackson';
    var year = 1958;
    export {firstName, lastName, year};

    // export命令除了输出变量，还可以输出函数或类（class）
    export function multiply(x, y) {
        return x * y;
    };
    ```

### import
- 使用export命令定义了模块的对外接口以后，其他 JS 文件就可以通过import命令加载这个模块
    ```js
    // main.js
    import {firstName, lastName, year} from './profile.js';

    function setName(element) {
        element.textContent = firstName + ' ' + lastName;
    }

    // 如果想为输入的变量重新取一个名字，import命令要使用as关键字，将输入的变量重命名
    import { lastName as surname } from './profile.js';
    ```
- import命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口(示例第一组)
- 但是，如果a是一个对象，改写a的属性是允许的(示例第二组)
    ```js
    // 第一组
    import {a} from './xxx.js'
    a = {}; // Syntax Error : 'a' is read-only;

    // 第二组
    import {a} from './xxx.js'
    a.foo = 'hello'; // 合法操作
    ```
#### 整体加载
- 除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面
    ```js
    // circle.js
    export function area(radius) {
        return Math.PI * radius * radius;
    }
    export function circumference(radius) {
        return 2 * Math.PI * radius;
    }

    // main.js
    import * as circle from './circle';
    console.log('圆面积：' + circle.area(4));
    console.log('圆周长：' + circle.circumference(14));
    ```

### export default
- 使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载
- 为了给用户提供方便，让他们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出
    ```js
    export default function () {
        console.log('foo');
    }

    // 下面比较一下默认输出和正常输出
    // 第一组
    export default function crc32() {/*输出*/};
    import crc32 from 'crc32';      // 输入

    // 第二组
    export function crc32() {/*输出*/};
    import {crc32} from 'crc32'; // 输入
    ```

### 扩展阅读
- [浏览器原生支持ES6 export和import模块啦](https://www.zhangxinxu.com/wordpress/2018/08/browser-native-es6-export-import-module/)