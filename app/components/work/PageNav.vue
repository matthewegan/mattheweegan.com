<script setup lang="ts">
interface ToggleEvent extends Event {
  newState: "open" | "closed";
}

defineProps<{
  sections: { id: string; label: string }[];
  title?: string;
}>();

const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

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
    <div class="flex items-center justify-between md:gap-4">
      <!-- Project title -->
      <span
        v-if="title"
        class="shrink-1 min-w-0 truncate px-4 py-2 font-mono text-sm text-slate-200"
      >
        {{ title }}
      </span>

      <!-- Mobile menu button -->
      <button
        popovertarget="work-page-nav-menu"
        class="flex shrink-0 items-center gap-1 px-4 py-2 font-mono text-sm text-teal-400 md:hidden"
        :class="{ 'ml-auto': !title }"
        :aria-expanded="isOpen"
        aria-controls="work-page-nav-menu"
      >
        <span>[Sections]</span>
        <span aria-hidden="true">{{ isOpen ? "▴" : "▾" }}</span>
      </button>

      <!-- Desktop nav (always visible) / Mobile nav (collapsible) -->
      <ul
        id="work-page-nav-menu"
        ref="menuRef"
        class="shrink-0 flex-col md:flex md:flex-row md:gap-1 border-0 m-0 p-0 md:static md:bg-transparent md:border-0"
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
    </div>
  </nav>
</template>

<style scoped>
nav {
  top: var(--header-height);
}

#work-page-nav-menu:popover-open {
  position: fixed;
  top: calc(var(--header-height) + var(--page-nav-height));
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 0.5rem;
  background-color: rgb(30 41 59 / 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgb(51 65 85);
  border-left: 3px solid rgb(251 191 36);
  z-index: 30;
}

@media (min-width: 768px) {
  #work-page-nav-menu:popover-open {
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
