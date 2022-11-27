#!/bin/sh
echo "BUILD FRONT START"

#FRONTEND
echo "BUILDING FRONTEND"
cd apps/frontend/
echo "Frontend npm install..."
npm install
echo "Frontend buildpm2..."
npm run buildpm2

echo "BUILD FRONT ENDED"
