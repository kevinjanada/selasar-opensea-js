#!/bin/bash
tsc

FILE=../opensea-js-local-test/frontend/node_modules/opensea-js
if test -d "$FILE"; then
  echo "$FILE exists."
else
  mkdir "$FILE"
fi

cp -r lib "$FILE"
cp -r node_modules "$FILE"
cp -r CHANGELOG.md "$FILE"
cp -r LICENSE "$FILE"
cp -r README.md "$FILE"
cp -r package.json "$FILE"

