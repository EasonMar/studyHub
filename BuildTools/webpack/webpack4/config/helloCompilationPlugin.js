class HelloCompilationPlugin {
    apply(compiler) {
        // 设置回调来访问 compilation 对象：
        // Tap into compilation hook which gives compilation as argument to the callback function
        compiler.hooks.compilation.tap('HelloCompilationPlugin', (compilation) => {
            // 现在，设置回调来访问 compilation 中的步骤：在 optimization 阶段开始时触发
            compilation.hooks.optimize.tap('HelloCompilationPlugin', () => {
                console.log('Hello compilation!');
            });
        });
    }
}

module.exports = HelloCompilationPlugin;