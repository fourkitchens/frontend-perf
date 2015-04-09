# Performance Budgets

The main difficulty most teams overcome is actually putting performance front and center during a normal workflow. Many problems are much harder to solve after weeks of work have been built on top of them. One way of finding problems early and often is the use of a **performance budget**.

Just like a monetary budget, a performance budget places limits on your site, and as you develop features the budget keeps the site in check.

> Note: this is just as much a shift in workplace culture as it is process.
> Sometimes your client or product owner cannot or will not prioritize
> performance, so even with a warning system in place, you might not be
> afforded the time to fix it.

## Types of budgets

**Time limits** are the highest-level metric that can be measured, and are the most effective. The most frequently used time-limit is the _Speed Index_ available on WebPageTest.org, which uses a combination of many factors to reliably determine when your pages become visible.

**Requests** are a simple thing to measure but might not always tell the whole story. For instance, you could place a limit of four CSS requests, but if one of them has 250K of inline base64 data added during development, it will not trigger a warning as long as you still only have four CSS files.

## Tools

**[grunt-perfbudget](https://github.com/tkadlec/grunt-perfbudget)** Uses the WebPageTest API to measure the _Speed Index_ of your site.

* Blog: http://timkadlec.com/2014/05/performance-budgeting-with-grunt/

**[grunt-phantomas](https://github.com/stefanjudis/grunt-phantomas)** is a tool that allows you to collect trends of performance data. Unlike WPT _Speed Index_, which combined many factors into a single, digestible number, `grunt-phantomas` exposes the raw data and graphs its progress over time. It has built-in support for tests, allowing you to set a limit on any number of factors and easily spot the failing tests.

[insert image of graphs]

## Read more

You can see a large collection of curated tools, articles, and tutorials at http://perf-tooling.today/
