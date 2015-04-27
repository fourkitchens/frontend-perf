#!/bin/bash

# This script is extremely small because we're looking to avoid the use of
# particular features of CSS. So a successful test will mean that we see a
# return value of 0. Since 0 is the standard exit status for a bash script,
# all we have to do is return the number of results found from grep.

# The commands look for 'face' or 'url' within the critical CSS. Both of these
# properties will cause the browser to make an HTTP request, but since the
# critical CSS is supposed to be small and inline, it should *always* avoid
# making external calls. External calls completely defeat the purpose of
# inlining CSS in your HTML.

FACE=`grep -c 'face' _includes/critical.css`
URL=`grep -c 'url' _includes/critical.css`

if [ "$FACE" == "0" ] && [ "$URL" == "0" ]; then
  echo "Critical: ✔︎ Yay! The generated CSS makes zero external requests."
  exit 0
else
  echo "Critical: ✘ Rats! The generated CSS makes external requests."
  exit 1
fi
