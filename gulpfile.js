const gulp = require("gulp");
const connect = require("gulp-connect")
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");

gulp.task("server", function() {
    connect.server({
        root: "dist",
        livereload: true
    })
})
gulp.task("sass", function() {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"));
});
gulp.task("copy", function() {
    gulp.src("index.html").pipe(gulp.dest("dist"));
    gulp.src("img/**").pipe(gulp.dest("dist/img"));
    gulp.src("fonts/**").pipe(gulp.dest("dist/fonts"));
    gulp.src("html/**").pipe(gulp.dest("dist/html")).pipe(connect.reload());
    gulp.src("js/**").pipe(gulp.dest("dist/js"));
})
gulp.task("babel", function() {
    gulp.src("js/*.js")
        .pipe(babel({ "presets": ["es2015"] }))
        .pipe(gulp.dest("dist/js"))
})

gulp.task("watch", function() {
    gulp.watch("sass/*.scss", ["sass"]);
    gulp.watch(["img/**", "fonts/**", "html/**", "js/**", "index.html"], ["copy"]);
    gulp.watch("js/*.js", ["babel"]);
})

gulp.task("build", ["copy", "sass", "babel"]);
gulp.task("default", ["server", "watch"]);