/**
 * 实际开发中，React 与 Redux 库结合使用时，常常需要写成下面这样. 
 *
 * class MyReactComponent extends React.Component {}
 * export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent); 
 * 
 * 有了装饰器，就可以改写上面的代码.  --- 认真捋一捋
 * 
 * @connect(mapStateToProps, mapDispatchToProps)
 * export default class MyReactComponent extends React.Component {}
 *
 * 相对来说，后一种写法看上去更容易理解. 
 */


/**
 * 用 Decorator 写法的组件，看上去一目了然.  --- 认真捋一捋
 *
 * @Component({
 *    tag: 'my-component',
 *    styleUrl: 'my-component.scss'
 * })
 * export class MyComponent {
 *    @Prop() first: string;
 *    @Prop() last: string;
 *    @State() isVisible: boolean = true;
 *    
 *    render() {
 *    	  return ( <p> Hello, my name is { this.first } { this.last } < /p>); 
 *    }
 * }
 */

/**
 * core-decorators.js
 *
 * core-decorators.js是一个第三方模块，提供了几个常见的修饰器，通过它可以更好地理解修饰器. 
 */

import { autobind, readonly, override, deprecate, suppressWarnings } from 'core-decorators';

/**
 * 1. @autobind
 * autobind修饰器使得方法中的this对象，绑定原始对象。
 */
class Person {
    @autobind
    getPerson() {
        return this;
    }
}

let person = new Person();
let getPerson = person.getPerson;

console.log(getPerson() === person); // true

/**
 * 2. @readonly
 * readonly修饰器使得属性或方法不可写。
 */
class Meal {
    @readonly
    entree = 'steak'; // 这里编译不过去,提示语法错误,目前类属性好像不可以这样声明,要加插件
    // 这种写法是'类字段',还只是一个提案：https://github.com/tc39/proposal-class-fields
    // 对应的babel插件：http://babeljs.io/docs/en/babel-plugin-transform-class-properties/
}
var dinner = new Meal();
// dinner.entree = 'salmon'; // Cannot assign to read only property 'entree' of [object Object]

/**
 * 3. @override
 * override修饰器检查子类的方法，是否正确覆盖了父类的同名方法，如果不正确会报错。
 */
class Parent {
    speak(first, second) {}
}

// class Child extends Parent {
//     @override
//     speak() {}
//     // SyntaxError: Child#speak() does not properly override Parent#speak(first, second)
// }

// or

// class Child extends Parent {
//     @override
//     speaks() {}
//     // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.
//     //
//     //   Did you mean "speak"?
// }


/**
 * 4. @deprecate (别名@deprecated)
 * deprecate或deprecated修饰器在控制台显示一条警告，表示该方法将废除。
 */


/**
 * 5. @suppressWarnings
 * suppressWarnings修饰器抑制deprecated修饰器导致的console.warn()调用。但是，异步代码发出的调用除外。
 */