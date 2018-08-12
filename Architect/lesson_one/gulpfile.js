const gulp = require('gulp');
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');
const replace = require('rollup-plugin-replace');
const gulpSequence = require('gulp-sequence');

// 只编译node不认识的东西即可

let _task = ["builddev"];

// 如果是上线环境
if (process.env.NODE_ENV === 'production') {
	_task = gulpSequence("buildprod","configclear"); // 返回的是函数
	gulp.task("default", _task);  // 生产环境不用watch了
}else{
	gulp.task("default", _task, () => {
		gulp.watch('./src/nodeuii/**/*.js', _task)
	})
}



gulp.task("builddev", () => {
    gulp.src('src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
})

gulp.task("buildprod", () => {
    gulp.src('src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            ignore: ["./src/nodeuii/config/*.js"], // 忽略配置文件config, 交给后面rollup去处理
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
})

// 怎么理解这部分？反正输出的是清洗过的config配置文件
gulp.task('configclear', function() {
    gulp.src('src/nodeuii/**/*.js')
        // transform the files here.
        .pipe(rollup({
            // any option supported by Rollup can be set here.
            output: {
            	format: "cjs" // 指定为commonjs规范
            },
            input: './src/nodeuii/config/index.js', // 入口文件
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production') // 这里必须用JSON.stringify
                })
            ]
        }))
        .pipe(gulp.dest('./dist'));

    // Rollup 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码
    // 清洗过程中，process.env.NODE_ENV默认是拿不到的，所以要使用gulp-replace替换掉process.env.NODE_ENV
});