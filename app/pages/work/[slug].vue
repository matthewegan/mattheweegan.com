<script setup lang="ts">
const route = useRoute();

const { data: project } = await useAsyncData(`work-${route.params.slug}`, () =>
  queryCollection("content").path(`/work/${route.params.slug}`).first(),
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    message: "Project not found",
  });
}

useSeoMeta({
  title: project.value.title,
  description: project.value.description,
  ogTitle: project.value.title,
  ogDescription: project.value.description,
  ogType: "article",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: project.value.title,
  twitterDescription: project.value.description,
  twitterImage: "/og-image.png",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: project.value.title,
        description: project.value.description,
        author: {
          "@type": "Person",
          name: "Matthew Egan",
          url: "https://mattheweegan.com",
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <!-- Section navigation -->
    <WorkPageNav
      v-if="project?.sections?.length"
      :title="project.title"
      :sections="project.sections"
    />

    <!-- Main content -->
    <PageMain>
      <!-- Back link -->
      <div class="mb-4 print:hidden">
        <NuxtLink
          to="/work"
          class="inline-block font-mono text-sm transition-all duration-200 group"
        >
          <span class="text-slate-500 group-hover:text-teal-500">[</span>
          <span class="text-teal-400">← Back to Work</span>
          <span class="text-slate-500 group-hover:text-teal-500">]</span>
        </NuxtLink>
      </div>

      <article class="terminal-window p-6 sm:p-8">
        <ContentRenderer
          v-if="project"
          :value="project"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </PageMain>
  </div>
</template>

<style scoped>
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
