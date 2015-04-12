// Gulp and node
var gulp = require('gulp');
var u = require('gulp-util');
var c = u.colors;

// workflow plugins
var tasks = require('gulp-task-listing');

// Default: load task listing
gulp.task('help', tasks);
gulp.task('default', ['help']);
