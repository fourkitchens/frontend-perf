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
      outputStyle: 'nested',
      onError: function(err, res) {
        log(c.red('Sass failed to compile'));
        log(c.red('> ') + err.file.split('/')[err.file.split('/').length - 1] + ' ' + c.underline('line ' + err.line) + ': ' + err.message);
      }
    }))
    .pipe(prefix("last 2 versions", "> 1%"))
    .pipe(gulp.dest('css'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('_sass/**/*.scss', ['css']);
});

// Default: load task listing
gulp.task('help', tasks);
gulp.task('default', ['help']);
