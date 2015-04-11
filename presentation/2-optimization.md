---
---

# Frontend Performance Optimization

## Browser DevTools

> _Note: We are most familiar with Chrome and so all of the examples will follow suit. However, most of the tools demoed are available in all browsers._

Every browser has a powerful set of **development tools** (DevTools) lurking inside, waiting for you to unlock its full potential. Every type of browser performance problem, from page loads to animation jank, can be debugged directly in the browser. We will cover the most oft-used tools.

<!-- Output Jekyll list of browser tools -->

## Drupal Modules

Drupal offers a number of modules specifically designed to improve frontend performance. Combined with a well-made theme, these modules can help your Drupal sites fly!

<!-- Output Jekyll list of Drupal tools -->

## Workflow Automation

Sometimes installing a module won't cut it, and you'll need to rely on additional tools to improve your workflow itself. In the context of Drupal these are often handled within your theme.

### Automation tools

**[npm](https://www.npmjs.com/)** is the package manager for JavaScript. Just how GitHub is the defacto place to develop code, npm is the defacto place to publish it and easily download it.

**[gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)** is a task manager specifically designed around node.js' strengths. You have to code a little bit compared to Grunt, but it is noticeably faster in almost all cases.

**[grunt](http://gruntjs.com/getting-started)** is Gulp's predecessor. While slightly simpler to understand and configure, Grunt is often much slower due to its internal arcitecture decisions. Some performance tools are only available "out of the box" via Grunt.

With these tools you will be able to capture repetitive tasks and run them automatically whenever you need them. It might be as frequent as a file save, or only once per deploy. But either way, having an automated workflow is less error-prone and more reliable than manually remembering and executing the tasks.

### Optimization tools

Here is a list of tools we frequently use in our frontend workflow:

**[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)** compresses binary images and minifies SVG files, making them as small as possible.

**[gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)** minifies CSS, removing comments and unnecessary whitespace.

**[gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)** minifies your HTML, removing comments and unnecessary whitespace.

**[gulp-uglify](https://www.npmjs.com/package/gulp-uglify)** minifies your JavaScript, removing whitespace and long variable names.

**[gulp-concat](https://www.npmjs.com/package/gulp-concat)** combines files together. This is often used in conjunction with uglify to create JS aggregates.

**[critical](https://github.com/addyosmani/critical)** helps identify and isolate CSS that is critical to your initial page render. Since only a portion of your site is displayed initially, identifying these bits of critical CSS and serving them inline along with your HTML can help mobile phones in particular render the page faster.
