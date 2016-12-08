var vueify = require('gulp-vueify');
var gulp=require('gulp');
gulp.task('vueify', function () {
  return gulp.src('src/*.vue')
    .pipe(vueify())
    .pipe(gulp.dest('./dist'));
});
