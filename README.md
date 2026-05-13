# Studio

Public landing page for Travis Hughes's projects.

Live at: https://travis-coder712.github.io/studio/

## What's here

Single static `index.html` — no build step, no dependencies, no tracking.
Edit the file directly; GitHub Actions deploys to Pages on every push.

## Structure

- `index.html` — the whole site
- `.github/workflows/deploy.yml` — auto-deploys to GitHub Pages on push to `main`

## Sibling repos

The projects featured here live in their own GitHub repos:

- AURES Intelligence → `Travis-coder712/aures-db`
- GridRival Showcase → `Travis-coder712/gridrival-showcase`
- Wings of Fire RPG → `Travis-coder712/wings-of-fire-rpg`
- Drawing Adventure → `Travis-coder712/Drawing_adventure`
- JJCC Surf Check → `Travis-coder712/JJCC-Surf-Check`
- Brisbane Builder Guide → *(repo extraction pending — currently in `aures-db`)*
- Acknowledge Country → *(repo extraction pending — currently in `aures-db`)*
- Studio Learn → *(repo pending — will sync from `aures-db` learning modules)*

## Editing

```bash
cd ~/Studio/studio-public
# edit index.html
git add . && git commit -m "feature: ..." && git push
```

GitHub Actions deploys within a minute or two.
