<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>

<template>
  <a
    :href="href"
    class="text-teal-400 underline decoration-slate-700 underline-offset-2 transition-colors hover:text-teal-300 hover:decoration-teal-400 motion-safe:hover:[text-shadow:0_0_8px_rgba(20,184,166,0.4)]"
  >
    <slot />
  </a>
</template>
