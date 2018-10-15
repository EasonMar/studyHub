import { cube } from './math.js';
import printMe from './print.js';
import './styles.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
}

function component() {
    var element = document.createElement('pre');
    var btn = document.createElement('button');

    element.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素 --- 少了这一句，更改print.js会导致页面刷新？Why,读懂语法就知道why了
document.body.appendChild(element);


// 当 print.js 内部发生变更时可以告诉 webpack 接受更新的模块
if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}