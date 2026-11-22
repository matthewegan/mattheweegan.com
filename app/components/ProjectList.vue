<script setup lang="ts">
const props = defineProps<{ featured?: boolean }>();
const { data: projects } = await useAsyncData("portfolio-projects", () =>
  queryCollection("content")
    .where("path", "LIKE", "/work/%")
    .order("position", "ASC")
    .select("path", "title", "category", "description")
    .all(),
);
const visible = computed(() =>
  props.featured ? projects.value?.slice(0, 3) : projects.value,
);
</script>

<template>
  <ul class="project-list">
    <li v-for="project in visible" :key="project.path">
      <NuxtLink :to="project.path">
        <div class="project-kind">{{ project.category }}</div>
        <div>
          <component :is="featured ? 'h3' : 'h2'" class="project-title">{{
            project.title
          }}</component>
          <p>{{ project.description }}</p>
        </div>
        <span class="read-link" aria-hidden="true">Read project</span>
      </NuxtLink>
    </li>
  </ul>
</template>
