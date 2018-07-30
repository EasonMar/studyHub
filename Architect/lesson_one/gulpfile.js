const gulp = require('gulp');
const babel = require('gulp-babel');

// 只编译node不认识的东西即可

let _task = ["builddev"]

// 如果是上线环境
if (process.env.NODE_ENV === 'production') _task = [];

gulp.task("default", _task, () => {
    gulp.watch('./src/nodeuii/**/*.js', _task)
})

gulp.task("builddev", () => {
    gulp.src('src/nodeuii/**/*.js')
        .pipe(babel({
            babelrc: false,
            presets: ['env']
        }))
        .pipe(gulp.dest('dist'));
    
    gulp.src('src/nodeuii/**/*.html')
        .pipe(gulp.dest('dist'));
})