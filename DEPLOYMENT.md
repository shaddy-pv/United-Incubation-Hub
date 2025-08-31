# Deployment Guide for United Incubation Hub

## Quick Start Scripts

### Development Mode
- **Windows**: Double-click `start-webapp.bat` or run `start-webapp.ps1` in PowerShell
- **Linux/Mac**: Run `npm run dev` in terminal

### Production Mode
- **Windows**: Double-click `build-and-serve.bat`
- **Linux/Mac**: Run `npm run build && npm run preview`

## Manual Deployment Steps

### 1. Development Server
```bash
npm install          # Install dependencies (first time only)
npm run dev         # Start development server
```
Access at: http://localhost:8080

### 2. Production Build
```bash
npm run build       # Build for production
npm run preview     # Preview production build
```
Access at: http://localhost:4173

### 3. Deploy to Web Server
```bash
npm run build       # Creates 'dist' folder
```
Upload the contents of the `dist` folder to your web server.

## Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repo and auto-deploy
- **GitHub Pages**: Push the `dist` folder to gh-pages branch
- **AWS S3**: Upload `dist` folder contents to S3 bucket

### Traditional Web Server
- **Apache**: Copy `dist` contents to web root
- **Nginx**: Copy `dist` contents to web root
- **IIS**: Copy `dist` contents to web root

## Important Notes

1. **SPA Routing**: Configure your server to serve `index.html` for all routes
2. **HTTPS**: Enable HTTPS for production deployments
3. **Environment Variables**: Set any required environment variables on your hosting platform
4. **Domain**: Update meta tags in `index.html` with your actual domain

## Troubleshooting

- **Port conflicts**: Change port in `vite.config.ts` if 8080 is busy
- **Build errors**: Ensure all dependencies are installed with `npm install`
- **Runtime errors**: Check browser console for detailed error messages
