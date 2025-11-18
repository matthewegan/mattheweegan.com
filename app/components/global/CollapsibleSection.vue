<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();

defineProps<{
  title?: string;
}>();
</script>

<template>
  <details class="my-3 group print:block">
    <summary
      class="cursor-pointer select-none py-2 text-sm font-semibold font-mono text-slate-500 hover:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm list-none print:hidden flex items-center gap-1"
    >
      <span class="inline-block text-center transition-transform">
        <span class="group-open:hidden">[▸]</span>
        <span class="hidden group-open:inline">[▾]</span>
      </span>
      <span v-if="title">{{ title }}</span>
      <slot v-else-if="slots.title" name="title" mdc-unwrap="p" />
    </summary>
    <div class="collapsible-content">
      <slot mdc-unwrap="p" />
    </div>
  </details>
</template>

<style scoped>
summary::marker {
  display: none;
}

summary::-webkit-details-marker {
  display: none;
}

.collapsible-content :deep(ul) {
  margin: 0.75rem 0;
  padding-left: 0;
  list-style: none;
}

.collapsible-content :deep(li) {
  font-size: var(--text-sm);
  color: var(--color-slate-500);
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.collapsible-content :deep(li span[aria-hidden="true"]) {
  color: var(--color-slate-600);
}

@media print {
  details {
    display: block !important;
  }

  summary {
    display: none !important;
  }
}
</style>
