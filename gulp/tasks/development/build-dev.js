const gulp = require('gulp'),
  runSequence = require('run-sequence');

gulp.task('dev', function (callback) {
  runSequence(
      'watch',
    callback
  )
})
