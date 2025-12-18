# Pando

Static Next.js site for the Pando project.

## Local development

```bash
npm install
npm run dev
```

Then open:

http://localhost:3000

## Build

```bash
npm run build
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow that builds and exports the site (`next export`) and publishes it to GitHub Pages on pushes to `main`.

Note: `next.config.ts` is configured to deploy under the repository path (`/Pando`) for GitHub Pages.
