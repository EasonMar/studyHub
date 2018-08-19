/**
 * 写webpack插件
 * 一脸懵逼
 */ 

const pluginName = "htmlAfterWebpackPlugin";

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.run.tap(pluginName, compilation => {
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName,htmlPluginData=>{

            });
        });
    }
}

module.exports = HtmlAfterWebpackPlugin;