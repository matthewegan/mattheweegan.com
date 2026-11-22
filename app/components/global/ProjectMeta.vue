<template>
  <dl class="project-meta">
    <template
      v-for="label in ['Role', 'Timeline', 'Stats', 'Stack']"
      :key="label"
    >
      <div v-if="$slots[label.toLowerCase()]">
        <dt>{{ label }}</dt>
        <dd><slot :name="label.toLowerCase()" mdc-unwrap="p" /></dd>
      </div>
    </template>
  </dl>
</template>
