var gulp = require('gulp'),
  watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('static/**/site.scss', ['sass']);
  gulp.watch('static/js/devopsdays.js', ['js-concat']);
})
