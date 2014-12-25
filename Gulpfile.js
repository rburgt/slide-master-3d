var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


gulp.task('build:asset:scss', function () {
    gulp.src('./src/asset/scss/*.scss')
        .pipe($.rubySass())
        .pipe(gulp.dest('./build/css'));
});