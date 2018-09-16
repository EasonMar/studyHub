const gulp = require('gulp');
const babel = require('gulp-babel');

// 进行流清洗(就是tree-shaking)
const rollup = require('gulp-rollup');

// 清洗过程中，process.env.NODE_ENV默认是拿不到的，所以要使用rollup-plugin-replace来替换其中内容：Replace strings in files while bundling them.
const replace = require('rollup-plugin-replace'); 

// 因为gulp是异步的，没法确定任务执行的顺序，要使用 gulp-sequence 来强制任务执行顺序：Run a series of gulp tasks in order.
const gulpSequence = require('gulp-sequence'); 

const eslint = require('gulp-eslint');

// 只编译node不认识的东西即可

let _tasks = ["builddev"];
if (process.env.NODE_ENV === 'lint') _tasks = ["lint"];

// 如果是上线环境
if (process.env.NODE_ENV === 'production') {
	_tasks = gulpSequence("buildprod","configclean"); // 返回的是函数
	gulp.task("default", _tasks);  // 生产环境不用watch了
}else{
	gulp.task("default", _tasks, () => {
		gulp.watch('./src/nodeuii/**/*.js', _tasks)
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
gulp.task('configclean', function() {
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

gulp.task("lint", () => {
    return gulp.src('src/nodeuii/**/*.js')
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
})