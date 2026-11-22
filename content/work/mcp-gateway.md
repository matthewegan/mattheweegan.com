---
title: The St. James MCP
category: AI & data
position: 1
description: An assistant can write a valid query against the wrong table. I built a way for it to find the records our analysts trust.
---

# The St. James MCP

Two tables can describe the same part of a business and disagree. One might still exist because an old report depends on it. An analyst who’s been around knows which one to use. A new analyst, or an AI assistant, has to find that out somewhere.

I built a Model Context Protocol (MCP) server for The St. James. It gives an assistant tools to work with company data and a dictionary that explains what the data means.

## Choosing the source

Connecting the assistant to a warehouse solved the mechanical part. The more interesting work was deciding what it should see. I documented the preferred source for a question, the business definition behind it and which older sources to leave out.

That distinction matters in review. When a number looks wrong, an analyst can start by asking which records went into it. Correct arithmetic won’t rescue the wrong starting set.
