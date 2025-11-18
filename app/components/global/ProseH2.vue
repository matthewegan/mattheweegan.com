<script setup lang="ts">
import { computed, useRuntimeConfig, useSlots } from "#imports";

const props = defineProps<{
  id?: string;
}>();

const slots = useSlots();

const generateId = () => {
  if (props.id) return props.id;

  const defaultSlot = slots.default?.();
  if (!defaultSlot) return undefined;

  const text = defaultSlot
    .map((node) => (typeof node.children === "string" ? node.children : ""))
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return text || undefined;
};

const headingId = generateId();

const { headings } = useRuntimeConfig().public.mdc;
const generate = computed(
  () =>
    headingId &&
    ((typeof headings?.anchorLinks === "boolean" &&
      headings?.anchorLinks === true) ||
      (typeof headings?.anchorLinks === "object" && headings?.anchorLinks?.h2)),
);
</script>

<template>
  <h2
    :id="headingId"
    class="mb-4 mt-8 border-l-4 border-amber-500 pl-3 text-2xl font-bold text-amber-400 sm:text-3xl"
  >
    <a v-if="generate" :href="`#${headingId}`">
      <slot />
    </a>
    <slot v-else />
  </h2>
</template>
