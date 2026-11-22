# Portfolio development

Use Bun and the checked-in lockfile. See README.md for build commands and content locations.

The homepage introduces Matt and features three projects. Keep case studies specific about Matt’s role, the decision and what was verified. Use public-facing summaries for work projects.

The shared layout lives in app/app.vue. The design uses Barlow Condensed headings, locally served artwork and an ink, ochre and paper palette in app/assets/css/main.css. Preserve readable contrast, visible focus, the skip link and usable navigation on narrow screens. Check desktop, mobile and print when changing layouts. Update the résumé PDF when its content changes.

Project pages query Nuxt Content by path. Keep existing public URLs, heading anchors and image paths working. The project-meta component renders the named metadata slots in older case studies.

The pre-commit hook runs lint-staged against staged files. Keep automatic formatting scoped to changed files. AWS Amplify builds this repository using amplify.yml.
