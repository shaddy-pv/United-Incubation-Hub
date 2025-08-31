Write-Host "Starting United Incubation Hub..." -ForegroundColor Green
Write-Host ""
Write-Host "This will start the development server on http://localhost:8080" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host ""

try {
    npm run dev
} catch {
    Write-Host "Error starting the server. Make sure you have Node.js installed and dependencies are installed." -ForegroundColor Red
    Write-Host "Run 'npm install' first if needed." -ForegroundColor Yellow
}

Read-Host "Press Enter to exit"
