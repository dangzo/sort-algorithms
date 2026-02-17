<template>
  <div class="bg-amber-200 rounded-xs px-4 py-2">
    <slot />
  </div>
</template>

<script lang="ts" setup>
await new Promise((resolve) => setTimeout(resolve, 2000));
console.log('component loaded');
</script>
