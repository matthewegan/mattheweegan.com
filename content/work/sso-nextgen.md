---
title: SSO Nextgen
category: Identity systems
position: 3
description: Rebuilding sign-in meant accounting for the people recovering an account, granting consent or connecting to guest Wi-Fi.
---

# SSO Nextgen

At The St. James, several apps depend on one sign-in service. I worked on moving that service from NestJS to Nuxt while keeping the existing account database and the OpenID Connect contract that client apps depend on.

## What has to survive a migration?

The obvious test is signing in with a working account. A member who’s forgotten a password takes a different route. So does someone opening an app that needs their consent. I treated those paths as requirements for the replacement.

We ran the replacement in staging. Some checks belonged there. Guest Wi-Fi needed a test on the actual network. I kept that distinction in the cutover plan so a passing browser test wouldn’t be mistaken for a test of the whole trip.
