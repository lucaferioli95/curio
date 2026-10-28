# Curio

Short swipeable lessons with quick questions, written by Claude for Luca.

- Hosting: Cloudflare Workers static assets (`wrangler.jsonc`), deployed on every push to `main`.
- Lessons live in `decks.js` (cards: fact, quiz, est, sim). Add a deck there and it appears on the home screen.
- Progress (streak, scores) is saved in the browser only.
- Each release is listed in [CHANGELOG.md](CHANGELOG.md). When shipping, bump `APP_VERSION` in `index.html` and `CACHE` in `sw.js`.
