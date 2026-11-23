<script setup lang="ts">
useHead({ htmlAttrs: { lang: "en" } });
useSeoMeta({
  ogImage: "https://mattheweegan.com/og-image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="sheet">
    <a class="skip" href="#main-content">Skip to content</a>
    <header class="masthead">
      <NuxtLink class="signature" to="/" aria-label="Matthew Egan, home">
        <img src="/favicon.svg" width="44" height="44" alt="" />
        Matthew Egan
      </NuxtLink>
      <nav aria-label="Primary">
        <NuxtLink to="/work">Work</NuxtLink>
        <NuxtLink to="/services">Approach</NuxtLink>
        <a href="#contact">Contact</a>
      </nav>
    </header>
    <NuxtPage />
    <footer id="contact">
      <div>
        <h2>Get in touch</h2>
        <a class="email" href="mailto:matt@mattheweegan.com"
          >matt@mattheweegan.com</a
        >
      </div>
      <nav aria-label="More about Matt">
        <a href="https://github.com/matthewegan">GitHub</a>
        <a href="https://linkedin.com/in/matthew-egan-2a1b369">LinkedIn</a>
        <NuxtLink to="/resume">Résumé</NuxtLink>
      </nav>
    </footer>
  </div>
</template>
