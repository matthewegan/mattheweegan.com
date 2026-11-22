---
title: Contentstack Block Finder
category: Content tools
position: 5
description: A search tool for finding the published pages that use a particular Contentstack block.
sections:
  - id: the-problem
    label: Problem
  - id: the-solution
    label: Solution
  - id: how-it-works
    label: How It Works
  - id: design-decisions
    label: Decisions
  - id: tech-stack
    label: Stack
---

# Contentstack Block Finder

::project-meta
#role
Internal tool at The St. James
#timeline
March 2026
#stack
Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui, Contentstack Management & Delivery SDKs
::

## The problem

Before changing a block in Contentstack, I wanted to know which pages I’d have to check afterward. Our editors could put the same block in several page types, sometimes inside another block. I used to open the page types one by one and spot-check entries.

## The solution

I built a small app with two views. One shows where the CMS allows a block. The other finds the published pages where an editor has used it. A search result includes the entry, its language and the field where the block turned up. I can export the list as CSV or JSON.

## How it works

### Schema analysis

The app reads each content type and follows fields into groups, shared fields and nested blocks. It keeps track of the shared fields it has visited so a reference back to an earlier field won’t send it around again.

### Entry search

Once I pick a block, the app searches entries for the relevant content types in batches of 100. It records the field path for each match, which helps when a page uses the same block in several places.

### Saved connections

Named profiles let me reopen a stack and pick up where I left off.

## Design decisions

### Why Next.js

Most of my work at the time was in Nuxt. I wanted to try Next.js on something small, and its API routes gave me a place to run the CMS requests on the server.

### [Content models and published entries]{#two-sdks-two-purposes}

The Management SDK reads the content model, including unpublished edits. The Delivery SDK reads published entries. I need both to tell whether changing a field will affect anything on the live site.

### Server-side SDK calls

The browser handles the search form and results. A Next.js route calls Contentstack and returns the matches.

### [The search interface]{#shadcnui-for-rapid-development}

I used the existing search, filter and dialog components from shadcn/ui. Most of the custom work went into finding blocks.

## Tech stack

Next.js, React, TypeScript and the Contentstack Management and Delivery SDKs.

## Screenshots

![Schema overview — 14 content types with modular blocks, showing block counts per content type](/images/work/contentstack-block-finder/schema-overview.png)

![Expanded content type — Location page showing all 16 blocks with field paths and UIDs](/images/work/contentstack-block-finder/schema-expanded.png)

![Block search results — searching for tab_block usage across Membership Page and Generic Page, showing 13 entries with titles, UIDs, locales, and field paths](/images/work/contentstack-block-finder/search-results.png)
