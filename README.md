# The Skeleton

React SPA rendering an interactive 3D human skeleton (bone labels / exploration).

**Live:** [https://content-interactives.github.io/the_skeleton](https://content-interactives.github.io/the_skeleton)

Curriculum alignment: [Standards.md](Standards.md).

## Stack

- React 19, Vite
- Tailwind CSS, PostCSS
- Framer Motion, Lucide React
- GitHub Pages (`gh-pages`)

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview `dist/` |
| `npm run lint` | ESLint |
| `npm run deploy` | Build + `gh-pages` |

## Configuration

`vite.config.js`: `base: '/the_skeleton/'`.

Source: `src/`.
