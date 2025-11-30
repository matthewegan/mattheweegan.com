<script setup lang="ts">
const { data: resume } = await useAsyncData("resume", () =>
  queryCollection("content").path("/resume").first(),
);

if (!resume.value) {
  throw createError({
    statusCode: 404,
    message: "Resume not found",
  });
}

useSeoMeta({
  title: resume.value.title,
  description: resume.value.description,
  ogTitle: resume.value.title,
  ogDescription: resume.value.description,
  ogType: "profile",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: resume.value.title,
  twitterDescription: resume.value.description,
  twitterImage: "/og-image.png",
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
  <div>
    <!-- Page navigation -->
    <ResumePageNav />

    <!-- Main content -->
    <PageMain>
      <article class="terminal-window p-6 sm:p-8">
        <!-- Download PDF action -->
        <div class="flex justify-end mb-4">
          <a
            href="/matthew_egan_resume.pdf"
            download="matthew_egan_resume.pdf"
            class="inline-block font-mono text-sm transition-all duration-200 group"
          >
            <span class="text-slate-500 group-hover:text-teal-500">[</span>
            <span class="text-teal-400">Download PDF</span>
            <span class="text-slate-500 group-hover:text-teal-500">]</span>
          </a>
        </div>

        <ContentRenderer
          v-if="resume"
          :value="resume"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </PageMain>
  </div>
</template>

<style scoped>
/* Download link glow effect */
.group:hover span:nth-child(2),
.group:focus-visible span:nth-child(2) {
  text-shadow:
    0 0 10px rgba(20, 184, 166, 0.6),
    0 0 20px rgba(20, 184, 166, 0.3);
}

@media (prefers-reduced-motion: reduce) {
  .group:hover span:nth-child(2),
  .group:focus-visible span:nth-child(2) {
    text-shadow: none;
  }
}
</style>
