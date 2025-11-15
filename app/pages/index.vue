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
  twitterCard: "summary",
  twitterTitle: resume.value.title,
  twitterDescription: resume.value.description,
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
        <ContentRenderer
          v-if="resume"
          :value="resume"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </PageMain>
  </div>
</template>
