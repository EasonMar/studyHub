const pluginName = "HtmlAfterWebpackPlugin";

/**
 * 静态资源wrapper
 * @param {object} data assets资源：data.js是页面中涉及的js、data.css是css
 */
const assetsHelp = data => {
    let css = [], js = [];

    // 资源 wrap 函数，包装在dir对象内
    const dir = {
        jsWrap: item => `<script src="${item}"></script>`,
        cssWrap: item => `<link rel="stylesheet" href="${item}">`
    }
    for (let jsitem of data.js) {
        js.push(dir.jsWrap(jsitem))
    }
    for (let cssitem of data.css) {
        css.push(dir.cssWrap(cssitem))
    }
    return { css, js }
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
        // Tap into compilation hook which gives compilation as argument to the callback function
        compiler.hooks.compilation.tap(pluginName, compilation => {
            // htmlWebpackPluginAfterHtmlProcessing钩子事件
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tap(pluginName, htmlPluginData => {
                // 获取 webpack 内的 assets，并用资源标签包裹
                const result = assetsHelp(htmlPluginData.assets);
                // 获取 webpack 内的 html
                let _html = htmlPluginData.html;

                // 插入资源
                _html = _html.replace('<!--injectcss-->', result.css.join(''));
                _html = _html.replace('<!--injectjs-->', result.js.join(''));
                
                // 更新 webpack 内的 html
                htmlPluginData.html = _html;
            });
        });
    }
}

module.exports = HtmlAfterWebpackPlugin;