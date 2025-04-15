# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# React Calculator

[![Deploy to GitHub Pages](https://github.com/kendradias/ReactCalculator/actions/workflows/deploy.yml/badge.svg)](https://github.com/kendradias/ReactCalculator/actions/workflows/deploy.yml)

A React Native calculator application with Docker development environment and automated GitHub Pages deployment.

## Live Demo

Visit the live application at: [https://kendradias.github.io/ReactCalculator](https://kendradias.github.io/ReactCalculator)


## Summary

I have implemented a CI/CD pipeline using Docker for local dev, and Github Actions for automated deployments to github pages. The development environment is containerized with Docker, using Node.js Apline image as suggested. This enables hot reloading, and docker-compose.yml allows for realtime code updates during development without requiring a container rebuild. 

For deployment, I decided to go with JamesIves/gitub-pages-deploy-action instead of GitHub native Pages - I was running into artifact handling issues and could not figure out what I was missing. It creates a dedicated gh-pages branch containing the built application which is then served by github.

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
This project uses the JamesIves/github-pages-deploy-action, a reliable third-party action for GitHub Pages deployments. The workflow:

Builds the React application
Deploys the build output to the gh-pages branch
GitHub Pages serves the content from this branch

To manually trigger a deployment:

Go to the Actions tab in your GitHub repository
Select the "Deploy to GitHub Pages" workflow
Click "Run workflow"

Note: After initial setup, ensure GitHub Pages settings are configured to deploy from the gh-pages branch.

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
