var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var del = require('del');

// Clean
gulp.task('clean', function(cb) {
  del(['css'], cb);
});

// Styles
gulp.task('styles', ['clean'], function() {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: ['bower_components/foundation/scss']
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// Default
gulp.task('default', ['styles']);

// Watch
gulp.task('watch', ['clean'], function() {
  // Watch .scss files
  gulp.watch([
    'bower_components/foundation/scss/**/*.scss',
    'scss/**/*.scss'
    ], ['styles']);
});
