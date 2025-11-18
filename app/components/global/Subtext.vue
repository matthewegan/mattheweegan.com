<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="text-sm text-slate-400 mt-1 mb-3 font-normal">
    <slot v-if="slots.default" mdc-unwrap="p" />
  </div>
</template>
