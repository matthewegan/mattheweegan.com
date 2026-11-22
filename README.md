# mattheweegan.com

Matthew Egan’s portfolio. Built with Nuxt 4, Nuxt Content and Bun. The site serves its fonts and artwork locally.

## Development

Run `bun install --frozen-lockfile`, then `bun run dev`. Use `bun run lint` to check source and `bun run build` for the production build. AWS Amplify uses the build definition in `amplify.yml`.

## Content

Project articles live in `content/work/`. The title, category and description appear in the project index. The lowest three position values also appear on the homepage. The approach page and résumé use `content/services.md` and `content/resume.md`. Update the downloadable PDF in `public/` when the résumé changes.
