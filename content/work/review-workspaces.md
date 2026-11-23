---
title: Review workspaces
category: Developer tools
position: 2
description: A way to open a pull request in a browser and try the change without switching my local checkout.
---

# Review workspaces

I often want to try a fix while I have other work open. Checking out the branch, getting the right test data and starting the app can take longer than the review itself.

I worked on a setup at The St. James that runs the app for a pull request with its own test data. I can open it in a browser and leave a finding against the exact revision I tried. That’s particularly handy when a coding agent pushes another revision during review.

## [Skipped checks]{#when-a-check-didnt-run}

One change I made was to the report. Some checks need a current copy of the test database. When the data is out of date, the report lists the checks that didn’t run so the next reviewer knows what’s left.
