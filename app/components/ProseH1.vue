<template>
  <h1
    :id="props.id"
    class="mb-2 border-b-2 border-teal-500 pb-3 text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl"
  >
    <span class="text-slate-500">[■]</span>
    <a v-if="generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </h1>
</template>

<script setup>
import { computed, useRuntimeConfig } from "#imports";
const props = defineProps({
  id: { type: String, required: false },
});
const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h1)),
);
</script>
