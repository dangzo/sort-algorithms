<template>
  <article class="max-w-3xl mx-auto px-8 pb-8 space-y-10">
    <PageTitle>{{ title }}</PageTitle>
    <slot />
    <BottomNav />
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
}>();
</script>
