# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Calculator

[![Deploy to GitHub Pages](https://github.com/your-username/react-calculator/actions/workflows/deploy.yml/badge.svg)](https://github.com/kendradias/ReactCalculator/actions/workflows/deploy.yml)

A React Native calculator application with Docker development environment and automated GitHub Pages deployment.

## Live Demo

Visit the live application at: [https://your-username.github.io/react-calculator](https://kendradias.github.io/ReactCalculator)

## Technology Stack

- React
- Vite
- Docker
- GitHub Actions
- GitHub Pages

## Development Environment Setup

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

### Local Development with Docker

1. Clone the repository:
   ```bash
   git clone https://github.com/kendradias/ReactCalculator.git
   ```

2. Start the development environment:
   ```bash
   docker-compose up
   ```

3. Access the application at [http://localhost:5173](http://localhost:5173)

### Local Development without Docker

1. Clone the repository
   ```bash
   git clone https://github.com/kendradias/ReactCalculator.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Access the application at [http://localhost:5173](http://localhost:5173)

## Deployment

The application is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

To manually trigger a deployment:
1. Go to the Actions tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Configuration Details

### Docker Development Environment

- `Dockerfile.dev`: Development-focused Dockerfile with hot reload capability
- `docker-compose.yml`: Configures the development environment with volume mapping for hot reloading

### GitHub Pages Configuration

- `vite.config.js`: Configured with a base path for GitHub Pages deployment
- `package.json`: Contains the homepage field pointing to the GitHub Pages URL

### CI/CD Pipeline

- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Automated build and deployment to GitHub Pages
- Caching for dependencies to speed up builds
