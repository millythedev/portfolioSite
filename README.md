# Emilio Cleveland's Portfolio

Personal portfolio site for Emilio Cleveland, a Computer Science student at Texas A&M University. Built with React, TypeScript, Vite, and Tailwind CSS, and hosted on GitHub Pages.

Live site: https://millythedev.github.io/portfolioSite/

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Bun (package manager) and Node.js
- GitHub Pages (hosting) with automatic deployment

## Running Locally

Requires Node.js 20 or higher and Bun.

1. Clone the repository:

   ```bash
   git clone https://github.com/millythedev/portfolioSite.git
   cd portfolioSite
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Start the development server:

   ```bash
   bun run dev
   ```

4. Open http://localhost:5173/portfolioSite/ in your browser.

## Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the development server |
| `bun run build` | Build for production |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run the linter |
| `bun run format` | Format the code |

## Project Structure
src/
  components/   React components
  hooks/        Custom React hooks
  utils/        Utility functions
  styles/       CSS files
  assets/       Images and fonts
  App.tsx       Root component
  main.tsx      Entry point


## Deployment

A GitHub Actions workflow builds the site and deploys it to GitHub Pages on every push to `main`.

## Contact

- GitHub: https://github.com/millythedev
- Email: emiliocleveland1@gmail.com

## About

This is a personal portfolio project.
