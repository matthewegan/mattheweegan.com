<script setup lang="ts">
const { data: work } = await useAsyncData("work-index", () =>
  queryCollection("content").path("/work").first(),
);

if (!work.value) {
  throw createError({
    statusCode: 404,
    message: "Work page not found",
  });
}

useSeoMeta({
  title: work.value.title,
  description: work.value.description,
  ogTitle: work.value.title,
  ogDescription: work.value.description,
  ogType: "website",
  ogImage: "/og-image.png",
  twitterCard: "summary_large_image",
  twitterTitle: work.value.title,
  twitterDescription: work.value.description,
  twitterImage: "/og-image.png",
});

useHead({
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: work.value.title,
        description: work.value.description,
        author: {
          "@type": "Person",
          name: "Matthew Egan",
        },
      }),
    },
  ],
});
</script>

<template>
  <div>
    <PageMain>
      <article class="terminal-window p-6 sm:p-8">
        <ContentRenderer
          v-if="work"
          :value="work"
          class="prose prose-invert max-w-none font-mono"
        />
      </article>
    </PageMain>
  </div>
</template>
