<script setup lang="ts">
const isOpen = ref(false);

const sections = [
  { id: "summary", label: "Summary" },
  { id: "professional-experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "profiles", label: "Profiles" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    isOpen.value = false;
  }
};
</script>

<template>
  <nav
    class="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky top-[42px] z-30"
    aria-label="Page navigation"
  >
    <!-- Mobile menu button -->
    <button
      class="flex w-full items-center justify-between px-4 py-2 font-mono text-sm text-teal-400 md:hidden"
      :aria-expanded="isOpen"
      aria-controls="page-nav-menu"
      @click="isOpen = !isOpen"
    >
      <span>[Menu]</span>
      <span aria-hidden="true">{{ isOpen ? "▴" : "▾" }}</span>
    </button>

    <!-- Desktop nav (always visible) / Mobile nav (collapsible) -->
    <ul
      id="page-nav-menu"
      class="flex-col md:flex md:flex-row md:gap-1"
      :class="isOpen ? 'flex' : 'hidden md:flex'"
    >
      <li
        v-for="section in sections"
        :key="section.id"
        class="border-b border-slate-800 md:border-0"
      >
        <a
          :href="`#${section.id}`"
          class="block px-4 py-2 font-mono text-sm text-slate-400 transition-colors hover:bg-slate-800 hover:text-teal-400 focus:bg-slate-800 focus:text-teal-400 focus:outline-none"
          @click.prevent="scrollToSection(section.id)"
        >
          {{ section.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>
