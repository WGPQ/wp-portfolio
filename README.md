# William Puma — Portfolio

Personal portfolio for William Puma, a Software Engineer focused on web and mobile products.

## Stack

- Next.js, React and TypeScript
- Tailwind CSS

## Development

```bash
npm run dev
```

## Production validation

```bash
npm run typecheck
npm run lint
npm run build
```

The production build generates `public/sitemap.xml` and `public/robots.txt` through `next-sitemap`.

## Technical audit

See [the audit report](docs/AUDITORIA.md) for corrections, browser checks, before/after screenshots and measured Lighthouse results.

Routes: `/` (English), `/es` (Spanish). The URL determines the language; switching languages preserves the current section. Unknown routes return HTTP 404 and `noindex`.

Browser audit tools were installed temporarily outside the project. To rerun the functional audit on macOS with Chrome installed:

```bash
npm install --prefix /private/tmp/wp-portfolio-audit --no-package-lock playwright-core @axe-core/playwright lighthouse
npm run build
npm run start -- --port 3100
# In another terminal, from the repository root:
NODE_PATH=/private/tmp/wp-portfolio-audit/node_modules node docs/audit/scripts/browser-checks.cjs
```

Set `CHROME_PATH` when Chrome is installed elsewhere. These checks visit public external links, but do not submit forms or send messages. Lighthouse JSON reports record the tool version and measurement settings.
