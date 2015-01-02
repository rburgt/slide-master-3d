var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var browserify = require('browserify');
var source = require('vinyl-source-stream');


var browserSync = require('browser-sync');
var reload = browserSync.reload;


// build all
gulp.task('build', [
    'build:asset',
    'build:site'
]);

// build, start watch tasks and start browsersync webserver to show build results
gulp.task('build:serve', ['build', 'build:live'], function(){
    browserSync.init(null, {
        server: {
            baseDir: ['./build']
        },
        notify: false,
        startPath: '/site'
    });

    gulp.watch('./build/**/*', (function(){
        var cb;
        return function(){
            clearTimeout(cb);
            cb = setTimeout(reload, 60);
        };
    })());
});


gulp.task('build:live', function(){
    gulp.watch('./src/asset/scss/**/*.scss', ['build:asset:scss']);
    gulp.watch('./src/asset/javascript/**/*.{js,html}', ['build:asset:javascript']);
    gulp.watch('./src/site/template/**/*.html', ['build:site:template']);
});


// build all asset tasks
gulp.task('build:asset', [
    'build:asset:javascript',
    'build:asset:scss'
]);


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
        .pipe($.ignore('**/*.css.map'))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('./build/css'));
});


gulp.task('build:site', [
    'build:site:template'
]);

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