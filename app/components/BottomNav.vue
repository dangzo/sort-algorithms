<template>
  <nav
    class="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex items-center justify-between"
  >
    <NuxtLink
      to="/"
      class="inline-flex items-center gap-2 px-4 py-2 text-amber-600 decoration-amber-600 dark:decoration-amber-400 dark:text-amber-400 transition-colors"
    >
      <span>← Back to Home</span>
    </NuxtLink>
    <NuxtLink
      to="#"
      class="inline-flex items-center gap-2 px-4 py-2 text-amber-600 decoration-amber-600 dark:decoration-amber-400 dark:text-amber-400 transition-colors"
      @click="scrollToTop"
    >
      <span>Back to Top ↑</span>
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
