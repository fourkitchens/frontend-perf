# Frontend Performance Optimization

## Drupal Modules

**[Magic](https://www.drupal.org/project/magic)** is a lightweight module that implements many frontend performance goodies. Many popular base themes were individually implementing these settings. Using Magic, you can:

* Move scripts to the footer
* Utilize the `async` attribute on CSS/JS
* Use additional config options for CSS aggregation.

Further reading: http://fourword.fourkitchens.com/article/magic-frontend-performance-all-themes

**[Advanced CSS/JS Aggregation](https://www.drupal.org/project/advagg)** is another more advanced option, when your needs have outgrown Magic's functionality.

* All of Magic's features, plus...
* Stampede protection protects your Drupal site when aggregates are re-generated.
* Prevent more than 4095 CSS selectors in an aggregate. (old IE bug)
* Pre-compress aggregates. Faster than on-demand compression.
* Configure the number of aggregates created.
* Minification of JS (not available in Drupal 7 core).
* Minify and/or inline CSS and JS.

**[Modernizr](https://www.drupal.org/project/modernizr)** provides integration for the Modernizr JS library. Its primary performance-oriented feature is the ability to use `Modernizr.load()` to asynchronously request assets based on the feature detection it performs on each individual browser.

**[CDN](https://www.drupal.org/project/CDN)** provides integration with Content Delivery Networks, or CDNs. It means that you can host multiple copies of your assets in different geographical locations. Your visitors then receive copies of your assets from the location nearest to them, decreasing latency and speeding up their page loads.

**[pre](https://www.drupal.org/sandbox/joel/2121797)** allows you to implement `prefetch`, `prerender`, and other speculative requests via simple `<link>` tags. These speculations should always be backed by analytics observations, but when properly implemented can really help the perceived performance of your site.

* Blog: http://fourword.fourkitchens.com/article/prerender-chrome-instant-page-loads

## Workflow Automation

Sometimes installing a module won't cut it, and you'll need to rely on additional tools to improve your workflow itself. In the context of Drupal these are often handled within your theme.

### Automation tools

**[npm](https://www.npmjs.com/)** is the package manager for JavaScript. Just how GitHub is the defacto place to develop code, npm is the defacto place to publish it and easily download it.

**[gulp](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)** is a task manager specifically designed around node.js' strengths. You have to code a little bit compared to Grunt, but it is noticeably faster in almost all cases.

**[grunt](http://gruntjs.com/getting-started)** is Gulp's predecessor. While slightly simpler to understand and configure, Grunt is often much slower due to its internal arcitecture decisions. Some performance tools are only available "out of the box" via Grunt.

With these tools you will be able to capture repetitive tasks and run them automatically whenever you need them. It might be as frequent as a file save, or only once per deploy. But either way, having an automated workflow is less error-prone and more reliable than manually remembering and executing the tasks.

### Optimization tools

Here is a list of tools we frequently use in our frontend workflow:

* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
* [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css)
* [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
* [gulp-uglify](https://www.npmjs.com/package/gulp-uglify)
* [critical](https://github.com/addyosmani/critical)
