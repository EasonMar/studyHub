/**
 * 写webpack插件
 * 一脸懵逼
 */

// const pluginName = "htmlAfterWebpackPlugin"; // 这里是不是错了, 第一个字母应该大写，但是执行貌似没问题
const pluginName = "HtmlAfterWebpackPlugin";

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

/**
 * Webpack插件
 * - 在 compiler对象 中触发 compilation钩子
 * - 在 compilation对象 中触发 htmlWebpackPluginAfterHtmlProcessing钩子
 * - htmlWebpackPluginAfterHtmlProcessing钩子来自哪里:https://cloud.tencent.com/info/5427b02e2c64c49afb4ab98befc3bf3a.html
 * - 但是在插件的官方github中依然找不到这个钩子(因为官网放置的是@next非正式发布的包,改动比较大)
 * - 进入下载的html-webpack-plugin的目录，翻源码、及README，终于找到了这个钩子！
 */
class HtmlAfterWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.run.tap(pluginName, compilation => { // 这种写法已经不行了 --- 应该是老师没认真读API, 或者我自己没有听清楚课
        // Tap into compilation hook which gives compilation as argument to the callback function
        compiler.hooks.compilation.tap(pluginName, compilation => {
            // htmlWebpackPluginAfterHtmlProcessing钩子事件
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