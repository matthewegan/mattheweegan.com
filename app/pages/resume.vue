<script setup lang="ts">
const { data: resume } = await useAsyncData("resume", () =>
  queryCollection("content").path("/resume").first(),
);
if (!resume.value)
  throw createError({ statusCode: 404, statusMessage: "Résumé not found" });
useSeoMeta({
  title: "Résumé | Matt Egan",
  description: resume.value.description,
});
</script>

<template>
  <main id="main-content" class="article-page">
    <a href="/matthew_egan_resume.pdf" class="back" download
      >Download résumé (PDF)</a
    >
    <ContentRenderer v-if="resume" :value="resume" class="prose" />
  </main>
</template>
