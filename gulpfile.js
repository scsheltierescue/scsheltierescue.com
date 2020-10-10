const gulp = require('gulp');
const sass = require('gulp-sass');
const cleancss = require('gulp-clean-css');
const shell = require('gulp-shell');
const uglify = require('gulp-uglify');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const pump = require('pump');
const cp = require('child_process');

// Clean
function clean() {
  return del(['css', 'js/vendor']);
}

// Styles
function styles() {
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
}

// Scripts + Uglify
function scripts(cb) {
  // Pump will pipe streams together and close all of them if one of them closes
  return pump(
    [
      gulp.src('bower_components/modernizr/modernizr.js'),
      uglify(),
      gulp.dest('js/vendor')
    ],
    cb
  )
}

// Templates
function templates() {
  return gulp
    .src('*.js', { read: false })
    .pipe(shell(['handlebars templates/ -f js/templates.js']));
}

// Watch
function watch() {
  // Watch .scss files
  gulp.watch([
    'bower_components/foundation/scss/**/*.scss',
    'scss/**/*.scss'
  ], styles);
  // Watch .handlebars files
  gulp.watch([
    'templates/**/*.handlebars'
  ], gulp.parallel(templates, scripts));
}

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(
  clean,
  gulp.parallel(
    templates,
    styles,
    scripts
  )
);

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.templates = templates;
exports.watch = watch;
exports.build = build;

/*
 * Define default task that can be called by just running `gulp` from cli
 */
exports.default = build;