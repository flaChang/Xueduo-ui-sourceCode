rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:flaChang/Dora-UI-website.git &&
git push -f -u origin main &&
cd - 
echo https://flachang.github.io/Dora-UI-website/index.html#/