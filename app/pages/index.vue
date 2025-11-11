<script setup lang="ts">
const { data: resume } = await useAsyncData("resume", () =>
  queryCollection("content").path("/resume").first(),
);

if (!resume.value) {
  throw createError({ statusCode: 404, message: "Resume not found" });
}

useSeoMeta({
  title: () => resume.value?.title,
  description: () => resume.value?.description,
  ogTitle: () => resume.value?.title,
  ogDescription: () => resume.value?.description,
  ogType: "profile",
  twitterCard: "summary",
  twitterTitle: () => resume.value?.title,
  twitterDescription: () => resume.value?.description,
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
        description: resume.value.description,
        email: "egan.matthew@me.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Washington",
          addressRegion: "DC",
        },
        sameAs: [
          "https://linkedin.com/in/matthew-egan-2a1b369",
          "https://github.com/matthewegan",
        ],
      }),
    },
  ],
});
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 crt-scanlines crt-glow">
    <!-- Skip to content link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-slate-950 focus:font-mono focus:border focus:border-teal-400"
    >
      Skip to content
    </a>

    <!-- Terminal header - sticky at top -->
    <header class="terminal-header sticky top-0 z-40">
      <div class="flex items-center gap-2">
        <span class="power-led" aria-label="Power indicator" />
        <span class="text-teal-400">matthew@egan</span>
        <span class="text-slate-500">:</span>
        <span class="text-amber-400">~</span>
        <span class="text-slate-500">$</span>
        <span class="text-slate-300">cat resume.md</span>
      </div>
    </header>

    <!-- Page navigation -->
    <ResumePageNav />

    <!-- Main content -->
    <main
      id="main-content"
      class="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <article class="terminal-window p-6 sm:p-8">
        <ContentRenderer
          v-if="resume"
          :value="resume"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </main>
  </div>
</template>
