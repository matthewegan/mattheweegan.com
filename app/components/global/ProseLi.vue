<template>
  <li
    class="flex items-start gap-2 text-slate-300 print:block print:text-slate-900"
  >
    <span class="text-teal-500 print:hidden" aria-hidden="true">[▮]</span>
    <span class="flex-1">
      <slot />
    </span>
  </li>
</template>
