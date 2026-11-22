<script setup lang="ts">
const { data: approach } = await useAsyncData("services", () =>
  queryCollection("content").path("/services").first(),
);
if (!approach.value)
  throw createError({ statusCode: 404, statusMessage: "Approach not found" });
useSeoMeta({
  title: "Approach | Matt Egan",
  description: approach.value.description,
  ogTitle: "Approach | Matt Egan",
  ogDescription: approach.value.description,
});
</script>

<template>
  <main id="main-content" class="article-page">
    <ContentRenderer v-if="approach" :value="approach" class="prose" />
  </main>
</template>
