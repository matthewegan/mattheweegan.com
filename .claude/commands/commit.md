---
allowed-tools: Bash(git add:*), Bash(git status:*), Bash(git commit:*)
description: Create a git commit for staged changes only
---

## Context

- Current git status: !`git status`
- Current git diff (staged changes ONLY): !`git diff --staged`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## Your task

Create a git commit for the STAGED CHANGES ONLY shown in the diff above.

**CRITICAL: Only commit what is already staged. Do NOT stage any additional files.**

Requirements:

- Write a clear, descriptive commit message based on the staged changes
- Use `git commit -m "message"` (do NOT use `git commit -a` or `git add`)
- Create the commit in a single tool call
- Do NOT include any tool attribution (e.g., "Generated with Claude Code," "Co-Authored-By," etc.)
- Do NOT send any explanatory text—only make the tool call

If nothing is staged, inform the user instead of creating an empty commit.
