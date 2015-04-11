# Frontend Performance Optimization

## Browser DevTools

> _Note: We are most familiar with Chrome and so all of the examples will follow suit. However, most of the tools demoed are available in all browsers._

Every browser has a powerful set of **development tools** (DevTools) lurking inside, waiting for you to unlock its full potential. Every type of browser performance problem, from page loads to animation jank, can be debugged directly in the browser. We will cover the most oft-used tools.

**[Network](https://developer.chrome.com/devtools/docs/network)** allows you to analyze and identify problematic HTTP traffic. The waterfall displays the full life of every HTTP request, from the moment your browser initiated it to the moment the last byte arrives. For most situations the Network tab is the first and best tool for debugging slow page loads.

<a class="more-info button" href="http://www.webperformancetoday.com/2010/07/09/waterfalls-101/">Blog post about reading waterfalls</a>

**[Timeline](https://developer.chrome.com/devtools/docs/timeline)** has a slighly generic sounding name, but it is very important when you have rendering issues. The most common rendering issues are animation related (e.g. a menu expands in a jerky fashion instead of smoothly). The timeline describes the steps the browser took to determine the layout of your webpage and then paint it on the screen.

<a class="more-info button" href="https://www.youtube.com/watch?v=Vp524yo0p44">Watch a video explaining the basics of Timeline</a>
## Drupal Modules

**[Magic](https://www.drupal.org/project/magic)** is a lightweight module that implements many frontend performance goodies. Many popular base themes were individually implementing these settings. Using Magic, you can:

* Move scripts to the footer
* Utilize the `async` attribute on CSS/JS
* Use additional config options for CSS aggregation.

<a class="more-info button" href="http://fourword.fourkitchens.com/article/magic-frontend-performance-all-themes">Blog post about Magic</a>

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

<a class="more-info button" href="http://fourword.fourkitchens.com/article/prerender-chrome-instant-page-loads">Blog post about prerendering</a>

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
