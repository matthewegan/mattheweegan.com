---
title: Review workspaces
category: Developer tools
position: 2
description: A proposed change gets its own running app and test data, so the reviewer can try the behavior described in the pull request.
---

# Review workspaces

When a coding agent says it fixed something, I want to open the app and try it. That used to mean interrupting whatever I was working on to set up somebody else’s branch.

At The St. James, I worked on a review workspace that runs a proposed change against its own data. The reviewer can use the browser, inspect the change and tie a finding to the revision they tested.

## When a check didn’t run

A review can get the code right and the database wrong. If the test data is out of date, some checks can’t run. I changed the review report to say which checks it skipped. Now the next reviewer can see exactly what still needs a test.

That’s the part of an AI workflow I care about most. When I decide whether a change can ship, I need to know what someone actually tried.
