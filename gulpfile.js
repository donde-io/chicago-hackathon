var gulp = require('gulp');
var webserver = require('gulp-webserver');
var browserSync = require('browser-sync');

gulp.task('webserver', function() {
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

//gulp.task('browser-sync', function() {
//    browserSync.init({
//        proxy: "192.168.33.21"
//    });
//});