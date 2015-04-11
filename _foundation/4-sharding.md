---
title: Domain sharding
---

Domain sharding is when you set up multiple subdomains in order to "trick" the browser into opening more HTTP connections to a single website. Typically you'll see a domain that has several subdomains: css.example.com, js.example.com etc. Since a browser will only open a certain number of HTTP connections to a single host, domain sharding allows for more simultaneous connections to your server.
