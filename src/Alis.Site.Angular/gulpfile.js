/// <binding BeforeBuild='min' Clean='clean' />

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    inject = require("gulp-inject"),
    project = require("./project.json");

var paths = {
    webroot: "./" + project.webroot + "/",
    resources: "./" + project.siteResources + "/"
};
paths.angularJs = paths.resources + "angularJs/";
paths.jsroot = paths.resources + "js/**/*.js";
paths.minJs = paths.resources + "js/**/*.min.js";
paths.css = paths.resources + "css/**/*.css";
paths.minCss = paths.resources + "css/**/*.min.css";
paths.concatJs = "js/site.min.js";

paths.concatJsDest = paths.webroot + paths.concatJs;//call dest full or some such?
paths.concatCss = "css/site.min.css";
paths.concatCssDest = paths.webroot + paths.concatCss;


gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

gulp.task("min:js", function () {
    gulp.src([paths.resources + "js/jquery.js", paths.resources + "js/angular.js", paths.jsroot, "!" + paths.minJs])
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);

gulp.task("inject", function () {
    gulp.src("./Views/Shared/_Layout.cshtml")
        .pipe(inject(gulp.src(paths.concatJsDest, { read: false }), {
            transform: function(filepath) {
                return '<script src="' + filepath.substring(paths.webroot.length - 2) + '"></script>';
            }
        }))
        .pipe(inject(gulp.src(paths.concatCssDest, { read: false }), {
            transform: function (filepath) {
                return '<link href="' + filepath.substring(paths.webroot.length - 2) + '" rel="stylesheet">';
            }
        }))
    .pipe(gulp.dest("./Views/Shared/"));      
});

gulp.task("inject:AngularConfig:dev", function () {
    gulp.src("./Views/**/*.cshtml")
        .pipe(inject(gulp.src(paths.webroot + "angularJs/config.dev.js", { read: false }), {
            starttag: '<!-- inject:angularConfig:{{ext}} -->',
            transform: function(filepath) {
                return '<script src="' + filepath.substring(paths.webroot.length - 2) + '"></script>';
            }
        }))
    .pipe(gulp.dest("./Views"));  
});
gulp.task("inject:AngularConfig:live", function () {
    gulp.src("./Views/**/*.cshtml")
        .pipe(inject(gulp.src(paths.webroot + "angularJs/config.js", { read: false }), {
            starttag: '<!-- inject:angularConfig:{{ext}} -->',
            transform: function (filepath) {
                return '<script src="' + filepath.substring(paths.webroot.length - 2) + '"></script>';
            }
        }))
    .pipe(gulp.dest("./Views"));
    // It's not necessary to read the files (will speed up things), we're only after their paths:       
});

gulp.task("clean:angularJs", function (cb) {
    rimraf(paths.webroot + "angularJs", cb);
});

gulp.task('copyAngular', ['clean:angularJs'], function () {
    gulp.src(paths.angularJs + '/**/*').pipe(gulp.dest(paths.webroot + "angularJs"));
});