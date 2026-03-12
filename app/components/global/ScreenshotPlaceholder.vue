<script setup lang="ts">
defineProps<{
  alt?: string;
  caption?: string;
}>();
</script>

<template>
  <figure class="my-6">
    <div
      class="border border-dashed border-slate-600 bg-slate-900/50 px-6 py-10 text-center font-mono text-sm text-slate-500"
      role="img"
      :aria-label="alt || 'Screenshot placeholder'"
    >
      <div class="mb-2 text-slate-600">[Screenshot]</div>
      <div v-if="alt">{{ alt }}</div>
    </div>
    <figcaption
      v-if="caption"
      class="mt-2 text-center font-mono text-xs text-slate-500"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
