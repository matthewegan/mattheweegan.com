<template>
  <h3
    :id="props.id"
    class="prose-h3-glow mb-4 mt-8 text-xl font-semibold text-purple-400 sm:text-2xl"
  >
    <span class="text-slate-500">::</span>
    <a v-if="generate" :href="`#${props.id}`">
      <slot />
    </a>
    <slot v-else />
  </h3>
</template>

<script setup>
import { computed, useRuntimeConfig } from "#imports";
const props = defineProps({
  id: { type: String, required: false, default: undefined },
});
const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    props.id &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h3)),
);
</script>
