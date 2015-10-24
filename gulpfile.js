var gulp =require("gulp");
var exec = require("child_process").exec;
var less = require("gulp-less");

gulp.task("default", function() {
  exec("node server.js", function (err, stdout, stderr) {
   console.log(stdout);
   console.log(stderr);
   cb(err);
 });
});

gulp.task("build-less", function(){
    return gulp.src("./content/styles.less")
        .pipe(less())
        .pipe(gulp.dest("./public/content"));
});

gulp.watch("./content/**/*.less", [
  "build-less"
]);
