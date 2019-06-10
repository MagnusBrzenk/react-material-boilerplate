#! /bin/bash

clear

devPort='3000'
if [[ ! -z $1 ]]; then
  devPort=$1
fi

echo """
====================================
STARTING DEV CLIENT ON PORT $devPort
====================================
"""

TS_NODE_PROJECT=tsconfig.webpack.json \
  DEV_PORT=$devPort \
  DEBUG=true \
  NODE_ENV=development \
  ./node_modules/.bin/webpack-dev-server --mode development --hot --progress --watch --color --port=$devPort --config webpacking/webpack.client.config.ts
