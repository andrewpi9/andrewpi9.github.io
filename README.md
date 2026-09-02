# andrewpi9.github.io
A playground for my web development projects.

Everything here is published by [.github/workflows/deploy.yml](.github/workflows/deploy.yml) on
every push to `main`. The workflow builds the portfolio, assembles `_site` from the root landing
page plus each project, and deploys that to GitHub Pages. **A project only goes live if the
assemble step copies it into `_site`.**

| Path | Source |
| --- | --- |
| [andrewpi9.github.io](https://andrewpi9.github.io/) | `index.html` |
| [andrewpi9.github.io/portfolio](https://andrewpi9.github.io/portfolio/) | `portfolio/` (built) |
| [andrewpi9.github.io/wordle](https://andrewpi9.github.io/wordle/) | `wordle/` (static) |

## Personal Portfolio

React + Vite + TypeScript. Vite is configured with `base: '/portfolio/'`, so it only renders
correctly when served from that subpath.

```
cd portfolio
npm install
npm run dev
```

## Wordle

Static HTML, CSS, and JavaScript with no build step. All its paths are relative, so it runs from
any subpath.

Right click on `wordle/index.html` and open with Live Server (command L O).
