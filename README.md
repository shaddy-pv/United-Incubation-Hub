# United Incubation Hub

A modern web application for innovation and startup incubation, built with cutting-edge technologies.

## Project Overview

United Incubation Hub is a futuristic innovation and startup incubation platform that empowers the next generation of innovators with mentorship, funding, and cutting-edge resources.

## Getting Started

### Prerequisites

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation and Development

Follow these steps to get the project running locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd United-Incubation-Hub

# Step 3: Install the necessary dependencies
npm i

# Step 4: Start the development server with auto-reloading and an instant preview
npm run dev
```

The development server will start on `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## What technologies are used for this project?

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern React with hooks
- **shadcn-ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Radix UI** - Accessible component primitives

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── lib/           # Utility functions and configurations
├── hooks/         # Custom React hooks
├── assets/        # Static assets
└── App.tsx        # Main application component
```

## Deployment

To deploy this project:

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider
3. Configure your hosting provider to serve the `index.html` for all routes (SPA routing)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to United Incubation Hub.
