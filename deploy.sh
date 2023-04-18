#!/usr/bin/env zsh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'dashuai.life' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/dashuai2ml/dashuai.github.io.git master:gh-pages

cd -