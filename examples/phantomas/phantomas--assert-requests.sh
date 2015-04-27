#!/bin/bash
LIMIT=5

echo "Phantomas: limit HTTP requests to $LIMIT"
phantomas --url http://localhost:4000 --assert-requests=$LIMIT >/dev/null

if [ $? -eq 0 ]
then
  echo "Phantomas: ✔︎ Yay! The site makes $LIMIT or fewer HTTP requests."
  exit 0
else
  echo "Phantomas: ✘ Rats! The site makes more than $LIMIT HTTP requests."
  exit 1
fi
