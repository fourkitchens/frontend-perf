# Frontend Performance Optimization

## Drupal Modules

**[Magic](https://www.drupal.org/project/magic)** is a lightweight module that implements many frontend performance goodies. Many popular base themes were individually implementing these settings. Using Magic, you can:

* Move scripts to the footer
* Utilize the `async` attribute on CSS/JS
* Use additional config options for CSS aggregation.

* Blog: http://fourword.fourkitchens.com/article/magic-frontend-performance-all-themes

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
