var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

    var scripts = [
      'node_modules/jquery/dist/jquery.js',
      'node_modules/tether/dist/js/tether.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/bootstrap-sortable/Scripts/bootstrap-sortable.js',
      'node_modules/moment/moment.js',
      'node_modules/jssocials/dist/jssocials.js',
      'static/js/devopsdays.js'
    ]

gulp.task('js-concat', function(){
    return gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        // .pipe(gulp.dest('dist'))
        .pipe(rename('devopsdays-min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/js'));
});
