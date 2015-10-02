var gulp         = require('gulp');
var sass         = require('gulp-sass');
var minifycss    = require('gulp-minify-css');
var uglify       = require('gulp-uglify');
var del          = require('del');
var autoprefixer = require('gulp-autoprefixer');

// Clean
gulp.task('clean', function(cb) {
  del(['css', 'js/vendor'], cb);
});

// Styles
gulp.task('styles', ['clean'], function() {
  return gulp.src('scss/app.scss')
    .pipe(sass({
      includePaths: ['bower_components/foundation/scss']
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'IE >= 9'],
      cascade: false
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// Uglify
gulp.task('uglify', ['clean'], function() {
  return gulp.src('bower_components/modernizr/modernizr.js')
    .pipe(uglify())
    .pipe(gulp.dest('js/vendor'))
});

// Default
gulp.task('default', ['styles', 'uglify']);

// Watch
gulp.task('watch', ['clean'], function() {
  // Watch .scss files
  gulp.watch([
    'bower_components/foundation/scss/**/*.scss',
    'scss/**/*.scss'
    ], ['styles']);
});
