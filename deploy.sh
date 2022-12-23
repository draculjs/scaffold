#!/bin/sh
echo "DEPLOY START"
git checkout .
git pull
sh buildpm2.sh
cd dist
sh runpm2.sh
echo "DEPLOY ENDED"
