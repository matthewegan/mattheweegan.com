# mattheweegan.com

A personal website with a retro terminal aesthetic, built with modern web technologies.

## Tech Stack

- **[Nuxt 4](https://nuxt.com/)** - Vue-based framework for SSR/SSG
- **[Nuxt Content](https://content.nuxt.com/)** - File-based CMS with markdown support
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime and package manager

## Features

- **Terminal/CRT Aesthetic**: Retro monitor design with scanline effects and phosphor glow
- **Content-Driven**: Pages rendered from markdown files with custom MDC components
- **SEO Optimized**: Open Graph, Twitter Cards, and JSON-LD structured data
- **Print-Friendly**: Clean PDF export with comprehensive print styles
- **Code Quality**: ESLint + Prettier with pre-commit hooks via Husky

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start dev server at http://localhost:3000
bun run dev
```

### Production

```bash
# Build for production
bun run build

# Generate static site
bun run generate

# Preview production build
bun run preview
```

### Linting

```bash
# Check for issues
bun run lint

# Auto-fix issues
bun run lint:fix
```

## Project Structure

```
├── app/
│   ├── components/       # Vue components & MDC Prose overrides
│   ├── pages/           # Route pages
│   └── assets/css/      # Global styles & Tailwind layers
├── content/             # Markdown content files
├── public/              # Static assets
├── .husky/              # Git hooks
├── content.config.ts    # Content collection schema
└── nuxt.config.ts       # Nuxt configuration
```

## Content System

Content is managed through markdown files in the `content/` directory. The Nuxt Content module handles:

- **SQLite Backend**: Native SQLite connector for content storage
- **MDC Components**: Custom Vue components override default markdown rendering
- **Frontmatter**: Optional `title` and `description` fields

### Adding Content

Create a new `.md` file in `content/`:

```markdown
---
title: "Page Title"
description: "Page description"
---

# Your Content Here
```

## Styling

The site uses a custom terminal aesthetic with:

- Dark slate background (`slate-950`) with teal accents (`teal-400`)
- Monospace font stack
- CRT effects: animated scanlines and soft glow
- Respects `prefers-reduced-motion` for accessibility

Custom Tailwind components are available:

- `.terminal-window` - Terminal container
- `.terminal-header` - Window header bar
- `.power-led` - LED indicator with pulse animation
- `.crt-scanlines` - Scanline overlay effect
- `.crt-glow` - Soft glow effect

## SEO & Metadata

Pages use `useSeoMeta()` and `useHead()` for:

- Open Graph meta tags
- Twitter Card metadata
- JSON-LD structured data (Person schema)

See `app/pages/index.vue` for the implementation pattern.
