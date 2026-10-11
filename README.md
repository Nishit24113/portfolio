# Nishit Patel — Portfolio

My personal portfolio, built from scratch as a modern single-page app.

**Live:** https://nishit24113.github.io/portfolio/

## Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** for styling, dark/light theme
- **Framer Motion** for scroll and entrance animations
- **Hand-written generative canvas** background (an original particle network —
  no stock assets, no templates)
- Self-hosted fonts (Inter, Space Grotesk) — no third-party requests

Every line is original. The previous version was based on a third-party HTML
template; this rebuild replaces it entirely to be fully my own work.

## Develop

```bash
npm install
VITE_BASE=/ npm run dev     # http://localhost:5173
npm run build               # production build to dist/
```

> Note: the project builds via `npm run build`. If your working directory path
> contains an `&`, invoke the compilers directly
> (`node ./node_modules/vite/bin/vite.js build`) to avoid a Windows npm-shim
> quirk.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. Enable it once under
**Settings → Pages → Source: GitHub Actions**.

## License

[MIT](LICENSE) © Nishit Patel
