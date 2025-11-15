<script setup lang="ts">
interface ToggleEvent extends Event {
  newState: "open" | "closed";
}

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const sections = [
  { id: "summary", label: "Summary" },
  { id: "professional-experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "profiles", label: "Profiles" },
];

function scrollToSection(id: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    menuRef.value?.hidePopover();
  }
}

function onToggle(event: Event): void {
  const toggleEvent = event as ToggleEvent;
  isOpen.value = toggleEvent.newState === "open";
}
</script>

<template>
  <nav
    class="border-b border-slate-700 bg-slate-900/95 backdrop-blur-sm sticky z-30"
    aria-label="Page navigation"
  >
    <!-- Mobile menu button -->
    <button
      popovertarget="page-nav-menu"
      class="flex w-full items-center justify-between px-4 py-2 font-mono text-sm text-teal-400 md:hidden"
      :aria-expanded="isOpen"
      aria-controls="page-nav-menu"
    >
      <span>[Sections]</span>
      <span aria-hidden="true">{{ isOpen ? "▴" : "▾" }}</span>
    </button>

    <!-- Desktop nav (always visible) / Mobile nav (collapsible) -->
    <ul
      id="page-nav-menu"
      ref="menuRef"
      class="flex-col md:flex md:flex-row md:gap-1 border-0 m-0 p-0 md:static md:bg-transparent md:border-0"
      popover="auto"
      @toggle="onToggle"
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

<style scoped>
nav {
  top: var(--header-height);
}

#page-nav-menu:popover-open {
  /* Position below both the global header and the nav button */
  position: fixed;
  top: calc(var(--header-height) + var(--page-nav-height));
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgb(15 23 42 / 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgb(51 65 85);
  z-index: 30;
}

/* Desktop: Override popover behavior - always visible, horizontal layout */
@media (min-width: 768px) {
  #page-nav-menu:popover-open {
    position: static;
    top: auto;
    left: auto;
    right: auto;
    width: auto;
    background: transparent;
    backdrop-filter: none;
    border: none;
  }
}
</style>
