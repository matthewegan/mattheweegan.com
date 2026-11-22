---
title: Approach
description: How I design AI tools, make architecture decisions and review software.
---

# How I work

I like the stretch between “we should be able to do this” and the first time somebody tries it. A working version gives us something specific to argue about.

## Start with a real question

For an AI tool, I want a question somebody already asks at work. Then I sit down with someone who knows the answer. Which records do they use? What does a new analyst usually get wrong? Those conversations shaped the [MCP server I built at The St. James](/work/mcp-gateway).

## Find out what has to keep working

A sign-in service has customers you can’t see from the login page. Account recovery, consent and the apps on the other side all depend on choices the old system made. In [SSO Nextgen](/work/sso-nextgen), those dependencies shaped the migration.

## Review the change where it runs

I use coding agents to explore designs, implement them and look for mistakes. When I review a change, I still want to open the app and try the thing it claims to fix. I built a [review workspace](/work/review-workspaces) around that habit.
