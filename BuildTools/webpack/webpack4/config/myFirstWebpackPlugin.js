class MyFirstWebpackPlugin {
    constructor(options) {
        this.options = options;
    }

    apply(compiler) {
        // done 生命周期: 编译(compilation)完成时执行.
        compiler.hooks.done.tap('MyFirstWebpackPlugin', (stats) => {
            console.log('Hello My First Webpack Plugin!');
            console.log(this.options);
        });
    }
}

module.exports = MyFirstWebpackPlugin;