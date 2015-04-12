// Gulp and node
var gulp = require('gulp');
var u = require('gulp-util');
var log = u.log;
var c = u.colors;

// workflow plugins
var tasks = require('gulp-task-listing');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

// -----------------------------------------------------------------------------
// CSS Task
// -----------------------------------------------------------------------------
gulp.task('css', function() {
  return gulp.src('_sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'nested'
    }))
    .pipe(prefix("last 2 versions", "> 1%"))
    .pipe(gulp.dest('css'));
});

// Default: load task listing
gulp.task('help', tasks);
gulp.task('default', ['help']);
