var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init({
        proxy: "localhost:8000"
    });


    gulp.src('')
        .pipe(webserver({
            livereload: true,
            //directoryListing: true,
            open: true
        }));


});

gulp.task('default',['server']);
