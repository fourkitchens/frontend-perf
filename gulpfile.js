// Gulp and node
var gulp = require('gulp');
var u = require('gulp-util');
var log = u.log;
var c = u.colors;
var tasks = require('gulp-task-listing');

// Basic workflow plugins
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// Performance workflow plugins
var uncss = require('gulp-uncss');

// -----------------------------------------------------------------------------
// Sass Task
// - Compiles Sass
// - Autoprefixes
// -----------------------------------------------------------------------------
gulp.task('sass', function() {
  return gulp.src('_sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested',
      onSuccess: function(css) {
        var dest = css.stats.entry.split('/');
        log(c.green('Sass compiled to ' + dest[dest.length - 1]));
      },
      onError: function(err, res) {
        log(c.red('Sass failed to compile'));
        log(c.red('> ') + err.file.split('/')[err.file.split('/').length - 1] + ' ' + c.underline('line ' + err.line) + ': ' + err.message);
      }
    }))
    .pipe(prefix("last 2 versions", "> 1%"))
    .pipe(gulp.dest('css'));
});

// -----------------------------------------------------------------------------
// UnCSS Task
// - Checks the site's usage of Bootstrap and strips unused styles out of files.
//
// Note: this task requires a local server to be running because it references
// the actual compiled site to calculate the unused styles.
// -----------------------------------------------------------------------------
gulp.task('uncss', function() {
  return gulp.src([
      'node_modules/bootstrap/dist/css/bootstrap.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.css'
    ])
    .pipe(uncss({
      html: [
        'http://localhost:4000/',
        'http://localhost:4000/audit/',
        'http://localhost:4000/foundation/',
        'http://localhost:4000/budgets/'
      ]
    }))
    .pipe(gulp.dest('css/'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('_sass/**/*.scss', ['sass']);
});

// Default: load task listing
gulp.task('help', tasks);
gulp.task('default', ['help']);
