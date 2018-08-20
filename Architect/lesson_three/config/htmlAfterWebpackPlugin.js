/**
 * 写webpack插件
 * 一脸懵逼
 */

const pluginName = "htmlAfterWebpackPlugin";

const assetsHelp = data => {
    let css = [], js = [];
    const dir = {
        js: item => `<script src="${item}"></script>`,
        css: item => `<link rel="stylesheet" href="${item}">`
    }
    for(let jsitem of data.js){
        js.push(dir.js(jsitem))
    }
    for(let cssitem of data.css){
        css.push(dir.css(cssitem))
    }
    return { css,js }
}

class HtmlAfterWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.run.tap(pluginName, compilation => { // 这种写法已经不行了
        compiler.hooks.compilation.tap(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
                const result = assetsHelp(htmlPluginData.assets);
                let _html = htmlPluginData.html;
                _html = _html.replace('<!--injectcss-->', result.css.join(''));
                _html = _html.replace('<!--injectjs-->', result.js.join(''));
                htmlPluginData.html = _html;
            });
        });
    }
}

module.exports = HtmlAfterWebpackPlugin;