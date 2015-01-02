var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserify = require('browserify');
var source = require('vinyl-source-stream');


gulp.task('build:asset:javascript', function () {
    browserify('./src/asset/javascript/slide-master-3d.js')
        .bundle()
        .pipe(source('slide-master-3d.js'))
        //.pipe($.streamify($.uglify()))
        .pipe(gulp.dest('./build/javascript'));
});

gulp.task('build:asset:scss', function () {
    return gulp.src('./src/asset/scss/*.scss')
        .pipe($.rubySass({
            loadPath: [
                'src/asset/scss',

                // allows loading of bower_components
                'node_modules'
            ]
        }))
        .pipe($.autoprefixer())
        .on('error', function (err) { console.log(err.message); })
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build:live', function(){
    gulp.watch('./src/asset/scss/**/*.scss', ['build:asset:scss']);
    gulp.watch('./src/asset/javascript/**/*.js', ['build:asset:javascript']);

    gulp.watch('./src/site/template/**/*.html', ['build:site:template']);
});


gulp.task('build:site:template', function () {
    return gulp.src( './src/site/template/*.html')
        .pipe($.swig({
            defaults: {
                cache: false
            }
        }))
        .on('error', function(error) {
            console.log(error);
        })
        .pipe($.htmltidy({
            doctype: 'html5',
            hideComments: false,
            'fix-bad-comments': false,
            wrap: 0,
            indent: true,
            'indent-spaces': 4
        }))
        .pipe(gulp.dest('./build/site'))
});