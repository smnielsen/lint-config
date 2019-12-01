#!/bin/sh

set -e

function log() {
  local msg=$1
  echo "    >> $msg"
}

export NPM_TOKEN=$NPM_TOKEN_PUBLISH

log "Bootstrapping linting monorepo"
yarn bootstrap
log "Choose version to publish"
yarn run version
log "Publishing changes"
yarn publishChanged

log "===> Successfully published new versions"