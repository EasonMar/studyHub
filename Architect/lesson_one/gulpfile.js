const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch');

// 只编译node不认识的东西即可

gulp.task('builddev', () => watch(
    './src/nodeuii/**/*.js', {
        ignoreInitial: false // 是否忽略第一次构建
    }, () => {
        gulp.src('src/nodeuii/**/*js')
            .pipe(babel({
                // 关闭外部的babelrc
                babelrc: false,
                presets: ['env']
            }))
            .pipe(gulp.dest('dist'))
    }
));

let _task = ["builddev"]

// 如果是上线环境
if (process.env.NODE_ENV === 'production') {
    _task = [];
}

gulp.task("default", _task)

// // 如果不用gulp-watch，则需要改写成如下
// gulp.task("default", _task, () => {
//     gulp.watch('./src/nodeuii/**/*.js', _task)
// })

// gulp.task("builddev", () => {
//     gulp.src('src/nodeuii/**/*js')
//         .pipe(babel({
//             babelrc: false,
//             presets: ['env']
//         }))
//         .pipe(gulp.dest('dist'))
// })