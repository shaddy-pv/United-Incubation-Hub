@echo off
echo Building United Incubation Hub for production...
echo.
npm run build
echo.
echo Build completed! Starting production server...
echo.
echo The webapp is now available at http://localhost:4173
echo.
echo Press Ctrl+C to stop the server
echo.
npm run preview
pause
