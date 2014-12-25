var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('build:asset:javascript', function () {
    browserify('./src/asset/javascript/slide-master-3d.js')
        .bundle()
        .pipe(source('slide-master-3d.js'))
        .pipe($.streamify($.uglify()))
        .pipe(gulp.dest('./build/javascript'));
});

gulp.task('build:asset:scss', function () {
    return gulp.src('./src/asset/scss/*.scss')
        .pipe($.rubySass())
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build:live', function(){
    gulp.watch('./src/asset/scss/**/*.scss', ['build:asset:scss']);
    gulp.watch('./src/asset/javascript/**/*.js', ['build:asset:javascript']);
});