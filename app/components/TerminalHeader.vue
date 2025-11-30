<script setup lang="ts">
interface ToggleEvent extends Event {
  newState: "open" | "closed";
}

const route = useRoute();
const isOpen = ref(false);
const menuRef = ref<HTMLElement | null>(null);

const navItems = [
  { label: "Resume", path: "/" },
  // Add new navigation items here as pages are created
];

function isActive(path: string): boolean {
  return route.path === path;
}

function onToggle(event: Event): void {
  const toggleEvent = event as ToggleEvent;
  isOpen.value = toggleEvent.newState === "open";
}

function closeMenu(): void {
  menuRef.value?.hidePopover();
}
</script>

<template>
  <header class="terminal-header sticky top-0 z-40">
    <div class="flex items-center justify-between gap-4">
      <!-- Site identifier -->
      <div class="flex items-center gap-2">
        <span class="power-led" aria-label="Power indicator" />
        <span class="site-name text-teal-400 font-semibold"
          >mattheweegan.com</span
        >
      </div>

      <!-- Primary navigation -->
      <nav aria-label="Primary navigation">
        <!-- Mobile menu button -->
        <button
          popovertarget="primary-nav-menu"
          class="font-mono text-sm text-teal-400 md:hidden"
          :aria-expanded="isOpen"
          aria-controls="primary-nav-menu"
        >
          <span>[Nav]</span>
          <span aria-hidden="true" class="ml-1">{{ isOpen ? "▴" : "▾" }}</span>
        </button>

        <!-- Desktop nav (always visible) / Mobile nav (collapsible) -->
        <ul
          id="primary-nav-menu"
          ref="menuRef"
          class="flex-col md:flex md:flex-row md:gap-4 border-0 m-0 p-0 md:static md:bg-transparent md:border-0"
          popover="auto"
          @toggle="onToggle"
        >
          <li
            v-for="item in navItems"
            :key="item.path"
            class="border-b border-slate-800 md:border-0"
          >
            <NuxtLink
              :to="item.path"
              class="block px-4 py-2 md:p-0 transition-colors duration-200 hover:text-teal-400 focus-visible:outline-none focus-visible:text-teal-400"
              :class="isActive(item.path) ? 'text-teal-400' : 'text-slate-400'"
              :aria-current="isActive(item.path) ? 'page' : undefined"
              @click="closeMenu"
            >
              <span v-if="isActive(item.path)" class="text-slate-500">[</span>
              {{ item.label }}
              <span v-if="isActive(item.path)" class="text-slate-500">]</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
/* Site name glow effect */
.site-name {
  text-shadow:
    0 0 10px rgba(20, 184, 166, 0.4),
    0 0 20px rgba(20, 184, 166, 0.2);
}

/* Nav link hover glow */
nav a:hover,
nav a:focus-visible {
  text-shadow:
    0 0 8px rgba(20, 184, 166, 0.6),
    0 0 16px rgba(20, 184, 166, 0.3);
}

/* Active nav link glow */
nav a[aria-current="page"] {
  text-shadow:
    0 0 10px rgba(20, 184, 166, 0.5),
    0 0 20px rgba(20, 184, 166, 0.25);
}

/* Reduce visual complexity for users who prefer reduced motion */
@media (prefers-reduced-motion: reduce) {
  .site-name,
  nav a:hover,
  nav a:focus-visible,
  nav a[aria-current="page"] {
    text-shadow: none;
  }
}

#primary-nav-menu:popover-open {
  position: fixed;
  top: var(--header-height);
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 0.5rem;
  background-color: rgb(15 23 42 / 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgb(51 65 85);
  border-left: 3px solid rgb(45 212 191);
  z-index: 39;
}

/* Remove bottom border from last item to avoid stray line with single items */
#primary-nav-menu:popover-open li:last-child {
  border-bottom: none;
}

@media (min-width: 768px) {
  #primary-nav-menu:popover-open {
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
