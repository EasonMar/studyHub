const gulp = require('gulp');
const babel = require('gulp-babel');
const watch = require('gulp-watch'); // 使用gulp-watch来监听,需要安装gulp-watch包,有时候这个用法比较好
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');
const eslint = require('gulp-eslint'); 

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

gulp.task('buildprod', () => {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(babel({
            // 关闭外部的babelrc
            babelrc: false,
            ignore: ["./src/nodeuii/config/*.js"], // 忽略配置文件config, 交给后面rollup去处理
            "plugins": ['env']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('configclean', function () {
    gulp.src('./src/nodeuii/**/*.js')
        .pipe(rollup({
            output: {
                format: "cjs"
            },
            input: './src/nodeuii/config/index.js',
            plugins: [
                replace({
                    "process.env.NODE_ENV": JSON.stringify('production')
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('lint', function () {
    gulp.src('./src/nodeuii/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// 默认是开发环境
let _tasks = ["builddev"]

// 如果是上线环境
if (process.env.NODE_ENV === 'production') {
    _tasks = gulpSequence("lint","buildprod", "configclean");
}

// 如果是lint环境
if (process.env.NODE_ENV == "lint") {
    _tasks = ["lint"]
}

gulp.task("default", _tasks)