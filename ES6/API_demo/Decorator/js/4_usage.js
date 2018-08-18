// // 实际开发中，React 与 Redux 库结合使用时，常常需要写成下面这样。
// class MyReactComponent extends React.Component {}
// export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

// // 有了装饰器，就可以改写上面的代码。 --- 认真思考
// @connect(mapStateToProps, mapDispatchToProps)
// export default class MyReactComponent extends React.Component {}

// 相对来说，后一种写法看上去更容易理解。