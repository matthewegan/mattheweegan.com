<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<template>
  <div class="mb-6 text-slate-300">
    <div class="grid gap-y-1">
      <div v-if="slots.title" class="leading-relaxed font-semibold">
        <slot name="title" mdc-unwrap="p" />
      </div>
      <div v-if="slots.location" class="leading-relaxed">
        <slot name="location" mdc-unwrap="p" />
      </div>
      <div v-if="slots.email" class="leading-relaxed">
        <slot name="email" mdc-unwrap="p" />
      </div>
      <div v-if="slots.profiles" class="leading-relaxed">
        <slot name="profiles" mdc-unwrap="p" />
      </div>
    </div>
    <hr class="mt-4 border-t border-slate-700" aria-hidden="true" />
  </div>
</template>
