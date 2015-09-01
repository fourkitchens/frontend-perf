---
title: Advanced CSS/JS Aggregation
type: tool

links:
  -
    text: AdvAgg
    type: official
    url: https://www.drupal.org/project/advagg
  -
    text: using AdvAgg to inline critical CSS
    type: blog
    url: https://fourword.fourkitchens.com/article/use-grunt-and-advagg-inline-critical-css-drupal-7-theme
---

AdvAgg is another more advanced option, when your needs have outgrown Magic's functionality.

* All of Magic's features, plus...
* Stampede protection protects your Drupal site when aggregates are re-generated.
* Prevent more than 4095 CSS selectors in an aggregate. (old IE bug)
* Pre-compress aggregates. Faster than on-demand compression.
* Configure the number of aggregates created.
* Minification of JS (not available in Drupal 7 core).
* Minify and/or inline CSS and JS.
