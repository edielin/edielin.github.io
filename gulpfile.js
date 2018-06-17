const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const minCss = require('gulp-minify-css')
const minimist = require('minimist'); // 用來讀取指令轉成變數
const browserSync = require('browser-sync');

// production || development
// # gulp --env production
const envOptions = {
    string: 'env',
    default: { env: 'development' }
};
const options = minimist(process.argv.slice(2), envOptions);
console.log(options);

gulp.task('sass', function () {
    // PostCSS AutoPrefixer
    var processors = [
        autoprefixer({ //加前綴詞
            browsers: ['last 5 version'],
        })
    ];

    return gulp.src(['./scss/**/*.scss']) //SCSS來源資料夾
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.sass({
            outputStyle: 'nested',
            includePaths: ['./node_modules/bootstrap/scss']
        })
            .on('error', $.sass.logError))
        .pipe($.postcss(processors))
        .pipe(minCss())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('./style/')) //輸出CSS資料夾
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: { baseDir: './' },
        reloadDebounce: 2000
    })
});

gulp.task('watch', function () {
    gulp.watch(['./scss/**/*.scss'], ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
});

gulp.task('build', ['sequence'])

gulp.task('default', ['sass', 'watch', 'browserSync']);