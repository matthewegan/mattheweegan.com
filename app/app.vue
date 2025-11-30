<template>
  <div
    class="min-h-screen bg-slate-950 text-slate-50 crt-scanlines crt-glow print:bg-white print:text-slate-900"
  >
    <!-- Skip to content link for accessibility -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-500 focus:text-slate-950 focus:font-mono focus:border focus:border-teal-400"
    >
      Skip to content
    </a>

    <!-- Global site header -->
    <TerminalHeader />

    <!-- Page content -->
    <NuxtPage />
  </div>
</template>
