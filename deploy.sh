#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vitepress/dist

git add -A
git commit -m "deploy: auto"
git push https://github.com/YanPanMichael/astart-cli.git main:vp-page
