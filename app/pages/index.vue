<script setup lang="ts">
const title = "Matt Egan | Software architect";
const description =
  "Selected work in AI tools, identity and software review by Matt Egan, senior software architect at The St. James.";
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: "profile",
});
useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Matthew Egan",
        jobTitle: "Senior Software Architect",
        url: "https://mattheweegan.com",
        email: "matt@mattheweegan.com",
        sameAs: [
          "https://github.com/matthewegan",
          "https://linkedin.com/in/matthew-egan-2a1b369",
        ],
      }),
    },
  ],
});
</script>

<template>
  <main id="main-content">
    <section class="cover" aria-labelledby="intro">
      <div class="cover-copy">
        <p class="byline">Senior software architect</p>
        <h1 id="intro">Matt Egan</h1>
        <p class="intro">
          I like figuring out why something that sounds simple takes half an
          afternoon. I usually ask someone to walk me through how they do it.
          I’m interested in the parts I’d miss from reading the code, like what
          they know to double-check and what they still have to do by hand.
        </p>
        <a class="button" href="#selected-work">See selected work</a>
      </div>
      <div class="cover-art">
        <img
          src="/images/combination-square.webp"
          alt="A midcentury print of a combination square and carpenter’s pencil."
          width="1120"
          height="840"
          fetchpriority="high"
        />
      </div>
    </section>
    <section
      id="selected-work"
      class="work-section"
      aria-labelledby="work-heading"
    >
      <div class="section-head">
        <h2 id="work-heading">Selected work</h2>
        <NuxtLink to="/work">All projects</NuxtLink>
      </div>
      <ProjectList featured />
    </section>
    <section class="offclock">
      <h2>Outside work</h2>
      <p>
        I spend a lot of my free time with my family. I like doing art with my
        kid, watching sports, and working on whatever needs fixing around the
        house. I tinker with AI at home, too.
      </p>
    </section>
  </main>
</template>
