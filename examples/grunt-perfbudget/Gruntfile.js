// The settings var includes your WebPageTest API Key. To use yours, first go to
// the following URL and follow the instructions to get a key:
//
// @see http://www.webpagetest.org/forums/showthread.php?tid=466
//
// Now make a file called settings.json in the same dir as this
// Gruntfile and include an object like this:
//
// {
//    "key": "your-web-page-test-api-key"
// }
var settings = require('./settings.json');

// This is the normal Gruntfile
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    perfbudget: {
      default: {
        // See all options here:
        // https://github.com/tkadlec/grunt-perfbudget#options
        options: {
          url: 'https://fourkitchens.com',
          key: settings.key,
          budget: {
            render: 800,
            requests: 12
          }
        }
      }
    }
  });

  // Load the perfbudget plugin
  grunt.loadNpmTasks('grunt-perfbudget');

  // Run the perfbudget task by default
  grunt.registerTask('default', ['perfbudget']);
};
