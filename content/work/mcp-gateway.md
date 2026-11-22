---
title: The St. James MCP
category: AI & data
position: 1
description: I connected our AI assistants to company data and documented which tables to use for common reporting questions.
---

# The St. James MCP

Our warehouse has older tables that look a lot like the ones analysts use for current reports. Someone who knows the data can usually tell them apart. An AI assistant needs a little more to go on.

I built a Model Context Protocol (MCP) server so analysts at The St. James could query the warehouse from an assistant.

## [The data dictionary]{#choosing-the-source}

I put together a data dictionary to go with the server. For each reporting question it covers, the dictionary explains what the business term means and which source to use. I left out older sources that could give a misleading answer.

The dictionary also gives an analyst a place to start when a number looks off. They can check which records the assistant counted.
