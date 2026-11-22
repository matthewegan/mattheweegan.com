---
title: SSO Nextgen
category: Identity systems
position: 3
description: Moving the sign-in service to Nuxt while keeping existing member accounts and the apps that use them working.
---

# SSO Nextgen

Several apps at The St. James share a sign-in service. I worked on moving it from NestJS to Nuxt. We kept the account database and the OpenID Connect interface the apps already used.

## [Sign-in checks]{#what-has-to-survive-a-migration}

My cutover plan included three paths through sign-in.

- A member has forgotten their password and needs to get back into their account.
- An app needs the member’s consent before it can finish signing them in.
- A guest is signing in through the Wi-Fi network.

We ran the replacement service in staging. The Wi-Fi check needed a separate test on the guest network.
