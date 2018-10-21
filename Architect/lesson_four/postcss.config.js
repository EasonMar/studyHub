module.exports = {
    // 第四课才配置了这货...
    plugins: {
        // 'postcss-preset-env': {} // 这个跟happypack配合有冲突,导致无法编译
        'postcss-cssnext': {},
        'cssnano': {} // 需要想一个办法,使得只在生产环境中引入它
    }
}