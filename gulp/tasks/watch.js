const gulp = require("gulp");
const watch = require("gulp-watch");
const browserSync = require("browser-sync").create();

gulp.task("watch", ['cssInject', 'scriptsRefresh'], function(){

    browserSync.init({
        notify: false, //to hide the notification
        server: {
            baseDir : "app"
        }
    });

    watch("./app/index.html", function () {
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function () {
        gulp.start("cssInject");
    });

    watch('./app/assets/scripts/**/*.js', function () {
        gulp.start("scriptsRefresh");
    });

});

gulp.task("scriptsRefresh", ['scripts'], function () {
   browserSync.reload();
});

gulp.task("cssInject", ["styles"], function () {
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
});