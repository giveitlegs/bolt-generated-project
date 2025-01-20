@echo off
    npm install
    if %errorlevel% equ 0 (
      npm run deploy
    ) else (
      echo Installation failed
    )
