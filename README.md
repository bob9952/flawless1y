# Flawless1y

Statički React, TypeScript, Vite i Tailwind sajt za Flawless1y.

## Lokalne provere

```bash
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run build
```

Produkcioni fajlovi se generišu u `dist/`.

## GitHub Actions

Workflow `.github/workflows/ci.yml` automatski proverava formatiranje, ESLint i TypeScript, pravi Vite build i čuva `dist/` kao artifact.

Deploy se pokreće ručno preko **Actions → CI and optional deploy → Run workflow**, uz uključenu opciju `deploy`.

Za SSH deploy potrebno je podesiti sledeće repository ili `production` environment secrets:

- `SSH_HOST` — hostname servera
- `SSH_PORT` — SSH port; opciono, podrazumevano `22`
- `SSH_USER` — SSH korisničko ime
- `SSH_PRIVATE_KEY` — privatni deploy ključ
- `SSH_KNOWN_HOSTS` — potvrđeni `known_hosts` zapis servera
- `SSH_TARGET_DIR` — udaljeni direktorijum koji direktno servira sajt

Deploy kopira sadržaj `dist/` u ciljni direktorijum i ne briše druge udaljene fajlove.
