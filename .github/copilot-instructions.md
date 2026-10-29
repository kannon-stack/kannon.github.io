# Copilot instructions for kannon.github.io

This repository is a GitHub Pages site built with Jekyll. GitHub builds and deploys it from the `main` branch using its built-in Pages build. There is no custom deploy workflow and no Gemfile.

## How the site is served

- This is a **project site**, served at https://kannon-stack.github.io/kannon.github.io/. It isn't a user site, because the repository name doesn't match the account name, so every page lives under the `/kannon.github.io/` path.
- Write internal links and asset paths with `{{ '/path/' | relative_url }}`. Never hard-code a leading `/`: a bare `/assets/style.css` returns a 404 on the live site.
- The theme is `jekyll-theme-minimal`, set in `_config.yml`. Only the themes and plugins GitHub Pages supports will build. Check https://pages.github.com/versions/ before adding one.

## Rules

- Don't change `url`, `baseurl`, `theme` or `remote_theme` in `_config.yml` unless the task asks for it.
- Keep the site static: HTML, Markdown, CSS and small client-side scripts. Don't add server code, bundlers or package managers.
- Give every new page front matter with at least a `title`.
- Never commit build output: `_site/`, `.jekyll-cache/` or `.sass-cache/`.
- The repository is public. Don't add secrets, API keys or personal data.

## Checking your work

- Build with `jekyll build --baseurl /kannon.github.io` from the repository root. It must finish without errors.
- To preview, run `jekyll serve --baseurl /kannon.github.io` and open http://127.0.0.1:4000/kannon.github.io/. Take a Playwright screenshot of any visual change and include it in the pull request.
- The setup steps install the `github-pages` gem, so local builds use the same Jekyll and plugin versions as GitHub Pages.
