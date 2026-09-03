# andrewpi9.github.io

My portfolio, plus the projects it links out to.

[.github/workflows/deploy.yml](.github/workflows/deploy.yml) publishes on every push to `main`. It
builds the portfolio, assembles `_site`, and deploys that to GitHub Pages. Pages source must stay on
**GitHub Actions** — on "Deploy from a branch" the built-in Jekyll builder publishes the raw repo
instead and the site breaks.

| Path | Source |
| --- | --- |
| [andrewpi9.github.io](https://andrewpi9.github.io/) | `portfolio/` (built, served at the root) |
| [andrewpi9.github.io/wordle](https://andrewpi9.github.io/wordle/) | `wordle/` (static) |
| `/portfolio/` | redirect to `/`, kept so old links still work |

SAT StudyPath lives in its own repo, [andrewpi9/SAT-StudyPath](https://github.com/andrewpi9/SAT-StudyPath),
and deploys itself to [andrewpi9.github.io/SAT-StudyPath](https://andrewpi9.github.io/SAT-StudyPath/).

## Portfolio

React + Vite + TypeScript, served at the root, so `base` is `/`.

```
cd portfolio
npm install
npm run dev
```

## Wordle

Static HTML, CSS, and JavaScript with no build step. All its paths are relative, so it runs from any
subpath.

Right click on `wordle/index.html` and open with Live Server (command L O).
