# EPrints-Ingredients-Index
The centralised directory of installable ingredients for EPrints, expanding core repository functionality with modular add-ons and features.

## Local development

Install dependencies with `npm install`, then run `npm run dev` to start the Astro development server. `npm run build` generates the static site in `dist/`.

Ingredient listings are YAML files in `src/content/ingredients-listings/`. The site reads the available fields (`name`, `creator`, `repo_url`, `description`, and `latest_eprints_version_tested`) at build time.

## GitHub Pages

The `Deploy to GitHub Pages` workflow builds and publishes the site when changes are pushed to `main` or when manually triggered. In the repository settings, configure Pages to use **GitHub Actions** as its source.
