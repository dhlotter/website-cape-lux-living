# AGENTS.md

Deploy and branch rules for AI agents working in this repo. Read before pushing.

## Branch and deploy model (STRICT)

Same shape as the other product sites since 2026-11-22.

- **`main` is production.** A push to `main` runs `.github/workflows/docs-deploy.yml`, which builds the
  site and commits the output to `docs/`. GitHub Pages serves `docs/` on `main`. That bot commit puts
  `main` one commit ahead of `dev` after each release, which is expected.
- **`dev` is staging.** Work on a branch, merge it into `dev` locally, push `dev` once per theme after
  the owner's yes. `.github/workflows/ci.yml` runs lint and a build. There is no preview site, GitHub
  Pages builds `main` only.
- **Never push to `main` and never commit `docs/` by hand.** The only PR is `dev` to `main`, opened by the
  release agent once CI on `dev` is green. Merge commits only, never squash.
- **Local gate before any push.** `scripts/prepush` runs lint, a build into a temp folder (so the tracked
  `docs/` folder is left alone), then `npm test` against that build: the custom domain file, sitemap and
  robots, the page head, every local asset, and the contact details. CI runs the same script.
