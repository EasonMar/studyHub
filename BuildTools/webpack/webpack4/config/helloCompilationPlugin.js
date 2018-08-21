class HelloCompilationPlugin {
    apply(compiler) {
        // 置回调来访问 compilation 对象：
        compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
            // 现在，设置回调来访问 compilation 中的步骤：
            compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                console.log('Hello compilation!');
            });
        });
    }
}

module.exports = HelloCompilationPlugin;