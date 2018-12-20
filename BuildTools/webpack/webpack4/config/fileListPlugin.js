class FileListPlugin {
    apply(compiler) {
        // emit	事件钩子：在生成资源并输出到目录之前，异步钩子
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
            // 在生成文件中，创建一个头部字符串
            var filelist = 'In this build:\n\n';

            // 遍历所有编译过的资源文件，对于每个文件名称，都添加一行内容。
            for (var filename in compilation.assets) {
                filelist += ('- ' + filename + '\n');
            }

            // 将这个列表作为一个新的文件资源，插入到 webpack 构建中：
            compilation.assets['filelist.md'] = {
                // 文件的内容 - 输出文件就用这个内容
                source() {
                    return filelist;
                },
                // 文件的大小 - 命令行输出需要用到这东西...
                size() {  
                    return filelist.length;
                }
            };

            callback();
        });
    }
}

module.exports = FileListPlugin;