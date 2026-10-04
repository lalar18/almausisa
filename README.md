# Al Mausisa — Portfolio

A single-page developer portfolio built with **Vue 3 + Vite**.

## Development

```bash
npm install
npm run dev        # start dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

## Deploying to Hostinger

1. Run `npm run build`.
2. Upload the **contents of `dist/`** to your `public_html` (or subfolder).

The build uses a relative base (`base: './'`), so it works from the domain
root or a subfolder.

## Structure

- `src/components/` — section components (Hero, About, Services, Skills, Projects, Contact, Footer)
- `src/data/projects.js` — the featured-projects list
- `public/images/projects/` — project screenshots
- `public/files/Al_Mausisa.pdf` — downloadable CV
