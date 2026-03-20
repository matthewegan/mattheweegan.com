---
title: Matthew Egan - Resume
description: Senior Software Architect and full-stack web developer with experience designing, building, and maintaining web applications, cloud infrastructure, and API integrations
---

# Matthew Egan

::contact-header
#title
Software Architect | Web Developer

#location
Washington, DC Region

#email
Email: [egan.matthew@me.com](mailto:egan.matthew@me.com)

#profiles
LinkedIn: [linkedin.com/in/matthew-egan-2a1b369](https://linkedin.com/in/matthew-egan-2a1b369) • GitHub: [github.com/matthewegan](https://github.com/matthewegan)
::

## Summary

Full-stack developer with 16+ years of experience building and maintaining commercial web applications. Currently the lead developer on a headless CMS site with custom ecommerce, payment integrations, and SSO. Background covers frontend architecture (Vue, Nuxt, React, Next.js, TypeScript), API integrations, cloud infrastructure (AWS, Cloudflare), and CI/CD. Track record of identifying problems and shipping solutions independently.

## Technical Skills

- **Languages:** JavaScript, TypeScript, PHP, SQL, HTML, CSS
- **Frameworks:** Vue (Options API, Composition API), Nuxt, React, Next.js, Laravel, jQuery
- **Styling:** CSS, Sass, Tailwind CSS
- **Databases:** MySQL, Oracle, PostgreSQL
- **Cloud & Infrastructure:** AWS (Lambda@Edge, CloudFront, ACM, Route 53, ECS, CloudFormation), Cloudflare (Pages, Workers), Docker
- **Tools & Platforms:** Git, CI/CD pipelines, Contentstack, Sanity, Algolia, shadcn/ui, Google Analytics, Google Tag Manager
- **Practices:** RESTful API design, SSO/OIDC, agile development, requirements gathering, analytics instrumentation

## Professional Experience

### The St. James

::subtext
Springfield, VA
::

Senior Software Architect • Feb 2020–Present

- Lead developer for [thestjames.com](https://www.thestjames.com), a headless CMS site (Contentstack + Nuxt) with custom cart, checkout, and membership purchase flows serving a multi-facility sports and wellness company.
- Designed and built the LeagueApps Programs Widget from scratch, a self-initiated project (112 commits, 10,800+ net lines) that replaced a problematic vendor widget. Solved three issues at once: eliminated a marketing bottleneck by making widget configuration self-service, fixed a privacy compliance violation with consent-based tracking, and restored broken back-button behavior on the SPA. Deployed to production on Cloudflare Workers.
- Led integration of the Exerp Odin Pay payment gateway, replacing the legacy payment system and enabling online membership sales. Built the complete checkout flow including saved cards and zero-dollar transactions.
- Planned and executed a full codebase modernization toward Nuxt 3: converted 96 class-based components to Composition API, replaced 18 base classes with composables, migrated 9 Vuex store modules to Pinia (organized by dependency tier to keep each PR independently mergeable), removed Vue.filter() usage, began replacing Element UI with custom components, and installed Nuxt Bridge. Also replaced node-sass with Dart Sass (unblocking Node.js upgrades from 14 to 22) and led Tailwind CSS adoption across 78+ styling changes.
- Implemented OIDC-based SSO web authentication flows for the member account portal and internal admin tools.
- Built a Lambda@Edge redirect service on CloudFront to consolidate multiple sport-specific domains into a single site, provisioning distributions, ACM certificates, and Route 53 DNS for each domain.
- Owned DNS, CDN, and deployment infrastructure across AWS (ECS, CloudFront, Route 53) and Cloudflare (Pages, Workers). Maintained CI/CD pipelines and monitoring.
- Built analytics instrumentation and defined the event taxonomy used for all stakeholder reporting.
- Built the Contentstack Block Finder, an internal tool (Next.js, React, TypeScript, shadcn/ui) that recursively analyzes content type schemas to discover modular block usage across a Contentstack stack. Includes entry search, content type filtering, and JSON/CSV export.

::collapsible-section{title="Skills and Tools"}
- JavaScript, TypeScript, Vue 3 (Composition API), Nuxt, React, Next.js
- HTML, CSS, Sass, Tailwind CSS, shadcn/ui
- Web Components, Shadow DOM, Custom Elements
- Contentstack (headless CMS)
- Pinia, Vuex (migration experience)
- OIDC SSO; vendor API integrations; custom cart/checkout
- AWS (Lambda@Edge, CloudFront, ACM, Route 53, ECS, CloudFormation); Cloudflare (Pages, Workers)
- Vite, Bun, Git, CI/CD pipelines, Docker
- Google Analytics, Google Tag Manager
::

---

### The St. James

::subtext
Springfield, VA
::

Senior Web Developer • Aug 2018–Feb 2020

- Built front-end features and interactive UI components for the company website using Vue and Nuxt.
- Implemented custom cart and checkout flows for activity scheduling and membership purchases.
- Supported the flagship facility launch by delivering core site capabilities ahead of opening.

::collapsible-section{title="Skills and Tools"}
- JavaScript, TypeScript
- Vue, Nuxt
- HTML, CSS, Sass
- Contentstack (headless CMS)
- Git; CI/CD pipelines
::

---

### Foundation for Social Connection

::subtext
Remote (via Oh Buoy LLC)
::

Search Implementation (Contract) • Jul 2024

- Implemented site-wide search for [action4connection.org](https://action4connection.org), a 501(c)(3) nonprofit advocacy site built with Nuxt and Sanity CMS.
- Designed and populated Algolia search indices by scripting content extraction from Sanity, mapping complex content structures including nested accordions and dialogs.
- Delivered search UX that surfaces content within collapsed UI elements, enabling users to navigate directly to specific accordion sections and dialog triggers.

::collapsible-section{title="Skills and Tools"}
- Nuxt, Vue, TypeScript
- Sanity (headless CMS); Sanity Client (JS/TS)
- Algolia (search indexing and UI)
- Content taxonomy design
- Netlify (deployment)
::

---

### Pioneering Evolution, LLC

::subtext
Arlington, VA
::

Senior Web Application Developer • Aug 2010–Jul 2018

- Designed and delivered custom web applications supporting U.S. Navy programs, including requirements capture, workflow, budgeting, execution tracking, and reporting.
- Gathered and documented requirements, mapped processes, and translated them into database schemas and system designs.
- Built SPAs and RESTful backends; maintained version control and modern JavaScript tooling.
- Built applications that consumed exports from enterprise systems, with data mapping interfaces and dashboards; supported ad hoc reporting for program offices.
- Facilitated stakeholder sessions and supported senior leaders with concise reporting on progress and risk.
- Contributed to project planning and coordination across multidisciplinary teams; provided client-facing support and documentation.

#### NSWC Carderock (subset of role)

- Modernized development practices for intranet and internal business applications (timekeeping, HR, inventory, order management).
- Standardized development environments and tooling by transitioning workstations to Red Hat Enterprise Linux.
- Prepared application web servers and documentation to meet security requirements for deployment.

::collapsible-section{title="Skills and Tools"}
- PHP 5.x; Laravel 5.2/5.6
- JavaScript (ES6), Vue, jQuery
- HTML/XHTML, CSS/Sass
- MySQL, Oracle; relational design; query optimization
- ORM (Doctrine, Eloquent/ActiveRecord)
- Git; Frontend build tools (npm, yarn, webpack); Composer
- Docker; Bash; Apache 2.2
- Windows, Linux (incl. RHEL), macOS
- Requirements gathering, process mapping, documentation
- Atlassian tools (e.g., Jira, Confluence)
- Microsoft SharePoint, PowerPoint, Excel, Word
- Security compliance and server hardening
- PPBE process familiarity
- Stakeholder communication and reporting
::

---

### Computer Software, Inc.

::subtext
Chalfont, PA
::

Web Application Developer • Aug 2008–Aug 2010

- Built custom reports and web features for municipal clients using PHP, PostgreSQL, and JavaScript. Progressed from field technician to in-house developer.

## Education

- B.S., Information Sciences and Technology, The Pennsylvania State University, University Park, PA

## Profiles

- LinkedIn: [linkedin.com/in/matthew-egan-2a1b369](https://linkedin.com/in/matthew-egan-2a1b369)
- GitHub: [github.com/matthewegan](https://github.com/matthewegan)
