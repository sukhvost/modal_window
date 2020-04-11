const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const server = require('browser-sync').create();
const clean = require('gulp-clean');

gulp.task('sass', function() {
    return gulp.src(['./static/*.scss', './node_modules/bootstrap/scss/bootstrap.scss'])
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('./build/style'))
        .on('end', server.stream)
})

gulp.task('script', function() {
    return gulp.src(['./static/*.js', './node_modules/jquery/dist/jquery.js', './node_modules/bootstrap/dist/js/bootstrap.js'])
        .pipe(gulp.dest('./build/js'))
        .on('end', server.stream)
});


gulp.task('serve', function() {
    server.init({
        server: {
            baseDir: './build'
        }
    });
    server.watch('./build', server.reload)
});


gulp.task('clean', function() {
    return gulp.src(['./build/js', './build/style'], { read: false })
        .pipe(clean());
});


gulp.task('watch', function() {
    gulp.watch('./static/*.scss', gulp.series('sass'))
    gulp.watch('./static/*.js', gulp.series('script'))
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('sass', 'script'),
    gulp.parallel('watch', 'serve')
));