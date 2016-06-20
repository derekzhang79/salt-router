// https://github.com/gulpjs/gulp/tree/master/docs
// https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');

// https://www.npmjs.com/package/gulp-webpack/
var webpack = require("gulp-webpack");

// https://www.npmjs.com/package/gulp-watch/
var watch = require('gulp-watch');

// https://github.com/terinjokes/gulp-uglify
var uglify = require('gulp-uglify');

// https://github.com/gulpjs/gulp/blob/master/docs/recipes/server-with-livereload-and-css-injection.md
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// https://www.npmjs.com/package/gulp-concat/
var concat = require('gulp-concat');
// watch uglify

gulp.task('min',function(){
    gulp.src('salt-router.js')
    .pipe(concat('salt-router.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./'))
})


// watch files for changes and reload
gulp.task('watch', function() {
    // console.log('__dirname:' + __dirname);
    browserSync({
        https: false,
        server: {
            baseDir: './'
        },
        open: "external"
    });
});

