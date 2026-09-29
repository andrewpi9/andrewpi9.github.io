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

These projects live in their own repos and deploy themselves:

| Project | Repo | Live |
| --- | --- | --- |
| UNC Hockey Fundraiser | [andrewpi9/hockeyfundraising](https://github.com/andrewpi9/hockeyfundraising) | [hockeyfundraising.vercel.app](https://hockeyfundraising.vercel.app/) |
| Radiant Ranked | [andrewpi9/radiant-ranked](https://github.com/andrewpi9/radiant-ranked) | [andrewpi9.github.io/radiant-ranked](https://andrewpi9.github.io/radiant-ranked/) |
| SAT StudyPath | [andrewpi9/SAT-StudyPath](https://github.com/andrewpi9/SAT-StudyPath) | [andrewpi9.github.io/SAT-StudyPath](https://andrewpi9.github.io/SAT-StudyPath/) |

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
