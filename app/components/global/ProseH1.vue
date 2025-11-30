<template>
  <h1
    :id="props.id"
    class="prose-h1-glow mb-3 border-b-2 border-teal-500 pb-3 text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl print:border-b-0 print:pb-0 print:text-slate-900"
  >
    <span class="prose-bracket-glow text-teal-600 print:hidden">[■]</span>
    <span v-if="generate">
      <slot />
    </span>
    <slot v-else />
  </h1>
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
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h1)),
);
</script>
