#!/bin/sh

function log() {
  local msg=$1
  echo ">> $msg"
}

export NPM_TOKEN=$NPM_TOKEN_PUBLISH

yarn install --frozen-lockfile
yarn bootstrap
yarn publishChanged