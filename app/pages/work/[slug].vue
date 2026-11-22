<script setup lang="ts">
const route = useRoute();
const { data: project } = await useAsyncData(
  () => `project-${route.path}`,
  () => queryCollection("content").path(`/work/${route.params.slug}`).first(),
);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
useSeoMeta({
  title: () => `${project.value?.title} | Matt Egan`,
  description: () => project.value?.description,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.description,
  ogType: "article",
});
</script>

<template>
  <main id="main-content" class="article-page">
    <NuxtLink to="/work" class="back">All projects</NuxtLink>
    <article v-if="project">
      <p class="byline">{{ project.category }}</p>
      <nav
        v-if="project.sections?.length"
        class="contents"
        aria-label="Project sections"
      >
        <a
          v-for="section in project.sections"
          :key="section.id"
          :href="`#${section.id}`"
          >{{ section.label }}</a
        >
      </nav>
      <ContentRenderer :value="project" class="prose" />
    </article>
  </main>
</template>
