const gulp = require('gulp');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const shell = require('gulp-shell');
const uglify = require('gulp-uglify');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const pump = require('pump');

// Clean
gulp.task('clean', () => {
  return del(['css', 'js/vendor']);
});

// Styles
gulp.task('styles', ['clean'], () => {
  return gulp.src('scss/app.scss')
    .pipe(sass({
        includePaths: ['bower_components/foundation/scss']
      })
      .on('error', sass.logError)
    )
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'IE >= 9'],
      cascade: false
    }))
    .pipe(cleancss({ debug: true }, (details) => {
      console.log(`Original - ${details.name}: ${details.stats.originalSize}`);
      console.log(`Minified - ${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(gulp.dest('css'));
});

// Uglify
gulp.task('uglify', ['clean'], (cb) => {
  // Pump will pipe streams together and close all of them if one of them closes
  pump(
    [
      gulp.src('bower_components/modernizr/modernizr.js'),
      uglify(),
      gulp.dest('js/vendor')
    ],
    cb
  )
});

// Templates
gulp.task('templates', shell.task('handlebars templates/ -f js/templates.js'));

// Default
gulp.task('default', ['styles', 'templates', 'uglify']);

// Watch
gulp.task('watch', ['clean', 'templates', 'uglify', 'styles'], () => {
  // Watch .scss files
  gulp.watch([
    'bower_components/foundation/scss/**/*.scss',
    'scss/**/*.scss'
  ], ['styles']);
  // Watch .handlebars files
  gulp.watch([
    'templates/**/*.handlebars'
  ], ['templates', 'uglify']);
});
