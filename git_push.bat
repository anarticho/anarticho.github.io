@echo off
setlocal

:: Prompt the user to enter a line of characters
set /p userInput=Commit message:

:: Add all changed files
git add .

:: Commit 
git commit -m "%userInput%"

:: Push
echo Do not forget to push using git bash push.

:: Wait 2 seconds to finish
timeout /t 2 /nobreak >nul

endlocal
