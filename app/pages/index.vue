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
          I build software at The St. James. I built an MCP server so analysts
          can ask questions about our data. I also build the tools our engineers
          use to check the work they hand to AI.
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
      <h2>Away from the keyboard</h2>
      <p>
        I framed walls in my basement, hung drywall and laid tile. I painted the
        whole house, ceilings included. I like cutting in by hand. Never used
        painter’s tape.
      </p>
    </section>
  </main>
</template>
