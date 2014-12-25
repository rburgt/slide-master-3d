var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


gulp.task('build:asset:scss', function () {
    gulp.src('./src/asset/scss/*.scss')
        .pipe($.rubySass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build:live', function(){
    gulp.watch('./src/asset/scss/**/*.scss', ['build:asset:scss']);
})