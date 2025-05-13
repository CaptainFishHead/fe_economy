@echo off
setlocal enabledelayedexpansion

REM 出错时终止
set ERRLEV=0

REM 构建
call npm run build
if errorlevel 1 goto :error

REM 进入构建目录
cd dist

REM 初始化 git 并推送到 gh-pages 分支
git init
git add -A
git commit -m "deploy"

REM 设置你自己的 GitHub 仓库地址
git push -f git@github.com:USERNAME/REPO.git main:gh-pages

cd ..
goto :eof

:error
echo Build failed.
exit /b 1
