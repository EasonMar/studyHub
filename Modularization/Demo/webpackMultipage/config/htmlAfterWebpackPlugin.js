/**
 * webpack插件
 */

// const pluginName = "htmlAfterWebpackPlugin"; // 这里是不是错了, 第一个字母应该大写，但是执行貌似没问题
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
 * Webpack插件机制
 */
class HtmlAfterWebpackPlugin {
    apply(compiler) {
        // compiler.hooks.run.tap(pluginName, compilation => { // 这种写法已经不行了 --- 应该是老师没认真读API, 或者我自己没有听清楚课
        compiler.hooks.compilation.tap(pluginName, compilation => {
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