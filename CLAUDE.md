# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with Nuxt 4 and Nuxt Content, using Tailwind CSS 4 for styling. The site is content-driven, rendering markdown files from the `content/` directory as dynamic pages with a retro terminal/CRT aesthetic.

## Key Technologies

- **Nuxt 4**: Vue-based framework for SSR/SSG
- **Nuxt Content 3.8**: File-based CMS with markdown support and SQLite backend
- **Tailwind CSS 4**: Utility-first CSS framework (integrated via `@tailwindcss/vite`)
- **Bun**: JavaScript runtime and package manager

## Common Commands

```bash
# Install dependencies
bun install

# Build for production
bun run build

# Generate static site
bun run generate

# Preview production build
bun run preview

# Lint code
bun run lint

# Fix linting issues
bun run lint:fix

# Type check
bunx nuxi typecheck
```

## Architecture

### Content System

- **Content Collection**: Defined in `content.config.ts` with Zod schema validation (optional `title` and `description` fields)
- **Content Querying**: Pages use `useAsyncData()` + `queryCollection("content").path("/path").first()` for type-safe content fetching
- **Content Rendering**: `<ContentRenderer :value="content" />` renders markdown as HTML with custom MDC component overrides
- **SQLite Backend**: Uses Nuxt Content's experimental native SQLite connector (`experimental.sqliteConnector: "native"` in `nuxt.config.ts`)

### MDC (Markdown Components)

Custom Prose components in `app/components/global/` automatically override default markdown rendering (auto-imported by Nuxt):

- `ProseH1.vue`, `ProseH2.vue`, `ProseH3.vue`: Terminal-style headings with `[■]` brackets and anchor link support
- `ProseA.vue`: Link styling with teal hover states
- `ProseP.vue`, `ProseLi.vue`, `ProseUl.vue`, `ProseHr.vue`: Custom prose element styling
- Anchor links enabled for H1-H3 only via `mdc.headings.anchorLinks` config in `nuxt.config.ts`
- All components maintain terminal aesthetic (monospace font, `slate-950` bg, `teal-400` accents)

### Application Structure

- `app/app.vue`: Root layout with CRT effects (`crt-scanlines`, `crt-glow`), skip-to-content link, `<TerminalHeader />`, and `<NuxtPage />`
- `app/pages/index.vue`: Homepage that queries `/resume` content, sets SEO meta tags, and renders with `<ContentRenderer />`
- `app/components/`: Auto-imported Vue components
  - `TerminalHeader.vue`: Global site nav (power LED, site name, primary links)
  - `PageMain.vue`: Content wrapper component
  - `ContactHeader.vue`: Contact information section
  - `resume/PageNav.vue`: Section jumplinks (page-specific navigation)
  - `global/Prose*.vue`: MDC component overrides (auto-imported)
- `app/assets/css/main.css`: Three CSS layers (base, components, print) with terminal theme definitions
- `content/`: Markdown files (currently `/resume.md`)
- `content.config.ts`: Content collection schema with Zod validation

### Styling & Theming

- **Tailwind CSS 4**: Integrated via Vite plugin (`@tailwindcss/vite` in `nuxt.config.ts`)
- **Terminal Aesthetic**: Retro CRT monitor theme defined in `main.css`:
  - Color scheme: `slate-950` background with `teal-400`/`teal-500` accents
  - Monospace font stack: `ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Monaco...`
  - Custom components: `.terminal-window`, `.terminal-header`, `.power-led`, `.ascii-divider`
  - CRT effects: `.crt-scanlines` (animated repeating gradient), `.crt-glow` (inset box shadow)
  - CSS variables: `--header-height` (61px mobile, 37px desktop), `--page-nav-height` (45px)
- **Accessibility**:
  - Respects `prefers-reduced-motion` (disables CRT animations)
  - `.sr-only` utility for screen readers
  - `:focus-visible` with teal outline
  - Anchor `scroll-margin-top` accounts for sticky headers
  - Thumb-friendly 44px min touch targets on mobile
- **Print Styles**: Comprehensive `@media print` in `main.css`:
  - Letter-size pages with 0.75in margins
  - Removes nav, CRT effects, terminal chrome
  - Expands `<details>` elements
  - Prevents page breaks inside headings/paragraphs
  - Shows link URLs with `::after` pseudo-elements

### SEO & Metadata

Implementation pattern in `app/pages/index.vue`:

- `useSeoMeta()`: Sets Open Graph (`og:title`, `og:description`, `og:type: "profile"`) and Twitter Card meta tags
- `useHead()`: Injects JSON-LD structured data (Schema.org Person type) with name, jobTitle, email, address, and social links
- Content frontmatter (`title`, `description`) populates meta tags automatically

### Code Quality & Git Hooks

- **Husky**: Pre-commit hook configured in `.husky/pre-commit`
- **lint-staged**: Runs `eslint --fix` and `prettier --write --ignore-unknown` on staged files
- **ESLint**: Extends `@nuxt/eslint` config (auto-generated in `.nuxt/eslint.config.mjs`)
- **Prettier**: Default configuration (version 3.6.2)

### Deployment

- **AWS Amplify**: Configured via `amplify.yml`
  - Installs Bun from scratch during preBuild phase
  - Runs `bun run build` to generate static site
  - Outputs to `.amplify-hosting` directory (configured as `baseDirectory`)

## Development Notes

- **Current pages**: Single-page site (`index.vue` displays `/resume` content)
- **Navigation architecture**: Two-tier system
  - Global header (`TerminalHeader.vue` in `app/app.vue`) for site-wide nav
  - Page-specific subnav (`resume/PageNav.vue`) for section jumplinks
- **Styling conventions**: All components must maintain terminal/CRT aesthetic (monospace, `slate-950`/`teal-400` colors)
- **Adding pages**:
  1. Create markdown in `content/`
  2. Create page component in `app/pages/` that queries the content
  3. Follow SEO pattern from `index.vue` (`useSeoMeta` + JSON-LD structured data)
  4. Update `navItems` in `TerminalHeader.vue`
- **Customizing markdown**: Modify Prose components in `app/components/global/` to change how markdown elements render
- **Print testing**: Always test PDF export when modifying layouts (print styles hide nav/decorations and expand `<details>`)
