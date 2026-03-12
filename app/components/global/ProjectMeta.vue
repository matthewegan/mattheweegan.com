<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div
    class="my-6 border border-slate-700 bg-slate-800/30 p-4 font-mono text-sm"
  >
    <div class="grid gap-2 sm:grid-cols-2">
      <div v-if="slots.role">
        <span class="text-slate-500">Role: </span>
        <span class="text-slate-300"><slot name="role" mdc-unwrap="p" /></span>
      </div>
      <div v-if="slots.timeline">
        <span class="text-slate-500">Timeline: </span>
        <span class="text-slate-300"
          ><slot name="timeline" mdc-unwrap="p"
        /></span>
      </div>
      <div v-if="slots.stats">
        <span class="text-slate-500">Stats: </span>
        <span class="text-slate-300"><slot name="stats" mdc-unwrap="p" /></span>
      </div>
      <div v-if="slots.stack">
        <span class="text-slate-500">Stack: </span>
        <span class="text-slate-300"><slot name="stack" mdc-unwrap="p" /></span>
      </div>
    </div>
  </div>
</template>
