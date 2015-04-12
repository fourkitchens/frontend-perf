// Gulp and node
var gulp = require('gulp');
var gutil = require('gulp-util');
var color = gutil.colors;

// workflow plugins
var tasks = require('gulp-task-listing');

// Default: load task listing
gulp.task('help', tasks);
gulp.task('default', ['help']);
