<script setup lang="ts">
const title = "Selected work | Matt Egan";
const description =
  "Projects in AI tools, software review, identity and content systems.";
useSeoMeta({ title, description, ogTitle: title, ogDescription: description });
</script>

<template>
  <main id="main-content" class="work-section archive">
    <h1>Selected work</h1>
    <ProjectList />
  </main>
</template>
