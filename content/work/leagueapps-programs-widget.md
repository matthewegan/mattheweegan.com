---
title: LeagueApps Programs Widget
category: Web components
position: 6
description: A sports program listing the marketing team can configure in the CMS.
sections:
  - id: the-problem
    label: Problem
  - id: the-solution
    label: Solution
  - id: architecture
    label: Architecture
  - id: design-decisions
    label: Decisions
  - id: key-features
    label: Features
  - id: tech-stack
    label: Stack
---

# LeagueApps Programs Widget

::project-meta
#role
Built for The St. James
#timeline
September – December 2025
#stack
Vue 3, TypeScript, Web Components, Shadow DOM, Cloudflare Workers
::

## The problem

The marketing team used a vendor widget to list youth sports programs. Three things kept coming up.

- [Changing a listing]{#marketing-bottleneck} meant asking the vendor for a new configuration, even to show a different sport.
- [Tracking]{#privacy-violation} started before a visitor had opted in. The widget loaded its own analytics script.
- [The Back button]{#history-corruption} sometimes took visitors to the wrong page after they’d used the widget.

## The solution

I wrote a replacement that reads program listings from LeagueApps. Marketing can pick the sports, filters and columns in the CMS. A family visiting the page can narrow the list by age, location or day of the week and go straight to registration.

## Architecture

### Component architecture

The host page loads one script and adds a `<programs-widget>` element. The element reads the settings from its HTML attributes. Separate modules handle fetching, searching and displaying programs.

![How the widget connects its data, filters and table](/images/work/component-architecture.svg)

### Data pipeline

The widget fetches the listings for each site, drops duplicate program IDs and groups sessions under their parent program before building the table.

![How LeagueApps programs become rows in the table](/images/work/data-pipeline.svg)

### Filter architecture

Marketing sets the starting list for each page. Visitors can narrow that list further. On a page set up for one sport, clearing the filters brings back the programs for that sport.

![How page settings and visitor filters work together](/images/work/filter-architecture.svg)

## Design decisions

### Why Web Components

The first site ran Nuxt 2. The same listing also needed to work in WordPress and on static pages. A custom HTML element meant each site could use the same script.

### [Site styles]{#shadow-dom-for-real-isolation}

The old widget picked up styles from the page around it. Shadow DOM keeps the table and filter styles local to the widget.

### [Updating the table]{#facade-pattern-for-complexity-management}

The element passes changes to one controller. For example, selecting a filter updates the matching programs and the table through one call.

### Constructable stylesheets

Two widgets on the same page can share one parsed stylesheet. Older browsers get a style element inside each widget.

### Dual build configuration

I use a Vue app to try different CMS settings during development. The file that ships to the sites is a separate JavaScript bundle hosted on Cloudflare Workers.

### CSS Custom Highlight API for search

The browser can highlight matching text without adding markup to every table cell. The widget finds the matching ranges and passes them to the CSS Custom Highlight API.

### Filter state separation

The widget stores the page’s settings separately from the visitor’s choices. That gives the Reset button a known starting point.

### Partial re-renders

Typing a search updates the rows and pagination. The search field stays in place so the visitor can keep typing.

## Key features

- Families can look for programs on any of their available days, or only programs that meet on all the days they select.
- The layout switches from a table to cards when the widget has less room.
- Tracking requires an explicit opt-in.

## Tech stack

TypeScript, Web Components, Vite and Cloudflare Workers. The development app uses Vue 3.

## Screenshots

![Development sandbox configurator — declarative attribute controls for site keys, columns, filters, and prefilter values](/images/work/configurator.webp)

![Desktop table view — faceted filter dropdowns with sortable data table and registration links](/images/work/widget-table.webp)

![Mobile responsive view — stacked card layout with collapsible filters and search](/images/work/widget-mobile.webp)

![Real-time search with CSS Custom Highlight API — matching text highlighted without DOM modification](/images/work/search-highlight.webp)
