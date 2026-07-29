# Studio

Public landing page for Travis Hughes's projects.

Live at: https://travis-coder712.github.io/studio/

## What's here

Single static `index.html` — no build step, no dependencies, no tracking.
Edit the file directly; GitHub Actions deploys to Pages on every push.

## Structure

- `index.html` — the whole site
- `uk-trip/` — The Fifty Tour UK 2027 trip planner (standalone PWA)
- `.github/workflows/deploy.yml` — auto-deploys to GitHub Pages on push to `main`

## Projects featured

| Project | Repo / Location | Status |
|---|---|---|
| AURES Intelligence | `Travis-coder712/aures-db` | v3.23.1 · Active |
| Praxis | *(in `aures-db`)* | Active |
| Copilot Starter Track | *(in `aures-db`)* | Active |
| GridRival Showcase | `Travis-coder712/gridrival-showcase` | Active |
| Studio Learn | *(in `aures-db`)* | Active |
| Decisions That Stick | *(in `aures-db`)* | Active |
| ASX Stock Tracker | *(in `aures-db`)* | Active |
| Claude Code Guide | *(in `aures-db`)* | Active |
| The Pyramid Principle | *(in `aures-db`)* | Active |
| The Fifty Tour — UK 2027 | `studio-public/uk-trip/` | Active |
| Brisbane Builder Guide | *(in `aures-db`)* | Active |
| JJCC Surf Check | `Travis-coder712/JJCC-Surf-Check` | Active |
| Acknowledge Country | *(in `aures-db`)* | Active |
| Wings of Fire RPG | `Travis-coder712/wings-of-fire-rpg` | Active |
| Drawing Adventure | `Travis-coder712/Drawing_adventure` | Active |
| A History of Alphington | *(in `aures-db`)* | Active |

## Editing

```bash
cd ~/Studio/studio-public
# edit index.html
git add . && git commit -m "update: ..." && git push
```

GitHub Actions deploys within a minute or two.
